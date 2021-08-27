import React, {useState} from 'react'
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'bbb', body: 'zzz'},
      {id: 2, title: 'aaaa 2', body: 'yyy'},
      {id: 3, title: 'ccc 3', body: 'ttt'},
      ])

    const [selectedSort, setSelectedSort] = useState('')

const createPosts = (newPost)=>{
    setPosts([...posts, newPost])
}

const removePost = (post)=> {
      setPosts(posts.filter(p => p.id !== post.id))
}

const sortPost = (sort) => {
      setSelectedSort(sort)
      setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
}

    return (
    <div className="App">
        <PostForm create = {createPosts} />
        <hr style={{margin:'15px 0'}}/>
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPost}
                defaultValue= 'Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
        {posts.length !== 0
        ? <PostList remove = {removePost} posts={posts} title={'Посты про  JavaScript'}/>
        : <h1 style={{textAlign:"center"}}>Посты не найдены</h1>
        }

    </div>
  );
}

export default App;
