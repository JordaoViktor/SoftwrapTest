import React, { useState } from 'react';
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
    
    const [ name, setName] = useState('')
    const [ age, setAge] = useState('')
    const [ maritalStatus, setMaritalStatus] = useState('')
    const [ cpf, setCPF] = useState('')
    const [ city, setCity] = useState('')
    const [ state, setState] = useState('')


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
        props.addOrEdith(name, age, maritalStatus, cpf, city, state)
    }

    return(
        <Formik initialValues={initialValues} validationSchema={validations}>
            <FormikForm onSubmit={handleFormSubmit}>
                <Container>
                    <h3>Digite seu Nome</h3>
                    <Field type="text" name="name" value={name} onChange={(event)=> setName(event.target.value)} placeholder="Digite o seu nome" className="mb-2"/> 
                    
                    <h3>Digite sua Idade</h3>
                    <Field type="number" name="age" value={age} onChange={(event)=> setAge(event.target.value)} placeholder="Digite a sua idade" className="mb-2"/> 

                    <h3>Digite seu Estado civil</h3>
                    <Field type="text" name="marital-status" value={maritalStatus} onChange={(event)=> setMaritalStatus(event.target.value)} placeholder="Estado Civil" className="mb-2"/> 

                    <h3>Digite seu CPF</h3>
                    <Field type="number" name="cpf" value={cpf}  onChange={(event)=> setCPF(event.target.value)} placeholder="CPF" className="mb-2"/> 

                    <h3>Digite sua Cidade</h3>
                    <Field type="text" name="city" value={city} onChange={(event)=> setCity(event.target.value)} placeholder="Cidade" className="mb-2"/> 

                    <h3>Digite seu Estado</h3>
                    <Field type="text" name="state" value={state} onChange={(event)=> setState(event.target.value)} placeholder="Estado" className="mb-2"/> 
                    <Button type="submit" variant="primary">Enviar</Button>
                </Container>
            </FormikForm>
        </Formik>
    )

}

export default ContactForm;