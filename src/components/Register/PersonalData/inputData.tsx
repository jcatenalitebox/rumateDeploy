export enum InputEnum {
  TEXT = 'TEXT',
  DROPDOWN = 'DROPDOWN',
  SINGLE_SELECT = 'SINGLE_SELECT',
}

export type InputType = {
  label: string;
  id: string;
  type: InputEnum;
  defaultValue?: string;
  placeholder?: string;
  isRequired?: boolean;
  dependencyValue?: string;
  dependency?: InputType;
  options?: { id: string; label: string }[];
};

export const PERSONAL_DATA_INPUTS: InputType[] = [
  {
    label: 'Nombre',
    id: 'name',
    type: InputEnum.TEXT,
    placeholder: 'Nombre completo',
    isRequired: true,
  },
  {
    label: 'Edad',
    id: 'age',
    type: InputEnum.TEXT,
    placeholder: 'Edad',
    isRequired: true,
  },
  {
    label: 'Género',
    id: 'genre',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    isRequired: true,
    options: [
      {
        id: 'male',
        label: 'Masculino',
      },
      {
        id: 'female',
        label: 'Femenino',
      },
      {
        id: 'other',
        label: 'Otro',
      },
      {
        id: 'non-binary',
        label: 'No binario',
      },
    ],
  },
  {
    id: 'ocupation',
    label: 'Ocupación',
    type: InputEnum.TEXT,
    placeholder: 'Ocupación',
    isRequired: true,
  },
  {
    id: 'kids',
    label: '¿Hijos?',
    type: InputEnum.SINGLE_SELECT,
    isRequired: true,
    options: [
      {
        id: 'yes-visit',
        label: 'Si, me vienen a visitar',
      },
      {
        id: 'no',
        label: 'No',
      },
      {
        id: 'yes-live',
        label: 'Si, viven conmigo',
      },
    ],
  },
  {
    label: '¿Alquilas con alguien mas?',
    id: 'renting-with-others',
    type: InputEnum.SINGLE_SELECT,
    isRequired: true,
    options: [
      {
        id: 'yes',
        label: 'Sí',
      },
      {
        id: 'no',
        label: 'No',
      },
    ],
  },
];
