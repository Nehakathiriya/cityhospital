import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Department from '../admin/container/Department';
import Layout from '../admin/component/Layout';
import Doctor from '../admin/container/Doctor';
import Medicine from '../admin/container/Medicine';
import Facilities from '../admin/container/Facilities';


function AdminRoutes(props) {
    return (
        <Layout>
            <Routes>
                <Route exact path='/department' element={<Department />}></Route>
                <Route exact path='/doctor' element={<Doctor />}></Route>
                <Route exact path='/medicine' element={<Medicine />}></Route>
                <Route exact path='/facilities' element={<Facilities />}></Route>

            </Routes>

        </Layout>

    );
}

export default AdminRoutes;