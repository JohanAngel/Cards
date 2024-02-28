import { useRoutes , BrowserRouter } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import Asian from '../Asian'
import Home from '../../Pages/Home'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Asian', element: <Asian /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}
export default App
