import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import {Routes, Route } from 'react-router-dom';

import { Formik ,Form,Field, ErrorMessage} from 'formik';
import { Amplify, Auth } from 'aws-amplify';
import  ConfirmCode from './Component/ConfirmCode';
import LogInForm from './Component/LogInForm';


 

Amplify.configure({
  Auth: {

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: "us-west-2:5e2b3aef-b538-4d5c-9c63-739b7482f6eb",
      
      // REQUIRED - Amazon Cognito Region
      region: 'us-west-2',

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
      // Required only if it's different from Amazon Cognito Region
      identityPoolRegion: 'us-west-2',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'us-west-2_5zQGP4TUY',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: '5cndgv05023udcugr46foefh60',

  }
});

const signin=({email,password})=>{

  Auth.signIn(email,password).then(user => console.log('success',user))
  .catch(err => console.log("failed", err));




}

{/* new code */}


const App=()=>{
  
  return(
    <>
  <Routes>
    
    <Route path='ConfirmCode' element ={<ConfirmCode/>}/>
    <Route path='LogInForm' element ={<LogInForm/>}/>

    
  </Routes>
 

    <div className="col-md-12">
   <div className="container text-center">
      <div className="row">
       
          <h2> Form</h2>
          <Formik 
          initialValues={{name: '', email:'',password:''}}
       
           onSubmit={(values) =>{ console.log("values",values)
           signin(values)
          }}
          >


        {(props)=>( <Form>
          <Field name="fullname" placeholder='enter your name'/><br/>
          <br/><Field name="email" placeholder='enter your email'/><br/>
           <br/><Field type="password" name="password" placeholder='Enter full password' /><br/>
           <br/> <button className="text-center">Log In</button>
           <button className="text-center">Sign in with google</button>




           </Form>)}
        
           </Formik>
    </div>
         
      </div>
   </div>
    
    
    </>

  )
}

export default App;
