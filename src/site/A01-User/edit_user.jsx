import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "./user_style.css";

import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";

//import database from '../services/firebaseDB';
//import { getDatabase, ref, onValue, set } from "firebase/database";
//const database = getDatabase();

import { db } from "../services/firebase";
import { onValue, ref, set } from "firebase/database";

//const auth = getAuth();

export default function EditUserPage() {
  //const ref_error_meg = useRef(null);
  // ref_error_meg.current.classList.remove("d-none");

  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const displayNameRef = useRef();

  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = displayNameRef.current.value;
    console.log("displayNameRef: " + displayName);

    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        console.log("update !!!");
        navigate("/user");
        // ...
      })
      .catch((error) => {
        // An error occurred
        console.log(auth.currentUser);
        console.log("update error: " + error);
      });
  };

  const handleEdit = async (e) => {
    // Push Function
    console.log("Push Function !!!");
    console.log("NAME: " +firstName +" "+lastName);

   set(ref(db, "users/" + user.uid), {
     firstName: firstName, 
     lastName: lastName
   }).then(() => {
     console.log("update DB Done !!!");
     navigate("/user");
     //alert("DB !!!");
   })
   .catch((error) => {
     console.log(error);
     //alert("Can not db");
   });
     // writeUserData(firstName, lastName);
  };
  function writeUserData(firstName, lastName) {
    console.log("writeUserData - NAME: " +firstName +" "+lastName);
    set(ref(db, "users/" + user.uid), {
      firstName: firstName, 
      lastName: lastName
    }).then(() => {
      console.log("Push Function Done !!!");
      //alert("DB !!!");
    })
    .catch((error) => {
      console.log("Can not Push Function !!!");
      //alert("Can not db");
    });;
  }
  return (
    <div className="container--content page--login mt-40px  mb-40px">
      <form onSubmit={handleEdit} className="form-container">
        <div class="col-12 zone-firstName mb-16px">
          <label className="box-text" htmlFor="firstName">
            firstName
          </label>
          <input
            value={firstName}
            type="firstName"
            name="firstName"
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div class="col-12 zone-lastName mb-16px">
          <label className="box-text" htmlFor="lastName">
            lastName
          </label>
          <input
            value={lastName}
            type="lastName"
            name="lastName"
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <button id="id-btn" className="btn-db" type="submit">
          update DB
        </button>
      </form>
      
    </div>
  );
}
