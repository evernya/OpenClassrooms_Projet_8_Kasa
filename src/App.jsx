//IMPORT
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//PAGES
import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'

//LAYOUTS

//COMPONENTS

//ASSETS

//CSS
import '../src/styles/style.css';


function App() {
  //state (état, données)

  //comportement
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/logement/:id',
            element: <Logement />
          },
        ]
      },
      {
        path: '/apropos',
        element: <About />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  )

  //affichage (render)
  return <RouterProvider router={router} />
}

export default App;
