import React, { useEffect } from 'react';
import { } from 'styled-components';
import Table from 'react-bootstrap/Table';
import firebaseDb from '../../firebase';
import { BsPencil, BsTrash } from 'react-icons/bs';


function Contact({contactObjects, setContactObjects, currentId, setCurrentId}) {
    useEffect(()=>{
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
            setContactObjects({
                ...snapshot.val()
            })
        })
    },[])

    return (
        <div className="mr-1">
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Estado Civil</th>
                <th>CPF</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(contactObjects).map(id=>{
                    return( 
                        <tr key={id}>
                            <td>{contactObjects[id].name}</td>
                            <td>{contactObjects[id].age}</td>
                            <td>{contactObjects[id].maritalStatus}</td>
                            <td>{contactObjects[id].cpf}</td>
                            <td>{contactObjects[id].city}</td>
                            <td>{contactObjects[id].state}</td>
                            <td>
                                <a className="btn text-danger" >
                                    <BsTrash/>
                                </a>
                                <a className="btn text-primary" onClick={()=> {setCurrentId(id)}}>
                                    <BsPencil/>
                                </a>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </Table>
        </div>
    )
}

export default Contact;