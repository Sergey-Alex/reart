import React, {useState, useMemo} from 'react'
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'bbb', body: 'zzz'},
      {id: 2, title: 'aaaa 2', body: 'yyy'},
      {id: 3, title: 'ccc 3', body: 'ttt'},
      ])

    const [filter, setFilter] = useState({sort: '', query: ''})

const createPosts = (newPost)=>{
    setPosts([...posts, newPost])
}

const removePost = (post)=> {
      setPosts(posts.filter(p => p.id !== post.id))
}

    const sortedPost = useMemo(() => {
        console.log('Отрабтотала функция сортед пост')
        if (filter.sort){
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])


 const  searchAndSorted = useMemo(()=> {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
 }, [filter.query, sortedPost])


    return (
    <div className="App">
        <PostForm create = {createPosts} />
        <hr style={{margin:'15px 0'}}/>
        <PostFilter
            filter = {filter}
            setFilter = {setFilter}
        />
        {searchAndSorted.length !== 0
        ? <PostList remove = {removePost} posts={searchAndSorted} title={'Посты про  JavaScript'}/>
        : <h1 style={{textAlign:"center"}}>Посты не найдены</h1>
        }

    </div>
  );
}

export default App;
