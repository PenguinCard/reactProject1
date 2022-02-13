import { useState } from "react";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoBody from "./TodoBody/TodoBody";
import TodoFooter from "./TodoFooter/TodoFooter";

function TodoList() {
    const [rows, setRows] = useState([])
    return (
        <div className="card" style={{ marginTop: "3rem" }}>
            <div className="card-header">
                <h3 style={{ "textAlign": "center" }}>TODO LIST</h3>
            </div>

            <div className="card-body">
                <TodoHeader setRows={setRows}/>
                <TodoBody rows={rows} setRows={setRows}/>
            </div>

            <div className="card-footer">
                <TodoFooter rows={rows} setRows={setRows}/>
            </div>
        </div>
    )
}

export default TodoList