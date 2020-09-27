import React, { useState } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { Container } from  './styled';
import Button from 'react-bootstrap/Button'
import * as yup from 'yup'

function ContactForm () {
    const initialValues = {
        name:'',
        age:'',
        maritalStatus:'',
        CPF:'',
        city:'',
        state:'',
    };

    const validations = yup.object().shape({
        name:yup.string().min(3).required(),
        age:yup.number().required(),
        maritalStatus:yup.string().required(),
        CPF:yup.number().min(11).required(),
        city:yup.string().required(),
        state:yup.string().required()
    });

    const [ values, setValues ] = useState(initialValues);

    const handleInputChange = e => {
        let [ name, value] = e.target
        setValues({
            ...values,
            [name]: value
        })
    };
    return(
        <Formik initialValues={initialValues} validationSchema={validations}>
            <FormikForm>
                <Container>
                    <h3>Digite seu Nome</h3>
                    <Field type="text" name="name" value={values.name} onChange={handleInputChange} placeholder="Digite o seu nome" className="mb-2"/> 
                    
                    <h3>Digite sua Idade</h3>
                    <Field type="number" name="age" value={values.age} onChange={handleInputChange} placeholder="Digite a sua idade" className="mb-2"/> 

                    <h3>Digite seu Estado civil</h3>
                    <Field type="text" name="marital-status" value={values.maritalStatus} onChange={handleInputChange} placeholder="Estado Civil" className="mb-2"/> 

                    <h3>Digite seu CPF</h3>
                    <Field type="number" name="cpf" value={values.CPF}  onChange={handleInputChange} placeholder="CPF" className="mb-2"/> 

                    <h3>Digite sua Cidade</h3>
                    <Field type="text" name="city" value={values.city} onChange={handleInputChange} placeholder="Cidade" className="mb-2"/> 

                    <h3>Digite seu Estado</h3>
                    <Field type="text" name="state" value={values.state} onChange={handleInputChange} placeholder="Estado" className="mb-2"/> 
                    <Button variant="primary">Enviar</Button>
                </Container>
            </FormikForm>
        </Formik>
    )

}

export default ContactForm;