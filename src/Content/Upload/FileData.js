const FileData = props => {
    const { file } = props;
    return (
        <li className="list-group-item">
            <div className="row" style={{ "margin": "0.5rem" }}>
                <div className="col-sm-8 text-center">{ file.name }</div>
                <div className="col-sm-2 text-center">{ file.size } byte</div>
            </div>
        </li>
    )
}

export default FileData;