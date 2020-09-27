import React, { useEffect, useState } from 'react';
import { } from 'styled-components';
import Table from 'react-bootstrap/Table';
import firebaseDb from '../../firebase'

function Contact() {
    const [ contactObjects, setContactObjects] = useState({})

    useEffect(()=>{
        firebaseDb.child('contacts').on('value', snapshot => {
            if(snapshot.val() != null)
            setContactObjects({
                ...snapshot.val()
            })
        })
    },[])

    return (
        <div>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Estado Civil</th>
                <th>CPF</th>
                <th>Cidade</th>
                <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
}

export default Contact;