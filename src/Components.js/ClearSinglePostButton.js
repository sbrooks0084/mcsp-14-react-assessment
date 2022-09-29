const ClearSinglePostButton = ({clearSinglePost}) => {
    const handleClearSinglePost = () => {
        clearSinglePost(null)
    }
    return(
        <button onClick={handleClearSinglePost}>Back</button>
    )
}

export default ClearSinglePostButton