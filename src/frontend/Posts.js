import React from 'react'
import team from './../img/team.svg'
import './../css/posts.css'
import Post from './components/Post.js'


const Posts = (props) => {
  return (
    <div className='main'>
      
        <div className="col-lg-8 mx-auto p-3">
            <img width="100%" src={team} alt="" />
        </div>
        <div className='col-lg-10 mx-auto my-5 d-flex flex-column align-items-center'>
            <h3 className='mb-5 search-title'>Search Blogs & Tricks</h3>
            <div className="input-group mb-3">
                <input type="text" className="form-control bg-transparent text-light" placeholder="Search ....."/>
                <button className="btn" type="button">Search</button>
            </div>
        </div>

        <div className="posts p-3 my-5">

            <div className='row g-2 align-items-stretch'>
              { 
                props.blogs ? 
                  props.blogs.map( (blog, i) => {
                    return (
                      <div className="col-lg-4 p-3"  key={i}>
                        <Post blog={blog} />
                      </div>
                    )
                  } )
                  : 
                  ( 
                    <div className='text-center py-3 text-danger'>NO BLOG FOUND!</div>
                  )
              }

              <div className="d-flex justify-content-center">
                {
                  props.hasMore ? 
                  <span onClick={ () => props.setPage(props.page + 1)} className='more m-2 mx-3'>
                    <i className="fa-solid fa-down-long m-1 first"></i>
                    <i className="fa-solid fa-down-long m-1 second"></i>
                  </span>
                  :
                  null
                }
                    

                {
                  props.page > 1 ? 
                  <span onClick={ () => props.setPage(1)} className='less m-2 mx-3'>
                    <i className="fa-solid fa-up-long m-1 first"></i>
                    <i className="fa-solid fa-up-long m-1 second"></i>
                  </span>
                  :
                  null
                }
              </div>              

            </div>
          </div>
    </div>
  )
}

export default Posts