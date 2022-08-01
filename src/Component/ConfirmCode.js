import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Formik ,Form,Field, ErrorMessage} from 'formik';
import { Amplify, Auth } from 'aws-amplify';

const ConfirmCode=(email,code)=>{
  Auth.confirmSignUp(email,code,{
   
    forceAliasCreation:true
    
  })
  .then(data => console.log(data))
  .catch(err => console.log("get failed", err));




}

{/* new code */}


const ConfirmCodeNew=()=>{
  return(
    <>
    <div className="col-md-12">
   <div className="container text-center">
      <div className="row">
       
          <h2>Form</h2>
          <Formik 
          initialValues={{name: '', email:'',password:''}}
       
           onSubmit={(values) =>{ console.log("values",values)
           ConfirmCode(values.email,values.code)
          }}
          >


        {(props)=>( <Form>
          <br/><Field name="email" placeholder='enter your email'/><br/>
           <Field name="code" placeholder='Enter confirm code'/>
           
           <button className="text-center">Log In</button>
           </Form>)}
        
           </Formik>
    </div>
         
      </div>
   </div>
    
    
    </>

  )
}

export default ConfirmCodeNew;
