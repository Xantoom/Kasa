import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/accommodation/:id', element: <Accommodation />, errorElement: <NotFound /> },
    { path: '/about', element: <About /> },
    { path: '*', element: <NotFound /> },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
