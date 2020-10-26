import React from 'react';
import Joi from 'joi-browser'
import Form from './common/form';

class Register extends Form {
    state = {
        data: {name: "" , lastName: "" , email:"" ,password:""},
        errors:{}
          } ;


          schema = {name: Joi.string().required().min(3).max(12).label('Name'),
                    lastName: Joi.string().required().min(3).max(20).label('Lastname'),
                    password :Joi.string().required().min(5).max(20).label('Password') ,
                    email:Joi.string().required().email().label('Email')}
   
     doSubmit = () => {
  //call the server
    console.log('Submitted')
                       
     }           
    render() { 
        return ( 
            <form doSubmit={this.handleSubmit}>
            {this.renderInput('name' , 'Name')}
            {this.renderInput('lastName' , 'Last Name')}
            {this.renderInput('email' , 'Email Address' ,'email')}
            {this.renderInput('password' , 'Password')}

            {this.renderButton('Register')}
            </form>
         );
    }
}
 
export default Register ;