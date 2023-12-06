import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";

import "./user_style.css";


import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'

const Register = () => {
    const ref_error_meg = useRef(null);
    const span = ref_error_meg.current;
    const emailRef = useRef()
    const passwordRef = useRef()
  
    const [errorMessage, setErrorMessage] = useState('')
  
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const email = emailRef.current.value
      const password = passwordRef.current.value
  
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        
        navigate('/register/thank_you');
        ref_error_meg.current.classList.add('d-none');
        //span.className = "show";
      } catch (error) {
        console.log(error);
        setErrorMessage(error.message);
        ref_error_meg.current.classList.remove('d-none');
        //span.className = "hidden";
      }
    }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="container--content page--login mt-40px  mb-40px">
      <div class="mt-40px  mb-40px">
        <h1>Register</h1>
      </div>
    
        <div className="row">
          <div className="col-12 col-md-6">
            <div class="mt-32px mb-32px left-login">
              
                <div class="row zone-input mb-16px">
                  <div class="col-12 zone-userid">
                    <label className="box-text" htmlFor="username">Email</label>
                    <input
                      ref={emailRef}
                      type="email"
                      name="username"
                      required
                    />
                  </div>
                  <div ref={ref_error_meg} class="col-12 zone-error-message d-none">
                   <label className="box-text" htmlFor="errormsg">Email ไม่ถูกต้อง หรือ Email ถูกใช้แล้ว </label>
                  </div>
                  <div class="col-12 zone-password mb-16px">
                    <label className="box-text" htmlFor="password">Password</label>
                    <input
                      ref={passwordRef}
                      type="password"
                      name="password"
                      required
                    />
                  </div>

                  

                </div>
              
              <div class="row zone-btn">
                <div class="col-12 zone-btn-login">
                  <button id="id-btn" className="btn-login" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-12">
            <div class="right-banner">
              <div class="card-banner">
                <div class="box-img">
                  <img
                    src="/image/image-mock/blue770x360.png"
                    srcset="/image/image-mock/blue770x360.png 110w, /image/image-mock/blue770x360.png 360w"
                    sizes="(max-width: 767.8px) 110px, (min-width: 768px) 360px"
                    alt="Title 1"
                    class="card-content-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
