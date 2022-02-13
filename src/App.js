import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
    return (
        <div className="row">
            <div className="col-sm-3">
                <Navbar />
            </div>
            <div className="col-sm-9">
                <div className="container">
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default App;
