import React, { useState} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../../../store/actions/login'

import {
	Container,
	Forms,
	Title,
	FormButton,
	Error,
	Box
} from '../styles';

import Input from '../../Input'

import api from '../../../services/api'

const Edit = ({ info, close, loginSuccess, popupStatus, redirectPopup }) => {
	const [error, setError] = useState(false)

	const signin = async (info) => {
		const { data } = await api.post('/auth', info)

		if (data.error) return setError(data.error)

		loginSuccess(data)
		popupStatus({ name: null, information: null })
	}

	return (
		<Container>

			<Title>Editar dados</Title>
			{error && <Error>{error}</Error>}

			<Forms onSubmit={signin} style={{display:'flex', flexDirection:'row'}}>
				<Box>
					<Input
						name="name"
						placeholder="Nome"
						className="login-input"
						required />
					<Input
						name="cpf"
						mask="999.999.999-99"
						placeholder="CPF"
						className="login-input"
						required />
					<Input
						name="address"
						placeholder="Endereço"
						className="login-input"
						required />
					<Input
						name="city"
						placeholder="Cidade"
						className="login-input"
						required />
					<Input
						name="password"
						placeholder="Senha"
						type="password"
						className="login-input"
						required />
						<FormButton type="submit" className="login-input" bg="#59ABF1">Salvar Alterações</FormButton>
				</Box>
				<Box>
					<Input
						name="date"
						mask="99/99/9999"
						placeholder="Data de Nascimento:"
						className="login-input"
						required />

					<Input
						name="email"
						placeholder="Email:"
						className="login-input"
						type="email"
						required />
					<Input
						name="phone"
						mask="(99)99999-9999"
						placeholder="Telefone:"
						className="login-input"
						required />

					<div class="dropdown">
						<button class="dropbtn">Estados</button>
						<div class="dropdown-content">
							<span>Link 1</span>
							<span>Link 2</span>
							<span>Link 3</span>
						</div>
					</div>
				</Box>



				
			</Forms>


		</Container>
	);
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(Edit);