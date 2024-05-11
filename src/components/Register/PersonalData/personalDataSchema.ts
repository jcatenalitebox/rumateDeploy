import * as yup from 'yup';

const personalDataSchema = yup.object().shape({
  personalData: yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required('La edad es requerida'),
    repeatPassword: yup.string().required('El género es requerido'),
    birthDate: yup.string().required('La ocupación es requerida'),
    state: yup.string().required('Este campo es obligatorio'),
    city: yup.string().required('Este campo es obligatorio'),
    cp: yup.string().required('Este campo es obligatorio'),
    phone: yup.string().required('Este campo es obligatorio'),
    nationality: yup.string().required('Este campo es obligatorio'),
    language: yup.string().required('Este campo es obligatorio'),
    genre: yup.string().required('Este campo es obligatorio'),
    ocupation: yup.string().required('Este campo es obligatorio'),
    kids: yup.string().required('Este campo es obligatorio'),
  }),
});

export default personalDataSchema;
