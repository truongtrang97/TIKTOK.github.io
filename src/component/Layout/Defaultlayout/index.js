import { Children } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Defaultlayout({ Children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{Children}</div>
            </div>
        </div>
    );
}

export default Defaultlayout;
