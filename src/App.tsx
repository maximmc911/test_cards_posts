import { Route, Routes } from 'react-router-dom';
import { routes } from './route/index'
import './index.css'
import { GetData } from "./store/getPosts/GetData";



const App = () => {

  // function

  const setRoutes = (): JSX.Element[] =>
    routes.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
    ));

  GetData()


  return (
    <>
      <Routes>
        {setRoutes()}
      </Routes>

    </>
  )
}

export default App