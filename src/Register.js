import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class Register extends Component {
	render(){
		
		return (
		
			<title>Register</title> 
			<div>
				<form action="../../" method="POST">
					Email Address: <input type="text" name="emailInput"/><br />
					Password: <input type="password" name="passwordInput"/><br />
					Password (again): <input type="password" name="passwardAgainInput"/><br/>
					First Name: <input type="text" name="firstNameInput"/><br />
					Last Name: <input type="text" name="lastNameInput"/><br />
					 <input type="submit" value="save"/>
				</form>
			</div>
		

			<a href="../../">Log in </a>

				
		)
	}
}

export default Register;