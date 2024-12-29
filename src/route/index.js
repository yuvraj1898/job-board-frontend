import publicRoutes from './publicRoute';
import protectedRoutes from './protectedRoute';

const routes = [
  ...publicRoutes,
  ...protectedRoutes,
];

export default routes;
