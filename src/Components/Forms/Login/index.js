import React, {useState, useRef} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../../../store/actions/login'

import { 
	Container, 
	Forms,
	Title,
	TextButton, 
	FormButton,
	Error
 }from '../styles';

import Input from '../../Input'

import api from '../../../services/api'

const Login = ({info, close, loginSuccess, popupStatus, history}) => {
	const [error, setError] = useState('')

	const signin = async (credentials) => {
		try {
		const { data } = await api.post('/auth', credentials)
		if(data.error){
			setError(data.error)
			return
		}
		popupStatus({name: 'notify', information: 'Bem vindo'})
		loginSuccess(data)
		history.push('/')
		} catch (error) {
			console.log(error)
			setError("Opa, ocorreu um erro na requisiçao, tente novamente mais tarde")
		}		
	
	}

	return (
		<Container>
			
			<Title>Acesse sua conta</Title>
			{error && <Error>{error}</Error>}

			<Forms islogin="true" onSubmit={signin}>
				<Input 
					name="cpf" 
					mask="999.999.999-99" 
					placeholder="CPF" 
					required/>
				<Input 
					name="password" 
					placeholder="Senha" 
					type="password"
					required/>
				<TextButton to="/register" >Esqueceu sua senha?</TextButton>
			<div style={{display:'flex', alignItems:'center'}}>
			<FormButton type="submit"  bg="#0995C6">Acessar</FormButton>
			<span className="or">ou</span>
			<FormButton  bg="#0995C6">Acesse pelo aplicativo</FormButton>
			</div>	
				
			</Forms>
			
			
			<TextButton to="/register">Não tem uma conta?</TextButton>
		</Container>
	);
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(Login);