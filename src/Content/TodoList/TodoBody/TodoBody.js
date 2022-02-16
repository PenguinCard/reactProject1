import TodoItem from './TodoItem'
import {useEffect, useState} from "react";

function TodoBody(props) {

    const [ rows, setRows ] = useState([]);

    useEffect(() => setRows(props.rows), [props.rows])

    return (
        <ul className="list-group list-group-flush" style={{ "height": "480px", "overflowY": "scroll" }}>
            { rows.length > 0 && rows.map((row, idx) => <TodoItem key={idx} row={row} setRows={props.setRows}/> ) }
        </ul>
    )
}

export default TodoBody