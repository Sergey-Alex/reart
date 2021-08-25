import React, {useState} from 'react'
import Counter from "./components/Counter";
import './Styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript', body: 'Description'},
      {id: 2, title: 'JavaScript 2', body: 'Description'},
      {id: 3, title: 'JavaScript 3', body: 'Description'},
      ])

  const [posts2, setPosts2] = useState([
      {id: 1, title: 'TypeScript', body: 'Description'},
      {id: 2, title: 'TypeScript 2', body: 'Description'},
      {id: 3, title: 'TypeScript 3', body: 'Description'},
      ])

    return (
    <div className="App">
      <PostList posts={posts} title={'Посты про  JavaScript'}/>
      <PostList posts={posts2} title={'Посты про TypeScript '}/>
    </div>
  );
}

export default App;
