import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/popup';
import Button from '../../Components/Button'
import { 
	Container,
	Text,
	Btn
} from './styles';


const BlackFooter = ({popup, popupStatus, login, history, menuStatus}) => {


	return (
		<Container>
				<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
				<Btn>
					<Button size={'xsmall'}>Ver agora</Button>
				</Btn>
				
		
		</Container>
	);

}

const mapStateToProps = state => ({
	popup: state.popup,
	login: state.login.user.name
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BlackFooter);
