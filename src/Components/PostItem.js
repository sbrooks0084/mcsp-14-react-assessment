import axios from 'axios'

const PostItem = ({postsProp, handleSetSinglePost}) => {
    const handleClick = async (e) => {
        const info = await axios.get (`https://jsonplaceholder.typicode.com/posts/${e.target.id}`)
        handleSetSinglePost(info.data)
        console.log(e.target.id)
    }
    return(
        <h1 onClick={handleClick} id={postsProp.id}>{postsProp.title}</h1>
    )
}

export default PostItem