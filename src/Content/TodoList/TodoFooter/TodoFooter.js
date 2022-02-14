import store from "../../../redux/store";
import { delAllList } from "../../../redux/slice/listSlice";

function TodoFooter(props) {

    const btnClickEvent = () => {
        if(props.rows.length > 0) {
            store.dispatch(delAllList())
            props.setRows(store.getState().list.rows)
        }
    }

    return (
        <div style={{ "textAlign": "center" }}>
            <button className="btn btn-light" onClick={btnClickEvent}>전체삭제</button>
        </div>
    )
}

export default TodoFooter