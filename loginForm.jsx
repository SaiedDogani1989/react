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
          //call server
         console.log('Submitted')
         
           }
      
    render() { 
        return (  
<form onSubmit = {this.handleSubmit}>
   {/* onSubmit use for calling server, save the changes and then redirect the user to diffrent page actually we use that to prevent the full page reload */}
    {/*first parametr is name , second is label and third is type but fixed value is text and you can change it by give it another value if you want  */}
 {this.renderInput('username' , 'Username')}
 {this.renderInput('password' , 'Password' ,'password')}
{this.renderButton('Login')}
</form> );    }
}
export default LoginForm;
