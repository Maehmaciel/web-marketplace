/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from 'react-router-dom';

import * as actions from '../../store/actions/products';

import { Container, Content, Name } from './styles';

import Top from '../../Components/Top';
import ProductsSession from '../../Components/ProductsSession';
import Footer from '../../Components/Footer';
import Blackfooter from '../../Components/BlackFooter'

import api from '../../services/api';

function Category({refreshProductList, history}) {

	const { name } = useParams()

	useEffect(() => {
		getProductList()
	},[name])

	const getProductList = async () => {
		const { data } = await api.get(`/category/${name}`)
		refreshProductList(data)
	} 

	return (
		<Container>
			<Top history={history} />
			<Content>
			<ProductsSession name={name} history={history}/>
			</Content>
			<Blackfooter/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);