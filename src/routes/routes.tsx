import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Rules from '../pages/Rules'

const AppRoutes = () => {

    return (
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/rules" element={<Rules />}/>
        </Routes>
    )
}

export default AppRoutes