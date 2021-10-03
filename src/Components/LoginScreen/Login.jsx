import React, {useEffect, useState} from 'react';
import './login.css';
import '../Validation';
import Validation from "../Validation";
import axios from 'axios';
// Init axios
axios.defaults.baseURL = "http://localhost:3000/api";

const Login = ({ history }) => {
    const [user, setUser] = useState({
        email: "",
        password: "leprobency"
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            history.push("/");
        }
    }, [history])

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        setErrors(Validation(user));

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };

            const { data } = await axios.post("/auth/login",{
                email: user.email,
                password: user.password
            },
            config
            );

            localStorage.setItem('token', JSON.stringify(data.token));
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container px-4 py-5 mx-auto">
                <div className="card card0">
                    <div className="d-flex flex-lg-row flex-column-reverse">
                        <div className="card card1">
                            <div className="row justify-content-center my-auto">
                                <div className="col-md-8 col-10 my-5">
                                    <h3 className="mb-5 text-center heading">AdminSR</h3>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" placeholder="Entrez votre adresse E-mail"
                                               className="form-control"
                                               value={user.email}
                                               onChange={handleChange}
                                        />
                                        { errors.email && <p className="error">{errors.email}</p> }
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="psw" name="password" placeholder="Mot de passe"
                                               className="form-control"
                                               value={user.password}
                                               onChange={handleChange}
                                        />
                                        { errors.password && <p className="error">{errors.password}</p> }
                                    </div>
                                    <div className="row justify-content-center my-3 px-3">
                                        <button className="btn-block btn-color" onClick={ handleSubmitLogin }>S'identifié</button>
                                    </div>
                                    <div className="row justify-content-center my-2">
                                        <p className="recover" onClick={() => history.push('/recovery')}><small className="text-muted">Mot de passe oublié?</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom text-center mb-5">
                                <p href="#" className="sm-text mx-auto mb-3">Vous n'avez pas de compte?
                                    <button className="btn btn-white ml-2" onClick={() => history.push("/register")}>Crée un compte</button>
                                </p>
                            </div>
                        </div>
                        <div className="card card2">
                            <div className="my-auto mx-md-5 px-md-5 right">
                                <h3 className="text-white">We are more than just a company</h3> <small
                                className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;