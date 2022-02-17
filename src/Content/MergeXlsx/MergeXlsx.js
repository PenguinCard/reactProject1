import { useCallback, useState } from "react";
import axios from 'axios'

import UploadArea from "../../Utils/UploadArea";
import FileData from "../../Utils/FileData";

const MergeXlsx = () => {

    const [files, setFiles] = useState([]);

    const sendFileEvent = () => {
        const formData = new FormData();
        files.map(file => formData.append('files', file))
        axios.post("/api/file/merge_xlsx", formData, {
            headers: {
                'Content-Disposition': "attachment; filename=union.xlsx",
                "Content-Type" : "multipart/form-data",
            },
            "responseType": 'arraybuffer'
        }).then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data])) ;
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'union.xlsx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log(res.data)
        })
    }

    const fileDrop = useCallback(item => {
        if(item?.files){
            if(files.length !== 0) {
                
                const confirm = window.confirm('파일을 이어서 등록하시겠습니까?')

                if (confirm) { setFiles([...files, ...item.files]) } 
                else { setFiles(item.files) }

            } else setFiles(item.files)
        }}, [setFiles, files])

    const delAllFileEvent = () => { setFiles([]) }

    return (
        <div className="card" style={{ marginTop: "3rem" }}>
            <div className="card-header">
                <h3 style={{ "textAlign": "center" }}>Merge Xlsx</h3>
            </div>

            <div className="card-body" style={{ "overflowY": "scroll", "height": "480px"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center" style={{ width: "10%"}}>#</th>
                            <th scope="col" className="text-center" style={{ width: "60%"}}>name</th>
                            <th scope="col" className="text-center">size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UploadArea onDrop={fileDrop}/>
                        {files.length > 0 && files.map((file, idx)=> (<FileData key={idx} file={file} idx={idx}/>))}
                    </tbody>
                </table>
            </div>

            <div className="card-footer text-center">
                <button type="button" 
                        className="btn btn-secondary"
                        disabled={files.length===0}
                        onClick={delAllFileEvent}
                        style={{ margin: "1rem"}}>
                            업로드 파일 삭제
                </button>
                <button type="button" 
                        className="btn btn-primary" 
                        disabled={files.length===0} 
                        onClick={sendFileEvent}
                        style={{ margin: "1rem"}}>
                            다운로드
                </button>
            </div>
        </div>
    )
}

export default MergeXlsx