import React, { useState} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../../../store/actions/login'

import {
	Container,
	Forms,
	FormButton,
} from '../styles';

import Input from '../../Input'


const Cartao = ({ getToken, load }) => {

	

	return (
		<Container>

			<Forms onSubmit={getToken} style={{display:'flex', flexDirection:'column'}}>
			
					<Input
						name="name"
						placeholder="Nome"
						className="login-input"
						required />
					<Input
						name="cpf"
						maxLength={11}
						placeholder="CPF"
						className="login-input"
						required />	
					<Input
						name="cartao"
						mask="9999 9999 9999 9999"
						placeholder="Cartao"
						className="login-input"
						required />
					<Input
						name="cvv"
						placeholder="CVV"
						className="login-input"
						mask="999"
						required />
					<Input
						name="date"
						mask="99/9999"
						plmask="dd/aaaa"
						placeholder="Data de Expiração"
						className="login-input"
						required />
						<FormButton type="submit">{load ? <i class="fa fa-spinner"></i> : "Gerar Token"}</FormButton>
		


				
			</Forms>


		</Container>
	);
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(Cartao);