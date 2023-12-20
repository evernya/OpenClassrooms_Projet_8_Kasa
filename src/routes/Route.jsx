//IMPORT
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//PAGES

//LAYOUTS

//COMPONENTS

//ASSETS

//CSS
import '../styles/style.css';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <div>Accueil</div>,
            children: [
                {
                    path: '/logement/:id',
                    element: <div>Logement</div>
                },
            ]
        },
        {
            path: '/apropos',
            element: <div>A propos</div>
        },
        {
            path: '*',
            element: <div>Error</div>
        }
    ]
)


function Router() {
    <RouterProvider router={router} />
}

export default Router