import TodoItem from './TodoItem'
import { useMemo } from "react";

function TodoBody(props) {

    let rows = [];

    useMemo(() => rows = props.rows, [props.rows])

    return (
        <ul className="list-group list-group-flush" style={{ "height": "480px", "overflowY": "scroll" }}>
            { rows.length > 0 && rows.map((row, idx) => <TodoItem key={idx} row={row} setRows={props.setRows}/> ) }
        </ul>
    )
}

export default TodoBody