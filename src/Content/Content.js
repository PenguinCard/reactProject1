import {Route, Routes} from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import MergeXlsx from "../Utils/MergeXlsx";

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={(<></>)} />
            <Route path="/todolist" element={<TodoList/>} />
            <Route path="/merge_xlsx" element={<MergeXlsx/>} />
        </Routes>
    )
}

export default Content