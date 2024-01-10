import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivteRoutes(props) {
    let auth = true;
    return (
        auth ? <Outlet /> : <Navigate to ='/' replace />

    );
}

export default PrivteRoutes;