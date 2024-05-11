import { Box, IconButton, Typography, styled } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import theme from '@/theme';
import { useRouter } from 'next/router';

const StyledWrapper = styled(Box)`
  ${theme.mixins.layout};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  position: relative;
`;

const StyledIconButton = styled(IconButton)`
  &:hover {
    background: none;
  }
`;

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  color: ${theme.palette.customColors.black};
`;

type Props = {
  className?: string;
  onClickLeftComponent?: () => void;
  title?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
};

const MobileHeader = ({ className, onClickLeftComponent, title, leftComponent, rightComponent }: Props) => {
  const router = useRouter();

  const handleOnClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClickLeftComponent) return onClickLeftComponent();
    router.back();
  };

  return (
    <StyledWrapper className={className}>
      <StyledIconButton onClick={handleOnClickBack}>
        {leftComponent || <StyledArrowBackIosIcon color='inherit' />}
      </StyledIconButton>
      <Typography variant='h1'>{title}</Typography>
      {rightComponent ?? <div />}
    </StyledWrapper>
  );
};

export default MobileHeader;
