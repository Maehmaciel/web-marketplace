import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import * as actions from '../../store/actions/popup';

import { Container, Menu, Icon, Title, List, Category, Footer, Whatsapp } from './styles';

import icClose from '../../assets/ic_close.svg'
import icWhats from '../../assets/ic_whats.svg'

function SideMenu({categories, open, menuStatus, history, logout }) {

	
	return (
		<SwitchTransition>
			
			<CSSTransition key={open ? "Goodbye, world!" : "Hello, world!"} in={open} timeout={300} classNames="my-node" >
				{open ? (
					<Container>
						<Menu>
							<Icon  style={{marginTop:20,marginRight:20}} onClick={menuStatus} src={icClose}/>
							<Title>Categorias</Title>

							<List>
								{categories.map((category, index) => 
								index ===0? <Category key={index} to="/">{category}</Category>:
								<Category key={index} to={`/category/${category}`}>{category}</Category>
								)}
							</List>
							
							<Footer>
							<Category to="/about">Sobre a empresa</Category>
								<div style={{display: 'flex', justifyItems:'center'}}>
									<Icon src={icWhats}/>
									<Whatsapp>Atendimento via WhatsApp</Whatsapp>
								</div>
								
								{/* <Category onClick={signOut}>Sair da Conta</Category> */}
								
								
							</Footer>
						</Menu>
					</Container>
				) : <div></div>}
			</CSSTransition>
		</SwitchTransition>
	);
}

const mapStateToProps = state => ({
	categories: state.products.categories,
	open: state.popup.menu
});

const mapDispatchToProps = dispatch =>
bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);