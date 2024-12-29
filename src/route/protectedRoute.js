import Home from '../pages/Home';
import Jobs from '../pages/Jobs';


const protectedRoute = [
  {
    path: '/',
    element: <Home />,
    isProtected: true,
  },
  {
    path: '/jobs',
    element: <Jobs />,
    isProtected: true,
  },
];

export default protectedRoute;
