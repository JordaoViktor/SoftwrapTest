import React, { useEffect, useState } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { Container } from  './styled';
import Button from 'react-bootstrap/Button'
import * as yup from 'yup'

function ContactForm (props) {
    const initialValues = {
        name:'',
        age:'',
        maritalStatus:'',
        CPF:'',
        city:'',
        state:'',
    };
    let [ values, setValues ] = useState(initialValues)

    useEffect(()=> { 

        if (props.currentId ==='') {
            setValues({
                ...initialValues
            })
        }

        else {
            setValues({
                ...props.contactObjects[props.currentId]
            })
        }
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
       let {name, value } = e.target
       setValues({
           ...values,
           [name]: value
       })
    }

   
    
    const validations = yup.object().shape({
        name:yup.string().min(3).required(),
        age:yup.number().required(),
        maritalStatus:yup.string().required(),
        CPF:yup.number().min(11).required(),
        city:yup.string().required(),
        state:yup.string().required()
    });

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
        
    }
console.log(props.currentId)
    return(
        <Formik initialValues={initialValues} validationSchema={validations}>
            <FormikForm onSubmit={handleFormSubmit}>
                <Container>
                    <h3>Digite seu Nome</h3>
                    <Field type="text" name="name" value={values.name} onInput={handleInputChange} placeholder="Digite o seu nome" className="mb-2"/> 
                    
                    <h3>Digite sua Idade</h3>
                    <Field type="number" name="age" value={values.age} onInput={handleInputChange} placeholder="Digite a sua idade" className="mb-2"/> 

                    <h3>Digite seu Estado civil</h3>
                    <Field type="text" name="maritalStatus" value={values.maritalStatus} onInput={handleInputChange} placeholder="Estado Civil" className="mb-2"/> 

                    <h3>Digite seu CPF</h3>
                    <Field type="number" name="cpf" value={values.cpf}  onInput={handleInputChange} placeholder="CPF" className="mb-2"/> 

                    <h3>Digite sua Cidade</h3>
                    <Field type="text" name="city" value={values.city} onInput={handleInputChange} placeholder="Cidade" className="mb-2"/> 

                    <h3>Digite seu Estado</h3>
                    <Field type="text" name="state" value={values.state} onInput={handleInputChange} placeholder="Estado" className="mb-2"/> 
                    <Button type="submit" variant="primary">{props.currentId === '' ? "Salvar" : "Atualizar"}</Button>
                </Container> 
            </FormikForm>
        </Formik>
    )
}

export default ContactForm;