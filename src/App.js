import React, {useState} from 'react'
import Counter from "./components/Counter";
import './Styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript', body: 'Description'},
      {id: 2, title: 'JavaScript 2', body: 'Description'},
      {id: 3, title: 'JavaScript 3', body: 'Description'},
      ])
    

    return (
    <div className="App">
        <form>
            <MyInput type="text" placeholder='название поста'/>
            <MyInput type="text" placeholder='описание поста'/>
            <MyButton>Сoздать пост</MyButton>
        </form>
      <PostList posts={posts} title={'Посты про  JavaScript'}/>
    </div>
  );
}

export default App;
