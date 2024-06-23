import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home'
import NotFound from './NotFound'
import Logement from './Logement'
import About from './About'

const router = createBrowserRouter([
{
  path: '/home',
  element: <Home />
},
{
    path: '/logement',
    element: <Logement />
},
{
        path: '/about',
        element: <About />
},
{
    path: '*',
    element: <NotFound />
}
]);

export default router;