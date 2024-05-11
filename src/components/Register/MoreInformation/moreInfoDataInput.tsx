import { InputEnum, InputType } from '../PersonalData/inputData';

export const MORE_INFORMATION_INPUTS: InputType[] = [
  {
    label: 'Pet Friendly',
    id: 'petFriendly',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: 'LGBTIQ+ Friendly',
    id: 'lgbtiqFriendly',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: 'Fumas?',
    id: 'smoke',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: 'Admitis fumadores?',
    id: 'smokeAdmit',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: 'Cannabis Friendly',
    id: 'cannabisFriendly',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: 'Estás abiert@ a tener como rommie a Artistas musicales?',
    id: 'musicianFriendly',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: '¿Cuan importante es el orden y la limpieza para vos? del 1 al 10',
    id: 'cleanliness',
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
      {
        id: '6',
        label: '6',
      },
      {
        id: '7',
        label: '7',
      },
      {
        id: '8',
        label: '8',
      },
      {
        id: '9',
        label: '9',
      },
      {
        id: '10',
        label: '10',
      },
    ],
  },
  {
    label: '¿Estás abiert@ a convivir con alguien que trabaja desde su casa?',
    id: 'workFromHome',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: '¿Tenés restricciones y/o preferencias alimenticias?',
    id: 'foodRestrictions',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
    dependencyValue: 'Sí',
    dependency: {
      id: 'foodRestrictionsDetail',
      label: 'Detalle',
      type: InputEnum.TEXT,
      placeholder: 'Detalle',
    },
  },
  {
    label: '¿Deseas compartir información sobre alguna discapacidad que pueda ser relevante?',
    id: 'disability',
    type: InputEnum.DROPDOWN,
    placeholder: 'Detalle',
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
    dependencyValue: 'Sí',
    dependency: {
      id: 'disabilityDetail',
      label: 'Detalle',
      type: InputEnum.TEXT,
      placeholder: 'Detalle',
    },
  },
  {
    label: '¿La preferencia política es un factor decisivo en tu elección?',
    id: 'politicalPreference',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
    dependencyValue: 'Sí',
    dependency: {
      id: 'politicalPreferenceDetail',
      label: 'Detalle',
      type: InputEnum.DROPDOWN,
      placeholder: 'Detalle',
      options: [
        {
          id: 'left',
          label: 'Izquierda',
        },
        {
          id: 'right',
          label: 'Derecha',
        },
        {
          id: 'center',
          label: 'Centro',
        },
        {
          id: 'other',
          label: 'Otro',
        },
      ],
    },
  },
  {
    label: '¿Tenés alguna alergia o intolerancia?',
    id: 'allergy',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
    dependencyValue: 'Sí',
    dependency: {
      id: 'allergyDetail',
      label: 'Detalle',
      type: InputEnum.TEXT,
      placeholder: 'Detalle',
    },
  },
];

export const MORE_INFORMATION_INPUTS_EXTRA: InputType[] = [
  {
    label: 'Signo del zodíaco',
    id: 'zodiacSign',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'aries',
        label: 'Aries',
      },
      {
        id: 'tauro',
        label: 'Tauro',
      },
      {
        id: 'geminis',
        label: 'Géminis',
      },
      {
        id: 'cancer',
        label: 'Cáncer',
      },
      {
        id: 'leo',
        label: 'Leo',
      },
      {
        id: 'virgo',
        label: 'Virgo',
      },
      {
        id: 'libra',
        label: 'Libra',
      },
      {
        id: 'escorpio',
        label: 'Escorpio',
      },
      {
        id: 'sagitario',
        label: 'Sagitario',
      },
      {
        id: 'capricornio',
        label: 'Capricornio',
      },
      {
        id: 'acuario',
        label: 'Acuario',
      },
      {
        id: 'piscis',
        label: 'Piscis',
      },
    ],
  },
  {
    label: 'Música de preferencia',
    id: 'musicPreference',
    type: InputEnum.TEXT,
    placeholder: 'Música de preferencia',
  },
  {
    label: '¿El equipo de fútbol es un factor decisivo en tu elección?',
    id: 'soccerTeamPreference',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
    dependencyValue: 'Sí',
    dependency: {
      id: 'soccerTeamPreferenceDetail',
      label: 'Hincha de ...',
      type: InputEnum.TEXT,
      placeholder: 'Detalle',
    },
  },
  {
    label: '¿Está dispuesto a aceptar la diversidad religiosa?',
    id: 'religiousDiversity',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: 'Pañuelo?',
    id: 'scarf',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'green',
        label: 'Verde',
      },
      {
        id: 'blue',
        label: 'Celeste',
      },
    ],
  },
  {
    label: '¿Te copa el animé?',
    id: 'animeFan',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: '¿Qué harías en un apocalipsis zombie?',
    id: 'zombieApocalypse',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'fight',
        label: 'Luchar',
      },
      {
        id: 'run',
        label: 'Correr',
      },
    ],
  },
  {
    label: '¿Te preocupa el cambio climático?',
    id: 'climateChange',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
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
  {
    label: '¿Qué preferís?',
    id: 'beveragePreference',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'coffee',
        label: 'Café',
      },
      {
        id: 'mate',
        label: 'Mate',
      },
      {
        id: 'tea',
        label: 'Té',
      },
      {
        id: 'other',
        label: 'Otro',
      },
    ],
  },
  {
    label: '¿Sos una persona diurna o nocturna?',
    id: 'dayOrNightPerson',
    type: InputEnum.DROPDOWN,
    placeholder: 'Selecciona una opción',
    options: [
      {
        id: 'day',
        label: 'Diurna',
      },
      {
        id: 'night',
        label: 'Nocturna',
      },
    ],
  },
];
