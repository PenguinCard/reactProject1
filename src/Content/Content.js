import {Route, Routes} from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import Upload from "./Upload/Upload";

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={(<></>)} />
            <Route path="/todolist" element={<TodoList/>} />
            <Route path="/filework" element={<Upload/>} />
        </Routes>
    )
}

export default Content