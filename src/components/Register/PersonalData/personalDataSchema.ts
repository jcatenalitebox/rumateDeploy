import * as yup from 'yup';
// export const PERSONAL_DATA_INPUTS: InputType[] = [
//   {
//     label: 'Correo electrónico',
//     id: 'email',
//     type: InputEnum.TEXT,
//     placeholder: 'Correo electrónico',
//     isRequired: true,
//   },
//   {
//     label: 'Contraseña',
//     id: 'password',
//     type: InputEnum.TEXT,
//     placeholder: 'Contraseña',
//     isRequired: true,
//   },
//   {
//     label: 'Repetir Contraseña',
//     id: 'repeatPassword',
//     type: InputEnum.TEXT,
//     placeholder: 'Contraseña',
//     isRequired: true,
//   },
//   {
//     label: 'Fecha de nacimiento',
//     id: 'birthDate',
//     type: InputEnum.DATE,
//     placeholder: 'Fecha de nacimiento',
//     isRequired: true,
//   },
//   {
//     label: 'Provincia',
//     id: 'state',
//     type: InputEnum.DROPDOWN,
//     placeholder: 'Provincia',
//     isRequired: true,
//     options: [
//       {
//         id: 'ba',
//         label: 'Buenos Aires',
//       },
//       {
//         id: 'ro',
//         label: 'Santa Fe',
//       },
//       {
//         id: 'ba',
//         label: 'Neuquen',
//       },
//     ],
//   },
//   {
//     label: 'Ciudad',
//     id: 'city',
//     type: InputEnum.DROPDOWN,
//     placeholder: 'Ciudad',
//     isRequired: true,
//     options: [
//       {
//         id: 'ba',
//         label: 'Buenos Aires',
//       },
//       {
//         id: 'ro',
//         label: 'Rosario',
//       },
//       {
//         id: 'ba',
//         label: 'Bariloche',
//       },
//     ],
//   },
//   {
//     label: 'Código postal',
//     id: 'cp',
//     type: InputEnum.TEXT,
//     placeholder: 'Codigo postal',
//     isRequired: true,
//   },
//   {
//     label: 'Teléfono',
//     id: 'phone',
//     type: InputEnum.TEXT,
//     placeholder: 'Teléfono',
//     isRequired: true,
//   },
//   {
//     label: 'Nacionalidad',
//     id: 'nationality',
//     type: InputEnum.DROPDOWN,
//     isRequired: true,
//     options: [
//       {
//         id: 'arg',
//         label: 'Argentina',
//       },
//       {
//         id: 'uy',
//         label: 'Uruguay',
//       },
//       {
//         id: 'cl',
//         label: 'Chile',
//       },
//     ],
//   },
//   {
//     label: 'Idiomas',
//     id: 'language',
//     type: InputEnum.DROPDOWN,
//     isRequired: true,
//     options: [
//       {
//         id: 'es',
//         label: 'Español',
//       },
//       {
//         id: 'en',
//         label: 'Inglés',
//       },
//     ],
//   },
//   {
//     label: 'Género',
//     id: 'genre',
//     type: InputEnum.DROPDOWN,
//     isRequired: true,
//     options: [
//       {
//         id: 'hombre',
//         label: 'Hombre',
//       },
//       {
//         id: 'mujer',
//         label: 'Mujer',
//       },
//       {
//         id: 'no-binario',
//         label: 'No binario',
//       },
//     ],
//   },
//   {
//     label: 'Ocupación',
//     id: 'ocupation',
//     type: InputEnum.DROPDOWN,
//     isRequired: true,
//     isHalfWidth: true,
//     options: [
//       {
//         id: 'empleado',
//         label: 'Empleado',
//       },
//       {
//         id: 'estudiante',
//         label: 'Estudiante',
//       },
//       {
//         id: 'desempleado',
//         label: 'Desempleado',
//       },
//     ],
//   },
//   {
//     label: 'Detalle',
//     id: 'detail',
//     type: InputEnum.TEXT,
//     isRequired: true,
//     isHalfWidth: true,
//   },
//   {
//     label: '¿Tenés hijos?',
//     id: 'kids',
//     type: InputEnum.DROPDOWN,
//     isRequired: true,
//     options: [
//       {
//         id: 'yes',
//         label: 'Si',
//       },
//       {
//         id: 'no',
//         label: 'No',
//       },
//     ],
//   },
// ];

const personalDataSchema = yup.object().shape({
  personalData: yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required('La edad es requerida'),
    // repeatPassword: yup.string().required('El género es requerido'),
    birthDate: yup.string().required('La ocupación es requerida'),
    state: yup.string().required('Este campo es obligatorio'),
    city: yup.string().required('Este campo es obligatorio'),
    // cp: yup.string().required('Este campo es obligatorio'),
    // phone: yup.string().required('Este campo es obligatorio'),
    // nationality: yup.string().required('Este campo es obligatorio'),
    // language: yup.string().required('Este campo es obligatorio'),
    genre: yup.string().required('Este campo es obligatorio'),
    // ocupation: yup.string().required('Este campo es obligatorio'),
    // kids: yup.string().required('Este campo es obligatorio'),
  }),
});

export default personalDataSchema;
