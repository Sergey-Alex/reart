import React, {useState} from 'react'
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'bbb', body: 'zzz'},
      {id: 2, title: 'aaaa 2', body: 'yyy'},
      {id: 3, title: 'ccc 3', body: 'ttt'},
      ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

  const searchAndSorted = usePosts(posts, filter.sort, filter.query)

const createPosts = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false)
}

const removePost = (post)=> {
      setPosts(posts.filter(p => p.id !== post.id))
}
    return (
    <div className="App">
        <MyButton style = {{marginTop: 30}} onClick = {() => setModal(true)}>
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal} >
            <PostForm create = {createPosts} />
        </MyModal>
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
