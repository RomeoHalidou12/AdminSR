const Validation = (values) => {
    let errors = {};

    if (!values.username) errors.username = "Veuillez saisir le nom d'utilisateur.";

    if (!values.email) {
        errors.email = "Veuillez saisir votre adresse E-mail.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Adresse E-mail invalide.";
    }

    if (!values.password) {
        errors.password = "Veuillez saisir votre mot de passe.";
    } else if (values.password.length < 5) {
        errors.password = "Le mot de passe doit contenir au-moins 5 caractères."
    }

    return errors;
};

export default Validation;