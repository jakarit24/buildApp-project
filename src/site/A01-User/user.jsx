import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "./user_style.css";

import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";
//const auth = getAuth();
export default function UserPage() {
  //const ref_error_meg = useRef(null);
  // ref_error_meg.current.classList.remove("d-none");

  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const displayNameRef = useRef()
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = authUser.uid;
        const email = authUser.email;
        setUser(authUser);
        // ...
        console.log("user", authUser);
        //console.log("email", user.email)
        // console.log("uid", uid)
      } else {
        // User is signed out
        // ...
        setUser(null);
        console.log("user is logged out");
        navigate("/");
      }
    });
  }, []);

  //const navigate = useNavigate();
  const clickregister = (event) => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const displayName = displayNameRef.current.value;
    console.log("displayNameRef: "+displayName);
    
    /*try {
      await updateProfile(auth, displayNameRef);
      console.log("gg");
    } catch (error) {
      console.log(error);
    }*/

    
    updateProfile(auth.currentUser, {
      displayName: displayName, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      console.log("update !!!");
      navigate("/user");
      // ...
    }).catch((error) => {
      // An error occurred
      
      console.log(auth.currentUser);
      console.log("update error");
    });
    
  }
  const handleLogout = async (e) => {
    signOut(auth).then(() => {
      console.log("Logout !!!");
      navigate("/");
    }).catch((error) => {
      console.log("Can not Logout");
    });
  }
  return (
    <div className="container--content page--login mt-40px  mb-40px">
      email: {user.email}
      <br></br>
      uid: {user.uid}
      <br></br>
      displayName {user.displayName}
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit} className="form-container">
        <div class="col-12 zone-displayName mb-16px">
          <label className="box-text" htmlFor="displayName">
            displayName
          </label>
          <input ref={displayNameRef} type="displayName" name="displayName" required />
        </div>
        <button id="id-btn" className="btn-login" type="submit">
          update displayName
        </button>
      </form>


      <form onSubmit={handleLogout} className="form-container">
        <div class="col-12 zone-displayName mb-16px">
          <label className="box-text" htmlFor="displayName">
          Logout
          </label>
        </div>
        <button id="id-btn" className="btn-logout" type="submit">
          logout
        </button>
      </form>
    </div>
  );
}
