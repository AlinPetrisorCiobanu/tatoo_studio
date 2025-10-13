import { useState } from "react"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Form_Component from "../../components/Form/Form"
import { login, register } from "../../services/apiCalls"


const Register = () => {

    const [register_data, setRegister_data] = useState({
        name: "",
        email: "",
        nickname: "",
        password: ""
      })

    const form_constructor = [
        {
            id: "Name",
            name: "Name",
            type: "text",
            label: "Nombre : ",
            onchange: "inputHandler",
            placeholder: "Introduce tu Nombre",
        }, {
            id: "last_name",
            name: "last_name",
            type: "text",
            label: "Apellidos : ",
            onchange: "",
            placeholder: "Introduce tus Apellidos",
        }, {
            id: "nickname",
            name: "nickname",
            type: "text",
            label: "Nombre de Usuario : ",
            onchange: "",
            placeholder: "Introduce tu Usuario",
        }, {
            id: "Password",
            name: "Password",
            type: "password",
            label: "Contraseña : ",
            onchange: "",
            placeholder: "********",
        }
    ]

    const inputHandler = (e) => {
        setRegister_data((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

const handleSubmit = (e) => {
  e.preventDefault(); 

   if (register_data.name !== "" || register_data.email !== "" || register_data.nickname !== "" || register_data.password !== "") {
        register(register_data)
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
  console.log("Data send:", register_data);
};



    return (
        <div className="Container">
            <Banner page="Registro de Usuario" />
            <Form_Component
                value={form_constructor}
                button_text="Registrar"
                onInputChange={inputHandler}
                onSubmit={handleSubmit}
            />
            <Footer />
        </div>
    )

}

export default Register