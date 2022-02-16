import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";

function App() {
    return (
        <div className="row" style={{ "fontFamily": "D2Coding"}}>
            <div className="col-sm-3 bg-dark" style={{ backgroundRepeat: "repeat-y"}}>
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
