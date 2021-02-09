import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/products';

import { Container, Background, BackgroundImageText, HeadContent } from './styles';

import Top from '../../Components/Top';
import ProductsSession from '../../Components/ProductsSession';
import Footer from '../../Components/Footer';
// import PopUp from '../../Components/PopUp';
import Blackfooter from '../../Components/BlackFooter'


import api from '../../services/api';

class Home extends Component {
	state = {
		loading: true
	}
	componentDidMount = async () => {
		try {
			const { data } = await api.get('/home')
			const { all, categories } = data.products
			this.props.refreshCategoryList(categories)
			this.props.refreshProductList(all)
			this.setState({
				loading: false
			})
			console.log(data)
			if (data.popup.popUp) this.props.popupStatus({ name: 'notify', information: data.popup.message })
		} catch (error) {
			console.log('error')
		}

	}

	render() {
		return (
			<Container>
				<Background>
					<Top />
					<HeadContent>
						<BackgroundImageText>
							Soluções completas em
					</BackgroundImageText>
						<BackgroundImageText>
							<b>sistemas elétricos</b>
						</BackgroundImageText>
					</HeadContent>
				</Background>


				{this.state.loading ? <div className="loader"></div> : <ProductsSession />}
				<Blackfooter></Blackfooter>
				<Footer />
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	popup: state.popup,
	categories: state.products.categories
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);