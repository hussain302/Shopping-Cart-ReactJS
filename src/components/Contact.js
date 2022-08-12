import React from 'react'
import { Link } from 'react-router-dom';
import Headings from './Headings';
import Slogan from './Slogan';

const Contact = () => {
  return (
    <>
      <div className='mb-3 p-1' style={{ backgroundColor: "white" }}>
      </div>
      <div className='container'>
        <div className='text-center'>
          <Headings heading="Contact Taanka Team" />
        </div>
        <div className='row mt-5'>

          <div className='col-8'>
            <h3> CONTACT US </h3>
            <br />
            <form>

              <div className='row'>
                <div class="mb-3 col-6">
                  <label for="exampleFormControlInput1" class="form-label">First name</label>
                  <input type="text" class="form-control" required="required" id="exampleFormControlInput1" placeholder="Eg:- Muhammad" />
                </div>
                <div class="mb-3 col-6">
                  <label for="exampleFormControlInput1" class="form-label">Last name</label>
                  <input type="text" class="form-control" required="required" id="exampleFormControlInput1" placeholder="Eg:- Hussain" />
                </div>

              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" required="required" id="exampleFormControlInput1" placeholder="Eg:- name@example.com" />
                <small> We'll never share your email with anyone</small>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"> Message </label>
                <textarea class="form-control" required="required" placeholder='Enter your message here' id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <div class="mb-3">
                <input type="submit" class="btn btn-dark col-12" id="exampleFormControlInput1" value="Send Message" />
              </div>
            </form>
          </div>
          <div className='col-4'>
            <img src="./WebImages/Womens/p6.webp" className="card-img-top w-75 h-100" alt="None" />
          </div>
        </div>
        <Slogan />
      </div>
    </>
  )
}
export default Contact;
