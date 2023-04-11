import { browserRoutes } from '../routes/browserRoutes';
import Home from '../pages/Home';
import Blog from '../components/blog/Blog';
import Products from '../components/products/Products';
import Contact from '../components/contact/Contact';

export const appRoutes = [
  { path: browserRoutes.HOME, element: <Home /> },
  { path: browserRoutes.BLOG, element: <Blog /> },
  { path: browserRoutes.PRODUCTS, element: <Products /> },
  { path: browserRoutes.CONTACT, element: <Contact /> },
];
