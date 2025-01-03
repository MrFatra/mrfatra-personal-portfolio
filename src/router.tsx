import { Routes, Route } from 'react-router-dom';
import { HomeContainer } from './containers';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer />} />
        </Routes>
    );
};

export default AppRoutes;
