import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "./user_style.css";
import "./js_01_user.js";
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
export default function UserPage() {
  //const ref_error_meg = useRef(null);
  // ref_error_meg.current.classList.remove("d-none");

  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const displayNameRef = useRef();

  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();

  const ref_zone_profile = useRef(null);
  const ref_zone_detail = useRef(null);
 
  const [buttonMenuStatus, setButtonMenuStatus] = useState("profile");

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

  const handleProfile = (event) => {
    ref_zone_profile.current.classList.remove('d-none');
  };
  const handleDetail = (event) => {
    ref_zone_detail.current.classList.remove('d-none');
  };
  const handleEdit1 = (event) => {
   
  };
  const handleEdit2 = (event) => {
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = displayNameRef.current.value;
    console.log("displayNameRef: " + displayName);

    /*try {
      await updateProfile(auth, displayNameRef);
      console.log("gg");
    } catch (error) {
      console.log(error);
    }*/

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
        console.log("update error");
      });
  };
  const handleLogout = async (e) => {
    signOut(auth)
      .then(() => {
        console.log("Logout !!!");
        alert(" ออกจากระบบเรียบร้อยแล้ว ")
        navigate("/");
      })
      .catch((error) => {
        console.log("Can not Logout");
      });
  };

  const handleEdit = async (e) => {
    // Push Function
    console.log("Push Function !!!");
    console.log("NAME: " + firstName + " " + lastName);

    set(ref(db, "users/" + user.uid), {
      firstName: firstName,
      lastName: lastName,
    })
      .then(() => {
        console.log("Push Function Done !!!");
        //alert("DB !!!");
      })
      .catch((error) => {
        console.log("Can not Push Function !!!");
        //alert("Can not db");
      });
    // writeUserData(firstName, lastName);
  };
  function writeUserData(firstName, lastName) {
    console.log("writeUserData - NAME: " + firstName + " " + lastName);
    set(ref(db, "users/" + user.uid), {
      firstName: firstName,
      lastName: lastName,
    })
      .then(() => {
        console.log("Push Function Done !!!");
        //alert("DB !!!");
      })
      .catch((error) => {
        console.log("Can not Push Function !!!");
        //alert("Can not db");
      });
  }
  return (
    <div className="container--content page--login mt-40px  mb-40px page-user">
      <div className="row">
        <div className="col-6 col-md-6 zone-left">
          <div className="mb-16px">
            <button id="id-btn-profile"  className={cm("btn-menu btn-profile", buttonMenuStatus === "profile" && "active")}
        onClick={() => setButtonMenuStatus("profile")} type="profile" >
              โปรไฟล์
            </button>
          </div>
          <div className="mb-16px">
            <button id="id-btn-detail" className={cm("btn-menu btn-detail", buttonMenuStatus === "detail" && "active")}
        onClick={() => setButtonMenuStatus("detail")} type="detail" >
              ข้อมูลส่วนตัว
            </button>
          </div>
          <div className="mb-16px">
            <button id="id-btn-edit-1" className={cm("btn-menu btn-edit1", buttonMenuStatus === "edit1" && "active")}
        onClick={() => setButtonMenuStatus("edit1")} type="edit1">
              แก้ไข โปรไฟล์
            </button>
          </div>
          <div className="mb-16px">
            <button id="id-btn-edit-2" className={cm("btn-menu btn-edit2", buttonMenuStatus === "edit2" && "active")}
        onClick={() => setButtonMenuStatus("edit2")} type="edit1">
              แก้ไข ข้อมูลส่วนตัว
            </button>
          </div>
          <div className="mb-16px">
            <button id="id-btn-logout" className="btn-logout" type="logout" onClick={handleLogout}>
              logout
            </button>
          </div>
        </div>
        <div className="col-6 col-md-6 zone-right">
          <div ref={ref_zone_profile} className={cm("zone-profile zone-hide", buttonMenuStatus === "profile" && "active")}>
            <div class="card-profile">
              <div class="card-profile-image mb-16px">
                <img
                  src="/image/image-mock/blue370x270.png"
                  srcset="/image/image-mock/blue370x270.png 110w, /image/image-mock/yellow370X270.png 360w"
                  sizes="(max-width: 767.8px) 110px, (min-width: 768px) 360px"
                  alt="Title 1"
                  class="card-profile-img"
                />
              </div>
              <div class="card-profile-displayname mb-24px">
                <h3>{user.displayName}</h3>
              </div>
              <div class="card-des mb-16px max-w80p">
                Lorem ipsum dolor sit amet, consectur dolori
              </div>
            </div>
          </div>
          <div ref={ref_zone_detail} className={cm("zone-profile zone-hide", buttonMenuStatus === "detail" && "active")}>
            <div className="row">
              <div className="col-6 col-md-6">DisplayName</div>
              <div className="col-6 col-md-6">{user.displayName}</div>
            </div>
            <div className="row">
              <div className="col-6 col-md-6">Name</div>
              <div className="col-6 col-md-6"></div>
            </div>
            <div className="row">
              <div className="col-6 col-md-6">Email</div>
              <div className="col-6 col-md-6">{user.email}</div>
            </div>
          </div>
        </div>
      </div>
      ---------------- detail ----------------
      <br></br>
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
          <input
            ref={displayNameRef}
            type="displayName"
            name="displayName"
            required
          />
        </div>
        <button id="id-btn" className="btn-login" type="submit">
          update displayName
        </button>
      </form>
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

function cm(...args) {
  return args.filter((v) => v).join(" ");
}