import {Route, Routes} from "react-router-dom";
import TodoList from "../TodoList/TodoList";

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={(<></>)} />
            <Route path="/todolist" element={<TodoList/>} />
        </Routes>
    )
}

export default Content