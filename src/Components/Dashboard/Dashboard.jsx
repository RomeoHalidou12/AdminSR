import React, {useEffect} from 'react';
import './dashboard.css';

const Dashboard = ({history}) => {
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            history.push('/login');
        }
    }, [history]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }

    return (
        <div>
            <h5>Dashboard</h5>
            <button className="btn btn-outline-success" onClick={ handleLogout }>
                logout
            </button>
        </div>
    );
};

export default Dashboard;