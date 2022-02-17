import { useEffect, useState,useCallback } from "react"
import axios from 'axios';

import UploadArea from "../../Utils/UploadArea"
import FileData from "../../Utils/FileData";

const XlsxToPdf = () => {

    const[files, setFiles] = useState([])
    const[xlsxFiles, setXlsxFiles] = useState([])
    const[pdfFiles, setPdfFiles] = useState([])

    const delAllFileEvent = () => { setFiles([]); setPdfFiles([]); setXlsxFiles([]) }

    const sendFileEvent = () => {
        const formData = new FormData();
        files.map(file => formData.append('files', file))
        axios.post("http://localhost:8000/api/file/xlsxtopdf", formData, {
            headers: {
                'Content-Disposition': "attachment; filename=union.zip",
                "Content-Type" : "multipart/form-data",
            },
            "responseType": 'arraybuffer'
        }).then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data])) ;
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'union.zip');
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

    useEffect(() => {
        const xlsx_files = files.filter(file => /\.xlsx$/.test(file.name))
        const pdf_files = files.filter(file => /\.pdf$/.test(file.name))
        setXlsxFiles(xlsx_files);
        setPdfFiles(pdf_files);
    }, [files])

    return (
        <div className="card" style={{ marginTop: "3rem" }}>
            <div className="card-header">
                <h3 style={{ "textAlign": "center" }}>Xlsx to PDF</h3>
            </div>

            <div className="card-body" style={{ "overflowY": "scroll", "height": "480px"}}>
                <table className="table">
                    <thead>
                        <UploadArea onDrop={fileDrop}/>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col" className="text-center" style={{ width: "10%"}}>#xlsx</th>
                            <th scope="col" className="text-center" style={{ width: "60%"}}>name</th>
                            <th scope="col" className="text-center">size</th>
                        </tr>

                        {xlsxFiles.length > 0 && xlsxFiles.map((file, idx)=> (<FileData key={idx} file={file} idx={idx}/>))}

                        <tr>
                            <th scope="col" className="text-center" style={{ width: "10%"}}>#pdf</th>
                            <th scope="col" className="text-center" style={{ width: "60%"}}>name</th>
                            <th scope="col" className="text-center">size</th>
                        </tr>

                        {pdfFiles.length > 0 && pdfFiles.map((file, idx)=> (<FileData key={idx} file={file} idx={idx}/>))}
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

export default XlsxToPdf