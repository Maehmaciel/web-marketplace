/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/products';

import { Container, Content } from './styles';

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';

import Edit from '../../Components/Forms/Edit'

function EditData({history}) {


	return (
		<Container>
			<Top history={history} />
			<Content>
			<Edit />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditData);