import React, { useContext } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron' 
import Container from 'react-bootstrap/Container' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { SplitScreen } from './styled'

import Contact from '../../components/Contact'
import ContactForm from '../../components/ContactForm'
import firebaseDb from '../../firebase'
import { FirebaseContext } from '../../App'

function Home() {
  const addOrEdit = object => {
    if (currentId ==''){
      firebaseDb.child('contacts').push(
        object,
        err => {
          if(err){
            console.log(err)
          }else {
            setCurrentId('')
          }
        } 
      )
    } else{
        firebaseDb.child(`contacts/${currentId}`).set(
          object,
          err => {
            if(err){
              console.log(err)
            } else {
              setCurrentId('')
            }
          
          }
        )
      }
    }
    const onDelete = key => {
      if (window.confirm('Você tem certeza que quer deletar ?')){
          firebaseDb.child(`contacts/${key}`).remove(err => {
                  if(err){
                    console.log(err)
                  } else {
                    setCurrentId('')
                  }               
                }
          )
      }
  }

const {contactObjects, currentId, setContactObjects, setCurrentId } = useContext(FirebaseContext)

  return (
    <>
    
      <Jumbotron fluid >
        <Container className="d-flex flex-column justify-content-center">
          <h1>Softwrap form</h1>
          <p>
            Preencha o formulário abaixo
          </p>
        </Container>    
      </Jumbotron>
      <SplitScreen>
        <Container>
          <ContactForm {...({addOrEdit, currentId, contactObjects})}/>
        </Container>
        <Container>
          <Contact  {...({currentId, contactObjects, setContactObjects, setCurrentId, onDelete})}/>
        </Container>
      </SplitScreen>
    </>
  );
}

export default Home;
