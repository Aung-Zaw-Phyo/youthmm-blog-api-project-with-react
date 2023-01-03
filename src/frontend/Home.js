import React from 'react'
import Post from './components/Post.js'
import './../css/Home.css'
import banner from './../img/banner.svg'



const Home = (props) => {
  
  return (
    <div className='main'>
         <div className="row g-2 py-3">
            <div className="col-lg-5 d-flex justify-content-center align-items-center p-2">
              <img width="100%" src={banner} alt="" />
            </div>
            <div className="col-lg-7 text-center p-2 d-flex flex-column justify-content-center">
                <div className="fs-1 fw-bold p-2">Welcome To <span className="hero-logo-1">YOUTH</span> <span className="hero-logo-2">MM</span></div>
                <p className="lh-lg fs-5 mt-3 p-2">
                    YOUTH MM ဆိုတာကတော့ Programming Language နဲ့ပက်သက် ပြီးလမ်းပျောက်နေတဲ့ လူငယ်တွေ ၊ Web development လောကထဲ စတင် ဝင်ချင်သူတွေအတွက် အခမဲ့အတန်းလေးများရော | fees ဖြင့် အတန်းများရော Online Course လေးတွေဖွင့်ပေးကာသင်ပေးသော ကျောင်းလေးပဲဖြစ်ပါတယ်ခင်ဗျ။နေ့စဉ်နှင့်အပတ်စဉ်လဲ လေ့လာသူတို့ ဗဟုသုတ တိုးအောင် Tricks & blogs များအစဉ်မပြတ်တင်ပေးသော ကျောင်းလေးဖြစ်ပါတယ်။
                    YOUTH MM ဆိုတာကတော့ Programming Language နဲ့ပက်သက် ပြီးလမ်းပျောက်နေတဲ့ လူငယ်တွေ ၊ Web development လောကထဲ စတင် ဝင်ချင်သူတွေအတွက် အခမဲ့အတန်းလေးများရော | fees ဖြင့် အတန်းများရော Online Course လေးတွေဖွင့်ပေးကာသင်ပေးသော ကျောင်းလေးပဲဖြစ်ပါတယ်ခင်ဗျ။နေ့စဉ်နှင့်အပတ်စဉ်လဲ လေ့လာသူတို့ ဗဟုသုတ တိုးအောင် Tricks & blogs များအစဉ်မပြတ်တင်ပေးသော ကျောင်းလေးဖြစ်ပါတယ်။
                </p>
            </div>
          </div>

          <div className="posts p-3 py-4 my-3">

            <div className='row g-2 align-items-stretch'>
              { 
                props.latestBlog ? 
                props.latestBlog.map( (blog, i) => {
                    return (
                      <div className="col-lg-4 p-3"  key={i}>
                        <Post blog={blog} />
                      </div>
                    )
                  } )
                  : ( 
                    <div className='text-center py-3 text-danger'>NO BLOG FOUND!</div>
                  )
              }
            </div>

          </div>

          <div className="col-lg-6 mx-auto my-5 subscribe">
            <div className='card border border-0 shadow p-3 py-4'>
              <h3 className='text-center mb-3'>Get In Touch With Us</h3>
              <div className="form-group mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder='Enter Your Name'/>
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" placeholder='Enter Your Email'/>
              </div>
              <button className='btn mt-3'>Subscribe Now</button>
            </div>
          </div>

    </div>
  )
}

export default Home