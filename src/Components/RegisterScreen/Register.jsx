import React, {useEffect, useState} from 'react';
import './register.css';
import validation from '../Validation';
import axios from "axios";

const Register = ({ history }) => {

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            history.push('/');
        }
    }, [history]);

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmitRegister = async e => {
        e.preventDefault();
        setErrors(validation(user));

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };

            const { data } = await axios.post(
                "auth/signup",
                { username: user.username, email: user.email, password: user.password },
                config
            );
            if (data.username === user.username || data.email === user.email || data.password === user.password) {
                setErrors("Cet utilisateur exist déjà veillez changer vos informations svp.");
            } else {
                history.push('/login');
            }
        } catch (e) {
            setErrors(e.response.data.message);
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
                                    <h3 className="mb-5 text-center heading">Nouveau compte</h3>
                                    <div className="form-group">
                                        <input type="text" id="username" name="username" placeholder="Nom d'utilisateur"
                                               className="form-control"
                                               value={user.username}
                                               onChange={handleChange}
                                        />
                                        {errors.username && <p className="error">{errors.username}</p>}
                                    </div>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" placeholder="E-mail"
                                               className="form-control"
                                                value={user.email}
                                               onChange={handleChange}
                                        />
                                        {errors.email && <p className="error">{errors.email}</p>}
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="psw" name="password" placeholder="Mot de passe"
                                               className="form-control"
                                               value={user.password}
                                               onChange={handleChange}
                                        />
                                        {errors.password && <p className="error">{errors.password}</p>}
                                    </div>
                                    <div className="row justify-content-center my-3 px-3">
                                        <button className="btn-block btn-color" onClick={handleSubmitRegister}>Enregister</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom text-center mb-5">
                                <p href="#" className="sm-text mx-auto mb-3">Vous-avez déjà un compte?
                                    <button className="btn btn-white ml-2" onClick={() => history.push("/login")} >S'authentifier</button>
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

export default Register;