import {useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend";

const UploadArea = props => {

    const { onDrop } = props;
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: [NativeTypes.FILE],
            drop(item) {
                if(onDrop) onDrop(item)
            },
            collect: monitor => {
                const item = monitor.getItem();
                if(item) { console.log('collect', item) }
                return {
                    isOver: monitor.isOver(),
                    canDrop: monitor.canDrop()
                }
            }
        }), [props]
    )

    const isActive = canDrop && isOver

    return (
        <div ref={drop} className="text-center">
            {isActive ? 'release drop' : 'drag file here'}
        </div>
    )
}

export  default UploadArea