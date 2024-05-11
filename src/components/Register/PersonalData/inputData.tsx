export enum InputEnum {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DROPDOWN = 'DROPDOWN',
  MULTI_SELECT = 'MULTI_SELECT',
  DATE = 'DATE',
  FILE = 'FILE',
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
  isHalfWidth?: boolean;
  options?: { id: string; label: string }[];
};

export const PERSONAL_DATA_INPUTS: InputType[] = [
  {
    label: 'Correo electrónico',
    id: 'email',
    type: InputEnum.TEXT,
    placeholder: 'Correo electrónico',
    isRequired: true,
  },
  {
    label: 'Contraseña',
    id: 'password',
    type: InputEnum.TEXT,
    placeholder: 'Contraseña',
    isRequired: true,
  },
  // {
  //   label: 'Repetir Contraseña',
  //   id: 'repeatPassword',
  //   type: InputEnum.TEXT,
  //   placeholder: 'Contraseña',
  //   isRequired: true,
  // },
  {
    label: 'Fecha de nacimiento',
    id: 'birthDate',
    type: InputEnum.DATE,
    placeholder: 'Fecha de nacimiento',
    isRequired: true,
  },
  {
    label: 'Provincia',
    id: 'state',
    type: InputEnum.DROPDOWN,
    placeholder: 'Provincia',
    isRequired: true,
    options: [
      {
        id: 'ba',
        label: 'Buenos Aires',
      },
      {
        id: 'ro',
        label: 'Santa Fe',
      },
      {
        id: 'ba',
        label: 'Neuquen',
      },
    ],
  },
  {
    label: 'Ciudad',
    id: 'city',
    type: InputEnum.DROPDOWN,
    placeholder: 'Ciudad',
    isRequired: true,
    options: [
      {
        id: 'ba',
        label: 'Buenos Aires',
      },
      {
        id: 'ro',
        label: 'Rosario',
      },
      {
        id: 'ba',
        label: 'Bariloche',
      },
    ],
  },
  // {
  //   label: 'Código postal',
  //   id: 'cp',
  //   type: InputEnum.TEXT,
  //   placeholder: 'Codigo postal',
  //   isRequired: true,
  // },
  // {
  //   label: 'Teléfono',
  //   id: 'phone',
  //   type: InputEnum.TEXT,
  //   placeholder: 'Teléfono',
  //   isRequired: true,
  // },
  // {
  //   label: 'Nacionalidad',
  //   id: 'nationality',
  //   type: InputEnum.DROPDOWN,
  //   isRequired: true,
  //   options: [
  //     {
  //       id: 'arg',
  //       label: 'Argentina',
  //     },
  //     {
  //       id: 'uy',
  //       label: 'Uruguay',
  //     },
  //     {
  //       id: 'cl',
  //       label: 'Chile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Idiomas',
  //   id: 'language',
  //   type: InputEnum.DROPDOWN,
  //   isRequired: true,
  //   options: [
  //     {
  //       id: 'es',
  //       label: 'Español',
  //     },
  //     {
  //       id: 'en',
  //       label: 'Inglés',
  //     },
  //   ],
  // },
  {
    label: 'Género',
    id: 'genre',
    type: InputEnum.DROPDOWN,
    isRequired: true,
    options: [
      {
        id: 'hombre',
        label: 'Hombre',
      },
      {
        id: 'mujer',
        label: 'Mujer',
      },
      {
        id: 'no-binario',
        label: 'No binario',
      },
    ],
  },
  // {
  //   label: 'Ocupación',
  //   id: 'ocupation',
  //   type: InputEnum.DROPDOWN,
  //   isRequired: true,
  //   isHalfWidth: true,
  //   options: [
  //     {
  //       id: 'empleado',
  //       label: 'Empleado',
  //     },
  //     {
  //       id: 'estudiante',
  //       label: 'Estudiante',
  //     },
  //     {
  //       id: 'desempleado',
  //       label: 'Desempleado',
  //     },
  //   ],
  // },
  // {
  //   label: 'Detalle',
  //   id: 'detail',
  //   type: InputEnum.TEXT,
  //   isRequired: true,
  //   isHalfWidth: true,
  // },
  // {
  //   label: '¿Tenés hijos?',
  //   id: 'kids',
  //   type: InputEnum.DROPDOWN,
  //   isRequired: true,
  //   options: [
  //     {
  //       id: 'yes',
  //       label: 'Si',
  //     },
  //     {
  //       id: 'no',
  //       label: 'No',
  //     },
  //   ],
  // },
];

export const MORE_INFORMATION_INPUTS: InputType[] = [
  {
    label: 'Pet friendly',
    id: 'petFriendly',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: 'Observaciones',
    id: 'observations',
    type: InputEnum.TEXT,
    isRequired: false,
  },
  {
    label: 'LGBTIQ+ friendly',
    id: 'lgbtiqFriendly',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: '¿Fumas?',
    id: 'smoke',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    isHalfWidth: true,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: '¿Admitis fumadores?',
    id: 'admitSmokers',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    isHalfWidth: true,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: 'Cannabis friendly',
    id: 'cannabisFriendly',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: '¿Convivis con otras personas?',
    id: 'liveWithOthers',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: '¿Aceptas un/a roomie artista musical?',
    id: 'acceptMusician',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: 'Del 1 al 10, ¿cuán importante es el orden y la limpieza para vos?',
    id: 'cleanlinessImportance',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: Array.from({ length: 10 }, (_, i) => ({ id: `${i + 1}`, label: `${i + 1}` })),
  },
  {
    label: '¿Aceptas un/a roomie que trabaje remoto?',
    id: 'acceptRemoteWork',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: '¿Tenés restricciones y/o preferencias alimenticias?',
    id: 'foodRestrictions',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: 'Detallá cuáles',
    id: 'foodRestrictionsDetail',
    type: InputEnum.TEXT,
    isRequired: false,
  },
  {
    label: '¿Tenés alguna alergia o intolerancia?',
    id: 'allergy',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: 'Detallá cuáles',
    id: 'allergyDetail',
    type: InputEnum.TEXT,
    isRequired: false,
  },
  {
    label: '¿Deseas compartir información sobre alguna?',
    id: 'shareInfo',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: 'Observaciones',
    id: 'observations2',
    type: InputEnum.TEXT,
    isRequired: false,
  },
  {
    label: '¿La preferencia política es un factor decisivo?',
    id: 'politicalPreference',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'no', label: 'No' },
    ],
  },
  {
    label: '¿Cuál es tu orientación política?',
    id: 'politicalOrientation',
    type: InputEnum.DROPDOWN,
    isRequired: false,
    options: [
      { id: 'left', label: 'Izquierda' },
      { id: 'right', label: 'Derecha' },
      { id: 'center', label: 'Centro' },
    ],
  },
];
