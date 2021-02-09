import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/cart';

import { Container, Content, Box, Image, Name, Horizontal, Price, Description, ButtonText } from './styles';

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';
import Button from '../../Components/Button'
import api from '../../services/api';

function ProductDetails({ history, addToCart, removeFromCart, cart, popupStatus }) {
	const [product, setProduct] = useState({})
	const [qnt, setQnt] = useState(0)
	const { id, category } = useParams()

	useEffect(() => {
		getProductData()
	}, [])

	const getProductData = async () => {
		const { data } = await api.get(`/product/${category}/${id}`)

		setProduct(data)

		const filter = cart.filter(element => element.id === data.id)

		if (filter[0] && filter[0].qnt > 0) setQnt(filter[0].qnt)

	}


	const addAndRefresh = () => {
		addToCart(product)

		setQnt(qnt + 1)
		popupStatus({ name: 'notify', information: `adicionado ao carrinho: ${qnt + 1} unidades` })
	}

	const removeAndRefresh = () => {
		if (qnt > 0) {
			removeFromCart(product, qnt)
			setQnt(qnt - 1)
		}
	}





	if (!!cart.length) {

	
	}




	return (
		<Container>
			<Top history={history} />
			<Content>

				<Box style={{ justifyContent: 'center' }}>
					<Image src={product.url} />
				</Box>

				<Box style={{ flexDirection: 'column' }}>
					<Name>{product.name}</Name>
					<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
					<Price>R$ {product.price}</Price>
					<Horizontal>
						<Button size={'big'} click={() => { addAndRefresh() }}>Comprar</Button>
						<ButtonText to={`/category/${product.type}`}>Ver Mais Produtos</ButtonText>
					</Horizontal>

				</Box>


			</Content>
			<Footer />
		</Container>
	);
}

const mapStateToProps = state => ({
	cart: state.cart
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
