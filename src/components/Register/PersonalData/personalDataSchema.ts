import * as yup from 'yup';

const personalDataSchema = yup.object().shape({
  personalData: yup.object().shape({
    name: yup.string().required(),
    age: yup.string().required('La edad es requerida'),
    genre: yup.string().required('El género es requerido'),
    ocupation: yup.string().required('La ocupación es requerida'),
    kids: yup.string().required('Este campo es obligatorio'),
    others: yup.string().required('Este campo es obligatorio'),
  }),
});

export default personalDataSchema;
