import { InputEnum, InputType } from '../PersonalData/inputData';

export const HOSTIE_GENERAL: InputType[] = [
  {
    label: 'Tipo de propiedad',
    id: 'propertyType',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'house',
        label: 'Casa',
      },
      {
        id: 'apartment',
        label: 'Departamento',
      },
      {
        id: 'room',
        label: 'Habitación',
      },
    ],
  },
  {
    label: 'Cantidad de ambientes',
    id: 'rooms',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: '1',
        label: '1',
      },
      {
        id: '2',
        label: '2',
      },
      {
        id: '3',
        label: '3',
      },
      {
        id: '4',
        label: '4',
      },
      {
        id: '5',
        label: '5',
      },
    ],
  },
  {
    label: 'Cantidad de baños',
    id: 'bathrooms',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: '1',
        label: '1',
      },
      {
        id: '2',
        label: '2',
      },
      {
        id: '3',
        label: '3',
      },
      {
        id: '4',
        label: '4',
      },
      {
        id: '5',
        label: '5',
      },
    ],
  },
  {
    label: 'Espacio exterior',
    id: 'outdoorSpace',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'yes',
        label: 'Si',
      },
      {
        id: 'no',
        label: 'No',
      },
    ],
  },
  {
    label: 'Cuenta con cochera',
    id: 'garage',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'yes',
        label: 'Si',
      },
      {
        id: 'no',
        label: 'No',
      },
    ],
  },
  {
    label: 'Es una propiedad amueblada',
    id: 'furnished',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'yes',
        label: 'Si',
      },
      {
        id: 'no',
        label: 'No',
      },
    ],
  },
  {
    label: 'Es una propiedad accesible',
    id: 'accessible',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'yes',
        label: 'Si',
      },
      {
        id: 'no',
        label: 'No',
      },
    ],
  },
];
