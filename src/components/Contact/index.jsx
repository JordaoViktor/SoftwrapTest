import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import firebaseDb from '../../firebase';
import { BsPencil, BsTrash } from 'react-icons/bs';
import Pagination from 'react-bootstrap/Pagination'

function Contact({contactObjects, setContactObjects, currentId, setCurrentId, onDelete}) {
    useEffect(()=>{
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null){
                setContactObjects({
                    ...snapshot.val()
                })
            } else{ 
                setContactObjects({})
            }
        })
    },[])

    useEffect(
        ()=> {
            
        },[]
    )
        

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postPerPage, setPostPerPage ] = useState(5);

   const indexOfLastPost = currentPage * postPerPage;
   const indexOfFirstPost = indexOfLastPost - postPerPage;

   const currentPosts = Object.keys(contactObjects).slice(indexOfFirstPost,indexOfLastPost);
    
   const pageNumbers = []
   
   for(let i = 1; i<= Math.ceil(Object.keys(contactObjects).length/ postPerPage);i++){
       pageNumbers.push(i)
    }
    
    const paginate = (pageNumbers) => {setCurrentPage(pageNumbers)}
   console.log(currentPosts)
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
                {currentPosts.map(id=>{
                    return( 
                        <tr key={id}>
                            <td>{contactObjects[id].name}</td>
                            <td>{contactObjects[id].age}</td>
                            <td>{contactObjects[id].maritalStatus}</td>
                            <td>{contactObjects[id].cpf}</td>
                            <td>{contactObjects[id].city}</td>
                            <td>{contactObjects[id].state}</td>
                            <td>
                                <a className="btn text-danger" onClick={() =>onDelete(id)} >
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
            <Pagination>

                {pageNumbers.map((index)=>{
                    
                    return (
                        currentPage != index  ? 
                        <Pagination.Item  onClick={()=> paginate(index)} key={index}><a >{index}</a></Pagination.Item>
                         : <Pagination.Item active onClick={()=> paginate(index)} key={index}><a >{index}</a></Pagination.Item>
                    
                    )
                })}
    
            </Pagination>
        </div>
    )
}

export default Contact;