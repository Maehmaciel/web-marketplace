import React, { useState } from 'react';
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
} from '../styles';

import Input from '../../Input'

import api from '../../../services/api'

const Endereco = ({ info, close, loginSuccess, popupStatus, redirectPopup, addAddress, setNewAddress }) => {
	const [error, setError] = useState(false)

	return (
		<Container>
			{error && <Error>{error}</Error>}

			<Forms  onSubmit={addAddress} style={{ display: 'flex', flexDirection: 'column' }}>
				<Input
					name="full"
					placeholder="Endereço*"
					type="text" />

				<Input
					name="number"
					placeholder="Número*"
					type="text"

					required />

				<Input
					name="bairro"
					placeholder="Bairro*"
					type="text"

					required />



				<Input
					name="city"
					placeholder="Cidade*"
					type="text"
					required />

				<Input
					name="uf"
					placeholder="Estado*"
					type="text"
					maxLength={2}
					required />

				<Input
					name="cep"
					mask="99.999-999"
					placeholder="CEP*"
					type="text"
					required />

				<Input
					name="complement"
					placeholder="Complemento"
					type="text"
				/>
				<div style={{display:'flex', alignItems:'center'}}>
					<FormButton style={{margin:0,marginTop:48, flex:1}}  type="submit">Adicionar</FormButton>
					<TextButton style={{margin:0,marginLeft:20,marginTop:48,flex:1, padding: 20}} onClick={() => { setNewAddress(false) }} bg="#59ABF1">Cancelar</TextButton>
				</div>



			</Forms>



		</Container>
	);
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(Endereco);