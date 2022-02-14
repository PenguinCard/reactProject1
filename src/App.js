import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";

function App() {
    return (
        <div className="row">
            <div className="col-sm-2 bg-dark" style={{ backgroundRepeat: "repeat-y"}}>
                <Navbar />
            </div>
            <div className="col-sm-10">
                <div className="container">
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default App;
