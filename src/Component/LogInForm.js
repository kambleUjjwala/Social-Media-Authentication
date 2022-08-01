import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Formik ,Form,Field, ErrorMessage} from 'formik';
import { Amplify, Auth } from 'aws-amplify';


const signup=({name,email,password})=>{
  Auth.signUp({
    username:email,
    password,
    attributes: {
      name,
        email,          // optional
          // optional - E.164 number convention
        // other custom attributes 
    }
    
  })
  .then(data => alert("Success"))
  .catch(err => console.log("failed", err));




}
const LogInForm=()=>{
  return(
    <>
    
    <div className="col-md-12">
   <div className="container text-center">
      <div className="row">
       
          <h2>Login Form</h2>
          <Formik 
          initialValues={{fullname:"ujjwala kamble"}}
           onSubmit={(values) =>{ console.log("values",values)
           signup(values)
          }}
          >


        {(props)=>( <Form>
           <Field name="fullname" placeholder='Enter full name'/>
           <ErrorMessage name="fullname" component="div"></ErrorMessage>
           <br/>
           <br/>
           <Field type="email" name="email" placeholder='Enter full Email'/>
           <br/>
           <br/>
           <Field type="password" name="password" placeholder='Enter full password' />
           <br/>
           <br/>
           <button className="text-center">Sign Up</button>
           </Form>)}
        {/* {(props)=>( <form onSubmit={props.handleSubmit}>
           <input type="text" name="fullname" value={props.values.fullname} onChange={props.handleChange} 
             placeholder='Enter full name'/>
           <br/>
           <br/>
           <input type="email" name="email"  value={props.values.email} onChange={props.handleChange} 
           placeholder='Enter full Email'/>
           <br/>
           <br/>
           <input type="password" name="password"  value={props.values.password} onChange={props.handleChange} 
           placeholder='Enter full password'/>
           <br/>
           <br/>
           <button className="text-center">Log In</button>
           </form>)}*/}
           </Formik>
    </div>
         
      </div>
   </div>
    
    
    </>

  )
}

export default LogInForm;