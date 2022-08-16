import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from '~/Route';
import { Defaultlayout } from '~/component/Layout'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {PublicRoutes.map((route, index) => {
                       const Page = route.component;
                        let Layout = Defaultlayout;

                        if(route.layout){
                            Layout=route.layout
                        }else if(route.layout===null){
                            Layout=Fragment
                        };

                        return (<Route key={index} path={route.path} element={<Layout><Page /></Layout>}/>);
                    })}
                </Routes>
            </div>
        </Router>
    );
    
}
// cái ni lặp qua mảng lần lượt qua Home, Following
export default App;
// Fragment là 1 component dùng để chứa thâu, và không sinh ra thẻ thật trong dom
 // const Layout = route.layout===null? Fragment: Defaultlayout;
