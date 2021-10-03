import React from 'react';
import './recovery.css';
import { useHistory } from "react-router-dom";

const Recovery = () => {
    const history = useHistory();
    return (
        <div>
            <div className="container px-4 py-5 mx-auto">
                <div className="card card0">
                    <div className="d-flex flex-lg-row flex-column-reverse">
                        <div className="card card1">
                            <div className="row justify-content-center my-auto">
                                <div className="col-md-8 col-10 my-5">
                                    <h3 className="mb-5 text-center heading">Réinitialiser votre mot de passe</h3>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" placeholder="Entrez votre adresse E-mail" className="form-control" />
                                    </div>
                                    <div className="row justify-content-center my-3 px-3">
                                        <button onClick={ () => history.push('/login') } className="btn-block btn-color">Réinitialiser</button>
                                    </div>
                                </div>
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

export default Recovery;