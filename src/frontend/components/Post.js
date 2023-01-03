import React from 'react'
import {Link} from 'react-router-dom'


const Post = (props) => {
  return (
    
        <Link to={`/posts/${props.blog.id}`}>
            <div className="card post-card border border-0 h-100">
              {/* <img width='100%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5DYv6azu9BU_xUBpMzuUbQxYY6RkjjEXJQ&usqp=CAU" alt="" /> */}
              <img width='100%' src={props.blog.thumbnail} alt="" />
              <div className='content'>
                  <h5 className='mb-3'>{ props.blog.title }</h5>
                  <div className='d-flex justify-content-between font-sm mb-3 text-secondary'>
                    <div>{ props.blog.category }</div>
                    <div>Author - { props.blog.author }</div>
                  </div>
                  <p className='m-0 p-0'>
                    { props.blog.body.slice(0, 100) } . . .
                  </p>
                  <div className='text-end font-sm text-secondary mt-3'>Published At - { props.blog.createdAt }</div>
              </div>
            </div>
        </Link>
  )
}

export default Post