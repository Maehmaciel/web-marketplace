/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/products';

import { Container, Content } from './styles';

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';

import Login from '../../Components/Forms/Login'

function LoginPage({ history }) {


	return (
		<Container>
			<Top  />
			<Content>
				<Login history={history} />
			</Content>

			<Footer />
		</Container>
	);

}

const mapStateToProps = state => ({
	popup: state.popup,
	categories: state.products.categories
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);