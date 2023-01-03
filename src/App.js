import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import Footer from './frontend/components/Footer';
import Home from './frontend/Home';
import Navbar from './frontend/components/Navbar';
import SinglePost from './frontend/SinglePost';
import Posts from './frontend/Posts';

const latestBlogUrl = 'http://localhost:1000/api/blogs/latest';
const BlogsUrl = 'http://localhost:1000/api/blogs';


function App() {

  const [latestBlog, setLatestBlog] = useState(null)
  const [blogs, setBlogs] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  
  useEffect(() => {
      axios.get(latestBlogUrl)
      .then( (res) => {
        setLatestBlog(res.data.data);
        
      }).catch( (error) => {
        console.log(error)
      })
      
  }, [])

  useEffect(() => {
      axios.get(BlogsUrl+`?page=${page}`)
      .then( (res) => {
        if(page === 1){
          setBlogs(res.data.data);
          res.data.data.length < 6 ? setHasMore(false) : setHasMore(true)
        }else{
          setBlogs(prev => [...prev, ...res.data.data]);
          res.data.data.length < 6 ? setHasMore(false) : setHasMore(true)
        }
      }).catch( (error) => {
        console.log(error)
      })
      
  }, [page])

  // console.log(page)
  // console.log(hasMore)

  return (
    <div className='whole-container'>

      <Navbar/>
      <div className='space-divider'></div>
      <Routes>
        <Route path="/" element={<Home latestBlog={latestBlog} />} />  
        <Route path="/posts" element={<Posts blogs={blogs} setPage={setPage} page={page} hasMore={hasMore} />} />
        <Route path="/posts/:id" element={<SinglePost/>} />
      </Routes>  

      <Footer/>
      
    </div>
  );
}

export default App;
