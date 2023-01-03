import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './../css/SinglePost.css'

const SinglePost = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null)
  const [randomBlogs, setRandomBlogs] = useState(null)
  const [error, setError] = useState(false)

  const url = `http://localhost:1000/api/blogs/${params.id}`

  useEffect(() => {
    axios.get(url)
    .then( (res) => {
      setBlog(res.data.data);
      // console.log(res.data.status)
    }).catch( (error) => {
      console.log(error.response.data.status)
      setError(true)
    })
    
  }, [params.id])

  useEffect(() => {
    axios.get('http://localhost:1000/api/blogs/random')
    .then( (res) => {
      setRandomBlogs(res.data.data);
    }).catch( (error) => {
      console.log(error)
    })
    
  }, [params.id])

  return (
    <div className='main py-3'>
        <div className="row g-2">
          <div className="col-lg-8 p-3">
            {
              blog ? 
              (
              <div className="single-blog">
                <div className="">
                  <img width="100%" src={blog.thumbnail} alt="" />
                </div>
                <div className='mt-3'>
                  <h5>
                    {blog.title}
                  </h5>
                  <div className='d-flex justify-content-between mt-3 font-sm'>
                    <p>Category by {blog.category}</p>
                    <p>Author - {blog.author}</p>
                  </div>
                  <p className='my-2'>
                    {blog.body}
                  </p>
                  <p className="d-flex justify-content-end mt-3 font-sm">
                    Published At - {blog.createdAt}
                  </p>
                </div>

                  {
                    blog.comments.length > 0 ? (
                      <div className='comment-section mt-5'>
                        <h5>Comments ({blog.comments.length})</h5>
                        <div className='mt-5'>
                          {
                            blog.comments.map( (comment, i) => {
                              return (
                                <div className='mb-5' key={i}>
                                  <div className="profile mb-2">
                                    <div>
                                      {
                                        comment.profile ? (
                                          <img src={comment.profile} alt="" />
                                        ) : (
                                          <img  src={`https://ui-avatars.com/api/?background=FFFFFF&color=FF0000&name=${comment.user}`} alt="" />
                                        )
                                      }
                                    </div>
                                    <div className='info'>
                                      <h6>{comment.user}</h6>
                                      <div className='font-sm text-secondary mt-1'>{comment.createdAt}</div>
                                    </div>
                                  </div>
                                  <p className='mt-2'>{comment.body}</p>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    ) : null
                  }
              </div>
              )
              : null
            }
          </div>
          {
            randomBlogs ? (
              <div className="col-lg-4 p-2 aside-col">
                <h5>Random Blogs</h5>
                <div className='mt-4 random'>

                  {
                    randomBlogs.map( (randomBlog, i) => {
                        return (
                          <div className='d-flex align-items-center mb-3' key={i}>
                            <img className='me-3 ' width='80px' src={randomBlog.thumbnail} alt="" />
                            <div>
                              <Link to={`/posts/${randomBlog.id}`}><h6 className='p-0 m-0 '> {randomBlog.title} </h6></Link>
                              <div className='font-sm mt-2'> {randomBlog.createdAt}</div>
                            </div>
                          </div>
                        )
                    })
                  }

                </div>
              </div>
            ) : null
          }
        </div>
    </div>
  )
}

export default SinglePost