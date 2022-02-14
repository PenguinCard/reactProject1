import { useState } from "react";

import store from '../../../redux/store'
import { addOneList } from "../../../redux/slice/listSlice";

function TodoHeader(props) {

    const [content, setContent] = useState('');
    const addListEvent = event => {
        if(content && (event.key==='Enter'||!event.key)) {
            store.dispatch(addOneList({ content }))
            setContent('')
        }
        props.setRows(store.getState().list.rows)
    }

    return (
        <div className="row">
            <div className="col-sm-10">
                <input className="form-control"
                       type="text" value = { content }
                       onChange={e => setContent(e.currentTarget.value)}
                       onKeyPress={addListEvent}
                />
            </div>

            <div className="col-sm-2">
                <button className="btn btn-light" style={{ "textAlign": "center"}} onClick={addListEvent}>ADD</button>
            </div>
        </div>
    )
}

export default TodoHeader