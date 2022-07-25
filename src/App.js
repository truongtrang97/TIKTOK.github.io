import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from '~/Route';
import Defaultlayout from './component/Layout/Defaultlayout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {PublicRoutes.map((route, index) => {
                        const Layout = route.Layout || Defaultlayout;
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}
// cái ni lặp qua mảng lần lượt qua Home, Following
export default App;
