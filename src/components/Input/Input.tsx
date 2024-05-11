import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { InputProps as OriginalInputProps, styled, TextField, TextFieldProps } from '@mui/material';
import { isFunction } from 'lodash';
import {
  ControllerRenderProps,
  FieldValues,
  useController,
  useFormContext,
  UseFormResetField,
  UseFormSetValue,
} from 'react-hook-form';

import useInputError from '@/hooks/useInputError';
import { ControllersProps } from '@/types';
import handleInputRef from '@/utils/handleInputRef';
import { transientOptions } from '@/utils/transientOptions';
import InputHelper from '../InputHelper';
const StyledHelperText = styled(InputHelper)`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  margin-top: 2px;
`;
// import InputHelper from '../InputHelper';

export type FieldParamsType = {
  field: ControllerRenderProps<FieldValues, string>;
  resetField: UseFormResetField<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleCallbackFunc: () => void;
};

type Props = Omit<TextFieldProps, 'InputProps'> &
  ControllersProps & {
    name: string;
    InputProps?: Omit<OriginalInputProps, 'startAdornment' | 'endAdornment'> & {
      startAdornment?: ((fieldParams: FieldParamsType) => ReactNode) | ReactNode;
      endAdornment?: ((fieldParams: FieldParamsType) => ReactNode) | ReactNode;
    };
    keepInputFocused?: boolean;
    validateFields?: string | string[];
    supportingText?: string;
    isRequired?: boolean;
    isUnavailable?: boolean;
    className?: string;
    showError?: boolean;
    helperText?: ReactNode | string;
    maxLength?: number;
    isHalfWidth?: boolean;
  };

// const StyledHelperText = styled(InputHelper)`
//   font-size: 12px;
//   line-height: 16px;
//   font-weight: 400;
//   margin-top: 2px;
// `;

const StyledTextField = styled(TextField, transientOptions)<{ $isHalfWidth?: boolean }>`
  width: ${({ $isHalfWidth }) => ($isHalfWidth ? '50%' : '100%')};
`;

const Input = (
  {
    controllerProps,
    name,
    InputProps,
    InputLabelProps,
    keepInputFocused,
    validateFields,
    onChange,
    onFocus,
    onBlur,
    isHalfWidth,
    supportingText,
    isRequired,
    className,
    showError = true,
    maxLength,
    helperText,
    isUnavailable,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const { control, resetField, setValue, trigger } = useFormContext();
  const { field, fieldState } = useController({ name, control, ...controllerProps });
  const internalRef = useRef<HTMLInputElement>(null);
  const error = useInputError(name);
  const [shrink, setShrink] = useState(!!field.value);
  const adornmentProps = useMemo(
    () => ({
      field,
      resetField,
      setValue,
      handleCallbackFunc: () => setShrink(false),
    }),
    [field, resetField, setValue],
  );

  const handleOnFocus = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
      onFocus?.(e);
      setShrink(true);
    },
    [onFocus],
  );

  const handleOnBlur = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
      if (fieldState.isTouched) {
        if (onBlur) onBlur?.(e);
        else field.onBlur();
      }

      if (e.target.value || keepInputFocused) return;
      setShrink(false);
    },
    [field, fieldState.isTouched, keepInputFocused, onBlur],
  );

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (maxLength && e.target.value.length > maxLength) return;

      if (onChange) onChange?.(e);
      else field.onChange(e);

      if (validateFields) trigger(validateFields);
    },
    [field, onChange, trigger, validateFields, maxLength],
  );

  useEffect(() => {
    if (shrink) return;
    setShrink(!!field.value || !!props.value);
  }, [shrink, props.value, field.value]);

  useEffect(() => {
    const inputElement = ref ? (ref as React.MutableRefObject<HTMLInputElement | null>).current : internalRef.current;

    if (!inputElement) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const animationHandlers: Record<string, (e: any) => void> = {
      'mui-auto-fill': handleOnFocus,
      'mui-auto-fill-cancel': handleOnBlur,
    };

    const animationStartHandler = (e: AnimationEvent) => {
      const { animationName } = e;
      const handler = animationHandlers[animationName];

      handler?.(e);
    };

    inputElement.addEventListener('animationstart', animationStartHandler);
  }, [handleOnFocus, handleOnBlur, ref]);

  return (
    <StyledTextField
      {...field}
      {...props}
      ref={ref || internalRef}
      InputLabelProps={{ ...InputLabelProps, shrink }}
      InputProps={{
        ...InputProps,
        startAdornment: isFunction(InputProps?.startAdornment)
          ? InputProps?.startAdornment?.(adornmentProps)
          : InputProps?.startAdornment,
        endAdornment: isFunction(InputProps?.endAdornment)
          ? InputProps?.endAdornment?.(adornmentProps)
          : InputProps?.endAdornment,
      }}
      className={className}
      error={!!error}
      helperText={
        showError && (
          <StyledHelperText
            error={error || helperText}
            helperText={supportingText}
            isRequired={isRequired}
            isUnavailable={isUnavailable}
          />
        )
      }
      inputRef={(_ref) => handleInputRef(_ref, field)}
      size='small'
      onBlur={handleOnBlur}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      $isHalfWidth={isHalfWidth}
    />
  );
};

export default forwardRef(Input);
