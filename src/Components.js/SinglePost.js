import ClearSinglePostButton  from "./ClearSinglePostButton";

const SinglePost = ({singlePost, clearSinglePost}) => {
    return (
        <>
            <h1>{}singlePost.title</h1>
            <p>{singlePost.body}</p>
            <ClearSinglePostButton clearSinglePost={clearSinglePost}/>
        </>
    )
}
export default SinglePost