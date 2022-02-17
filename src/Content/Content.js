import {Route, Routes} from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import MergeXlsx from "./MergeXlsx/MergeXlsx";
import XlsxToPdf from "./XlsxToPdf/XlsxToPdf";
import SparkToPdf from "./SparkToPdf/SparkToPdf"

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={(<></>)} />
            <Route path="/todolist" element={<TodoList/>} />
            <Route path="/merge_xlsx" element={<MergeXlsx/>} />
            <Route path="/xlsxtopdf" element={<XlsxToPdf />} />
            <Route path="/sparktopdf" element={<SparkToPdf />} />
        </Routes>
    )
}

export default Content