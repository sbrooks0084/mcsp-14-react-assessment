import PostItem from './PostItem'

const Posts = ({postsProp, handleSetSinglePost}) => {
    return postsProp.map((post) => (
        <PostItem postsProp={post}
        key={post.id}
        handleSetSinglePost={handleSetSinglePost}
        />
    ))
}

export default Posts