import { useEffect, useState } from "react"
import Loading from "./Components/Loading"
//import SinglePost from "./Components/SinglePost"
import Posts from "./Components/Posts"
import axios from 'axios'
// your components should be app, posts, postItem, and loading

const App = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [singlePost, setSinglePost] = useState(null)
    // use the useEffect hook to make an initial API call to the url: 
    useEffect(() => {
        async function getPosts() {
            const info = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(info.data)
            setLoading(false)
            console.log(info.data)
        }
        getPosts()
    }, [])
    const handleSetSinglePost = (obj) => {
        setSinglePost(obj)
    }
    // const clearSinglePost = () => {
    //     setSinglePost(null)
    // }
    if(!loading && !singlePost) {
        return <Posts postsProp={posts} handleSetSinglePost={handleSetSinglePost} />
    // }else if(!loading) {
    //     return <SinglePost singlePost={singlePost} clearSinglePost={clearSinglePost}/>
    }else {
        return <Loading />
    }
   
}

export default App