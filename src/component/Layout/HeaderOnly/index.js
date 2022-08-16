
import Header from '~/component/Layout/components/Header';


function Defaultlayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
              
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default Defaultlayout;
