const FileData = props => {
    const { file, idx } = props;
    return (
        <tr>
            <td className="text-center">{ idx + 1 }</td>
            <td className="text-center">{ file.name }</td>
            <td className="text-center">{ file.size } byte</td>
        </tr>
    )
}

export default FileData;