import React from 'react'
import {Link} from 'react-router-dom'


const Post = () => {
  return (
    <div className="col-lg-4 p-3">
        <Link to="post/8">
            <div className="card post-card border border-0">
            <img width='100%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5DYv6azu9BU_xUBpMzuUbQxYY6RkjjEXJQ&usqp=CAU" alt="" />
            <div className='content'>
                <h5 className='mb-3'>How to learn Computer Science</h5>
                <div className='d-flex justify-content-between font-sm mb-3 text-secondary'>
                  <div>Author - Aung Zaw Phyo</div>
                  <div>Published At - 3 days ago</div>
                </div>
                <p className='m-0 p-0'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem, laborum labore tempora quam eos quibusdam! Laudantium reiciendis debitis doloremque dolore, assumenda exercitationem qui illo dignissimos consequatur blanditiis. Ratione, quaerat?
                </p>
            </div>
            </div>
        </Link>
    </div>
  )
}

export default Post