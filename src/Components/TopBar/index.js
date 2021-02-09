import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/popup';

import {
	Container,
	Top,
	Bottom,
	Logo,
	RightSide,
	LinkContainer,
	LinkIcon,
	LinkSpan,
	Menu,
	MobileLink,
	LinkMenu, 
	ButtonText,
	ButtonText2
} from './styles';

import LogoPNG from '../../assets/logo.png'
import icBAG from '../../assets/ic_cart.svg';
import icACC from '../../assets/ic_arrow.svg';
import icMENU from '../../assets/ic_menu.svg';

const TopBar = ({ login, menuStatus, logout }) => {
	const [showMenu, setShowMenu] = useState(false)
	const signout = async () => {
		logout()
		
	}

	return (
		<Container>
			<Top>


				<LinkMenu onClick={menuStatus}>
					<LinkIcon style={{ width: 30, height: 20 }} src={icMENU} />
				</LinkMenu>
				<Logo src={LogoPNG} />

				<RightSide>
					{!login ? (
						<LinkContainer to="/login">
							<LinkSpan>Entrar</LinkSpan>
							
						</LinkContainer>
						

					) : (
							<div className="dropdown">
								<LinkSpan className="dropbtn">{login.split(" ")[0]}</LinkSpan>
								<LinkIcon style={{ marginLeft: 9 }} src={icACC} />
								<div className="dropdown-content">
									<ButtonText to="/edit">Meus Dados</ButtonText>
									<ButtonText to="/orders">Meus Pedidos</ButtonText>
									<ButtonText2 onClick={signout}>Sair da conta</ButtonText2>
								</div>
							</div>

						)}


					<LinkContainer to="/cart">
						<LinkIcon src={icBAG} />
					</LinkContainer>

					<Menu onClick={() => { setShowMenu(!showMenu) }} src={icMENU} />


				</RightSide>

			</Top>

			{showMenu && (
				<Bottom>
					<MobileLink onClick={menuStatus}>Categorias</MobileLink>
					<MobileLink to="/cart">Carrinho</MobileLink>
					{!login ? (
						<MobileLink to="/login">Acesse sua conta</MobileLink>
					) : (
							<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
								<MobileLink to="/edit">Meus Dados</MobileLink>
								<MobileLink to="/orders">Meus Pedidos</MobileLink>
							</div>
						)}
				</Bottom>
			)}

		</Container>
	);

}

const mapStateToProps = state => ({
	popup: state.popup,
	login: state.login.user.name
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
