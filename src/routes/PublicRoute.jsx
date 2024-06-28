import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token');
    if (isAuthenticated) {
        return <Navigate to="/profile" replace />;
    }
    return <>{children}</>;
};

export default Protected;
