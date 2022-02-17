import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const SparkToPdf = () => {

    const[files, setFiles] = useState([])
    const[xlsxFiles, setXlsxFiles] = useState([])
    const[htmlFiles, setHtmlFiles] = useState([])
    const[pdfFiles, setPdfFiles] = useState([])

    const delAllFileEvent = () => {
        setFiles([]); setPdfFiles([]); setXlsxFiles([]); setHtmlFiles([]);
    }

    const sendFileEvent = () => {
        const formData = new FormData();
        files.map(file => formData.append('files', file))
        axios.post("/api/file/sparktopdf", formData, {
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
        const html_files = files.filter(file => /\.html$/.test(file.name))
        setXlsxFiles(xlsx_files);
        setPdfFiles(pdf_files);
        setHtmlFiles(html_files);
    }, [files])
}

export default SparkToPdf;