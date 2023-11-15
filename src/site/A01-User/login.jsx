import React, { useState, useEffect } from "react";

import "./login_style.css";

export default function LoginPage() {

  useEffect(() => {
    document.title = 'SecretDotCom : SDC | Login';
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (
      username.length >= 8 &&
      /^[A-Z]/.test(username) &&
      password.length >= 8
    ) {
      console.log("Login successful");
      alert("Login สำเร็จ");
    } else {
      //console.log('Invalid credentials');
      console.log(username.length + " and " + password.length);
      alert("Login ผิดพลาด");
    }
  };




  
  return (
    <div class="container--content page--login mt-40px  mb-40px">
      <div class="mt-40px  mb-40px">
        <h1>Login</h1>
      </div>
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="mt-32px mb-32px left-login">
            <div class="row zone-input mb-24px">
              <div class="col-12 zone-userid">
                {" "}
                <label class="box-text">Login </label>
                <input
                  type="text"
                  name="userid"
                  id="box-username"
                  onChangeText={(username) => setUsername(setUsername)}
                />
              </div>
              <div class="col-12 zone-password mb-24px">
                <label class="box-text"> Password </label>
                <input
                  type="text"
                  name="password"
                  id="box-password"
                  onChangeText={(password) => setPassword(setPassword)}
                />
              </div>
            </div>
            <div class="row zone-btn">
              <div class="col-12 zone-btn-login">
                <button
                  id="id-btn"
                  class="btn-login"
                  btn-name="btn-login"
                  onClick={handleLogin}
                >
                  {" "}
                  Login{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="right-banner">
          <div class="card-banner"> 
          <div class="box-img">
          <img src="/image/image-mock/blue770x360.png" 
          srcset="/image/image-mock/blue770x360.png 110w, /image/image-mock/blue770x360.png 360w" 
          sizes="(max-width: 767.8px) 110px, (min-width: 768px) 360px" 
          alt="Title 1" class="card-content-img" />
          </div></div>

          </div>
        </div>
      </div>
    </div>
  );
}
