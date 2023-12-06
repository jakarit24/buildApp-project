import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "./user_style.css";

export default function LoginPage() {
  /*clickBtn getAttribute*/

  let navigate = useNavigate();
  const clickBtnThankyou = (event) => {
    let path = "/login";
    navigate(path);
  };

  return (
    <div class="container--content page--thank--you mt-40px  mb-40px">
      <div class="mt-40px  mb-40px">
        <h1>Thank You</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div class="mt-32px mb-32px left-login">
            <button
              id="id-ty"
              btn-name="btn-ty"
              className="btn-ty"
              onClick={clickBtnThankyou}
            >
              {" "}
              Go To Login Page{" "}
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6"></div>
      </div>
    </div>
  );
}
