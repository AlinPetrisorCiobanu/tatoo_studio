import Container from 'react-bootstrap/Container';
import TextField from "@mui/material/TextField";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./principal.css"

function Principal() {

  function MyInput() {
    return (
      <TextField
        label="User/Email"
        variant="outlined"
        fullWidth
      />
    );
  }

  return (
    <Container fluid="md" className="d-flex justify-content-center align-items-center vh-100">
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
      </Row>
    </Container>
  )
}

export default Principal
