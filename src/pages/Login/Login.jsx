import { useState } from "react";
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Form_Component from "../../components/Form/Form"
import { login } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    const [login_data, setLogin_data] = useState({
        email_nickname: "",
        password: "",
    });

    const form_constructor = [
        {
            id: "email_nickname",
            name: "email_nickname",
            type: "text",
            label: "Usuario :",
            onchange: "",
            placeholder: "Introduce tu Email o Nombre de Usuario",
        }, {
            id: "password",
            name: "password",
            type: "password",
            label: "Contraseña : ",
            onchange: "",
            placeholder: "********",
        }
    ]

    const inputHandler = (e) => {
        setLogin_data((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (login_data.email_nickname !== "" || login_data.password !== "") {
            let dataToSend = {
                email: login_data.email_nickname,
                nickname: login_data.email_nickname,
                password: login_data.password
            }
            login(dataToSend)
                .then((res) => {
                    if (res.succes) {
                        console.log(res)
                        // setToken(res.token)
                        // setUser(res.data)
                    } else {
                        console.log("nada")
                    }
                })
                .catch((error) => handleOtherError(error));
        }
    };

    return (
        <div className="Container">
            <Banner page="Inicio de Sesion" />
            <Form_Component
                value={form_constructor}
                button_text="Entrar"
                onInputChange={inputHandler}
                onSubmit={handleSubmit}
            />
            <Footer />
        </div>
    )


}

export default Login