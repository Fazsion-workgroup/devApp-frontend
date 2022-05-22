import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { landingPageRoutes } from './landingPageRoutes';

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Landing and auth page routes */}
                {landingPageRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default AllRoutes;
