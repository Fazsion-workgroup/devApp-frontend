import LandingPage from '../../pages/landingPage';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

const landingPageRoutes = [
    { path: '/', element: <LandingPage /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> }
];
export { landingPageRoutes };
