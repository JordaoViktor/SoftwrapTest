import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron' 
import Container from 'react-bootstrap/Container' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { SplitScreen } from './styled'

import Contact from '../../components/Contact'
import ContactForm from '../../components/ContactForm'
import firebaseDb from '../../firebase'

function Home() {
  const addOrEdit = object => {
      firebaseDb.child('contacts').push(
        object,
        err => {
          if(err)
          console.log(err)
        }
      )
  }
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
          <ContactForm addOrEdit={addOrEdit}/>
        </Container>
        <Container>
          <Contact >
          
          </Contact>
        </Container>
      </SplitScreen>
    </>
  );
}

export default Home;
