
import React, { useState, useEffect } from "react";
import {Text, TextInput, View} from 'react-native';
export default function LoginPage(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {

        if (username.length >= 8 && /^[A-Z]/.test(username) && password.length >= 8) {
        
        console.log('Login successful');
        alert('Login สำเร็จ');
        } else {
        
        //console.log('Invalid credentials');
        console.log( username.length + " and " + password.length);
        alert('Login ผิดพลาด');
        }
        };

    /*const clickBtnEvent = () => {
        
        alert("This is Home page !");
      };*/
      
      /*clickBtn getAttribute*/ 
      /*const clickBtnEvent = (event) => {
        const id = event.target.id;
        console.log('id: ' + id);  
        const name = event.target.getAttribute('btn-name'); 
        console.log('attr:' + name);   
      };*/

     /*clickBtn PassValue*/
     /* const clickBtnSet = Getvalue => () => {
        const value  = Getvalue; 
        console.log(value);
        }*/

    return(
        <div class="container--content">
        <div class="mt-40px">
          <h1>Login</h1>
        </div>
        <div class="mt-40px">
        <div class="row">
        
        <div class="col-12 zone-userid"> <label>Login </label>
        <input type="text" name="userid" id="box-username" onChangeText={username => setUsername(setUsername)} /></div>
        <div class="col-12 zone-password"><label> Password </label>
        <input type="text" name="password" id="box-password"  onChangeText={(password) => setPassword(setPassword)} /></div>
        
        <button id="id-btn" btn-name="btn-login" onClick={handleLogin}> Login </button>   
        </div>
        </div>
        
 
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}></input>
            Password: <input type="password" name="password" value={this.state.username} onChange={this.handlePasswordChange} />
            <button>Login</button>
      </div>
    )
}