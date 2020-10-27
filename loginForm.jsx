import React from 'react';
import Joi from 'joi-browser'
import Form from './common/form';

class LoginForm  extends Form {
state = {
    data: {username: "" , password: ""},
    errors:{}
      } ;

// validate of the login form

schema = {username: Joi.string().required().label('Username'),
          password: Joi.string().required().label('Password')}

      
      doSubmit = () => {
          //call the server
         console.log('Submitted')
         
           }
      
    render() { 
        return (  
<form onSubmit = {this.handleSubmit}>
   {/* what is onSubmit ? we use that to call the server, save the changes and then redirect the user to diffrent page 
            actually we use that to prevent the full page reload */}
 {this.renderInput('username' , 'Username')}
 {this.renderInput('password' , 'Password' ,'password')}
{this.renderButton('Login')}
</form> );    }
}
export default LoginForm;
