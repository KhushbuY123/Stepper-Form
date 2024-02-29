import * as Yup from 'yup';
export const userSchema=Yup.object().shape(
    {
        Name:Yup.string()
        .min(3,'Too Short!')
        .max(50,'Too long!')
        .required('Required')
    }
)