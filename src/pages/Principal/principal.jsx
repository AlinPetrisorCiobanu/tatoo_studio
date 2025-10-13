import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { login, register } from '../../services/apiCalls';

function Principal() {

  const [user, setUser] = useState({})
  const [token, setToken] = useState(false)
  const [show_login, setLogin] = useState(true)
  const [loginData, setLoginData] = useState({
    user_data: "",
    password: "",
  });
  const [register_data, setRegister_data] = useState({
    name: "",
    email: "",
    nickname: "",
    password: ""
  })

  //guardo los datos de los inputs
  const inputHandler = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setRegister_data((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginHand = (data) => {
    if (data.user_data !== "" || data.password !== "") {
      let dataToSend = {};
      dataToSend = {
        nickname: data.user_data,
        email: data.user_data,
        password: data.password,
      };
      login(dataToSend)
        .then((res) => {
          if (res.succes) {
            setToken(res.token)
            setUser(res.data)
          } else {
            console.log("nada")
          }

        })
        .catch((error) => handleOtherError(error));
    } else {
      console.log("campos vacios")
    }
  };

  const registerHand = (data) => {
    if (data.name !== "" || data.email !== "" || data.nickname !== "" || data.password !== "") {
      register(data)
        .then((res) => {
          if (res.succes) {
            let dataToSend = {
              nickname: data.nickname,
              password: data.password
            }
            login(dataToSend)
              .then((res) => {
                if (res.succes) {
                  setToken(res.token)
                  setUser(res.data)
                } else {
                  console.log("nada")
                }
              })
              .catch((error) => handleOtherError(error));
          }
        })
    } else {
      console.log("campos vacios")
    }
  }

  const logOut = () =>{
    setToken("")
    setUser("")
  }

  return (
    <Container fluid="md" className="d-flex justify-content-center align-items-center vh-100 flex-column">
      {token ? (
        <>
          <h1 className='mb-5'>Bienvenido {user.name ? (user.name) : ("Usuario")} </h1>
          <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
                      <Row className='justify-content-around align-items-center mt-2'>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='d-flex justify-content-center align-items-center text-center' >
                          <Button className='button_login_reg' onClick={() => { logOut()}}>Salir</Button>
                        </Col>
                      </Row>
                    </Col>
        </>
      ) : (
        <>
          <Row className='w-100'>
            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='text-center p-2 mt-2'>
              <h1>Tattoo Studio</h1>
            </Col>
          </Row>
          <Row className="flex-grow-1 d-flex justify-content-center align-items-center">
            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
              <Row className="justify-content-center align-items-center">
                {show_login ? (
                  <>
                    <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='text-center p-2'>
                      <div className="custom-input">
                        <input name='user_data' type="text" id="user_data" required onChange={inputHandler} />
                        <label htmlFor="user_data">User/Email</label>
                      </div>
                    </Col>
                    <hr />
                    <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} className='text-center p-2'>
                      <div className="custom-input">
                        <input name='password' type="text" id="password" required onChange={inputHandler} />
                        <label htmlFor="password">Password</label>
                      </div>
                    </Col>
                    <hr />
                    <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
                      <Row className='justify-content-around align-items-center mt-2'>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='d-flex justify-content-center align-items-center text-center' >
                          <Button className='button_login_reg' onClick={() => { loginHand(loginData) }}>Entrar</Button>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='d-flex justify-content-center align-items-center text-center' >
                          <Button className='button_login_reg' onClick={() => setLogin(false)}>Registrate</Button>
                        </Col>
                      </Row>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col xs={11} sm={11} md={11} lg={5} xl={5} xxl={5} className='text-center p-2'>
                      <div className="custom-input">
                        <input name='name' type="text" id="Name" required onChange={inputHandler} />
                        <label htmlFor="Name">Nombre</label>
                      </div>
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={5} xl={5} xxl={5} className='text-center p-2'>
                      <div className="custom-input">
                        <input name="email" type="text" id="userEmail" required onChange={inputHandler} />
                        <label htmlFor="userEmail">Email</label>
                      </div>
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={5} xl={5} xxl={5} className='text-center p-2'>
                      <div className="custom-input">
                        <input name='nickname' type="text" id="Nickname" required onChange={inputHandler} />
                        <label htmlFor="Nickname">Usuario</label>
                      </div>
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={5} xl={5} xxl={5} className='text-center p-2'>
                      <div className="custom-input">
                        <input name='password' type="text" id="password" required onChange={inputHandler} />
                        <label htmlFor="password">Password</label>
                      </div>
                    </Col>
                    <hr />
                    <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
                      <Row className='justify-content-around align-items-center mt-2'>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='d-flex justify-content-center align-items-center text-center' >
                          <Button className='button_login_reg' onClick={() => { registerHand(register_data) }}>Registrar</Button>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='d-flex justify-content-center align-items-center text-center' >
                          <Button className='button_login_reg' onClick={() => setLogin(true)}>Login</Button>
                        </Col>
                      </Row>
                    </Col>
                  </>
                )}

              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default Principal
