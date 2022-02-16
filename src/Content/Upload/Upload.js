import { useCallback, useState } from "react";
import axios from 'axios'

import UploadArea from "./UploadArea";
import FileData from "./FileData";

const Upload = () => {

    const [files, setFiles] = useState([]);
    const sendFileEvent = () => {
        const formData = new FormData();
        formData.append("file", files)
        axios.post("/api/file/work", formData, {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        }).then(res => console.log(res.data));
    }

    const fileDrop = useCallback(item => {
        if(item?.files){
            if(files.length !== 0) {
                const confirm = window.confirm('파일을 이어서 등록하시겠습니까?')
                console.log(confirm, files, item.files)
                if (confirm) {
                    setFiles([...files, ...item.files])
                } else {
                    setFiles(item.files)
                }
            } else setFiles(item.files)
        }}, [setFiles, files])

    return (
        <div className="card" style={{ marginTop: "3rem" }}>
            <div className="card-header">
                <h3 style={{ "textAlign": "center" }}>File Upload</h3>
            </div>

            <div className="card-body">
                <ul className="list-group list-group-flush" style={{ "height": "480px", "overflowY": "scroll" }}>
                    {files.length > 0 && files.map((file, idx)=> (<FileData key={idx} file={file}/>))}
                    <UploadArea onDrop={fileDrop}/>
                </ul>
            </div>

            <div className="card-footer">
                <button className="btn btn-primary" disabled={files.length===0} onClick={sendFileEvent} >전송</button>
            </div>
        </div>
    )
}

export default Upload