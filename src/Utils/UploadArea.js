import {useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend";

const UploadArea = props => {

    const { onDrop } = props;
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: [NativeTypes.FILE],
            drop(item) { if(onDrop) onDrop(item) },
            collect: monitor => {
                return {
                    isOver: monitor.isOver(),
                    canDrop: monitor.canDrop()
                }
            }
        }), [props]
    )

    const isActive = canDrop && isOver

    return (
        <tr>
            <td colSpan="3" ref={drop} className="text-center">
                {(isActive ? 'drop' : 'drag').concat(' file here')}
            </td>
        </tr>
    )
}

export  default UploadArea