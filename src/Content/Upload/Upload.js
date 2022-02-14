import {useCallback, useState} from "react";
import UploadArea from "./UploadArea";
import FileData from "./FileData";

const Upload = (props) => {

    const [files, setFiles] = useState([]);

    const fileDrop = useCallback(item => { if(item?.files){ setFiles(item.files) } }, [setFiles])

    return (
        <div className="card" style={{ marginTop: "3rem" }}>
            <div className="card-header">
                <h3 style={{ "textAlign": "center" }}>File Upload</h3>
            </div>

            <div className="card-body">
                {files.length > 0 &&
                    <ul className="list-group list-group-flush" style={{ "height": "480px", "overflowY": "scroll" }}>
                        { files.map((file, idx)=> (<FileData key={idx} file={file}/>))}
                    </ul>
                }
                <UploadArea onDrop={fileDrop}/>
            </div>

            <div className="card-footer">

            </div>
        </div>
    )
}

export default Upload