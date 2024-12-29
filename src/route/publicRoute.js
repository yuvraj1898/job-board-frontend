import Login from '../pages/Login';
import Register from '../pages/Register';

const publicRoute = [
  {
    path: '/login',
    element: <Login />,
    isProtected: false,
  },
  {
    path: '/register',
    element: <Register />,
    isProtected: false,
  },
];

export default publicRoute;
