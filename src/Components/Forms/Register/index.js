import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../../store/actions/login'

import { 
	Container, 
	Title,
	FormButton,
	Error,
	Forms
 } from '../styles';

import Input from '../../Input'
import api from '../../../services/api'

function Register({info, close,history,loginSuccess, updateUser, user, popupStatus}) {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const formRef = useRef(null)

	

	const update = async (info) => {
		setLoading(true)
		try {
		const response = await api.post('/user', info)
		if(response.data.error){
			setError(response.data.error)
			return
		}
		const { data } = await api.post('/auth', {cpf:info.cpf,password:info.password})
		if(data.error){
			setError(data.error)
			return
		}
		popupStatus({name: 'notify', information: 'Bem vindo'})
		loginSuccess(data)
		history.push('/')
		
		
		} catch (error){
			setError("Opa, ocorreu um erro na requisiçao, tente novamente mais tarde")
		}
				
		
	}

	return (
		<Container >
			<Title>Cadastro</Title>
			{error && <Error>{error}</Error>}

			<Forms onSubmit={update} ref={formRef}>
				<Input 
					name="name" 
					placeholder="Nome completo" 
					className="login-input"
					required/>

				<Input 
					name="cpf" 
					placeholder="CPF" 
					className="login-input"
					mask="999.999.999-99"
					required/>

				<Input 
					name="phone" 
					placeholder="Celular (com DDD)" 
					className="login-input"
					mask="(99)99999.9999"
					required/>

				<Input 
					name="email" 
					type="email"
					placeholder="Email" 
					className="login-input"
					required/>

				<Input 
					name="password" 
					placeholder="Senha" 
					className="login-input"
					type="password"
					required/>

					

				<FormButton type="submit" className="login-input" bg="#0466B9">{!loading ? 'Criar conta' : 'Carregando...'}</FormButton>
			</Forms>
			
		
		</Container>
	);
}

const mapStateToProps = state => ({
	user: state.login.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register);