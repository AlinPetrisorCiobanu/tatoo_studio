import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Principal() {


  return (
    <Container fluid="md" className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <Row className='w-100'>
        <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='text-center p-4 mt-5'>
          <h1>Tattoo Studio</h1>
        </Col>
      </Row>
      <Row className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
          <Row className="justify-content-center align-items-center">
            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='text-center p-2'>
              <div className="custom-input">
                <input type="text" id="userEmail" required />
                <label htmlFor="userEmail">User/Email</label>
              </div>
            </Col>
            <hr />
            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='text-center p-2'>
              <div className="custom-input">
                <input type="text" id="password" required />
                <label htmlFor="password">Password</label>
              </div>
            </Col>
            <hr />
            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
              <Row className='justify-content-around align-items-center mt-2'>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='d-flex justify-content-center align-items-center text-center' >
                <Button className='button_login_reg'>Entrar</Button>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='d-flex justify-content-center align-items-center text-center' >
                <Button className='button_login_reg'>Registrar</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Principal
