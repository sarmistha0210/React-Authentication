import React, { useState } from 'react'
import axios from 'axios'; 

const Login = () => {

    const [validerr,setErr] = useState([]);
    function loginHandler(e) {
        e.preventDefault();
        const errors = {};
        const formData = new FormData(e.target); //browser construction function
        const allData = Object.fromEntries(formData.entries());
        console.log(allData.password);
        let validation = true;
        
        if(allData.password.length < 5) {
           validation = false;
           errors.password = 'Password should be more than 5 char';
        }
        
        if(validation) {
            console.log('form submited');
            const data = {
                "username": allData.email,
                "password": allData.password
              }
            axios.post('http://localhost/wordpress/wp-json/jwt-auth/v1/token',data)
            .then((response) => {
                console.log(response);
                if(response.status == 200){
                    localStorage.setItem("usertoken", JSON.stringify(response.data));
                }
            })
            setErr(errors);
        } else {
            setErr(errors);
        }
}

  return (
    <div id="quiz">
        <div className="login-form" id="question">
        <form onSubmit={loginHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <span>{validerr.password}</span> 
    </div>
    </div>
  )
}

export default Login
