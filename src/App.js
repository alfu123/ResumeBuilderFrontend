import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Col, Container, Row } from 'reactstrap';
import Signup from './components/Signup';
const App = () => {
  const btnHandle=() =>{
    toast.error("done", {position:"top-center",});
  }
  return (
    <div>
      <ToastContainer/>
      <Container>
        <Row>
          <Col md={4}>
          </Col>
          <Col md={8}>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default App
