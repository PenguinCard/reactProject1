import { useEffect } from 'react';

import store from "../../../redux/store"
import { delOneList, modOneList } from "../../../redux/slice/listSlice";

function TodoItem(props) {

    useEffect(() => props.row, [props.row])

    const delItem = event => {
        store.dispatch(delOneList(props.row.idx));
        props.setRows(store.getState().list.rows)
    }
    const modItem = event => {
        store.dispatch(modOneList({
            row: {
                idx: props.row.idx,
                content: props.row.content,
                status: !props.row.status
            }
        }))
        props.setRows(store.getState().list.rows)
    }

    return (
        <li className="list-group-item">
            <div className="row" style={{ "margin": "0.5rem" }}>
                <div className="col-sm-2">
                    <i onClick={modItem} className={ "bi " + (props.row.status ? "bi-check-square" : "bi-dash-square") } />
                </div>
                <div className="col-sm-8">{ props.row.content }</div>
                <div className="col-sm-2" style={{ "textAlign": "center" }}><i className="bi bi-trash" onClick={delItem} /></div>
            </div>
        </li>
    )
}

export default TodoItem