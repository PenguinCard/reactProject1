import {Route, Routes} from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import Upload from "./Upload/Upload";

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={(<></>)} />
            <Route path="/todolist" element={<TodoList/>} />
            <Route path="/shopee" element={<></>} />
            <Route path="/lazada" element={<></>} />
            <Route path="/upload" element={<Upload/>} />
            <Route path="/download" element={<></>} />
        </Routes>
    )
}

export default Content