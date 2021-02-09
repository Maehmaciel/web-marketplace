import React from 'react';
import { connect } from "react-redux";

import { Container, Categories, Products, Alert, Name, ButtonText } from './styles';

import Product from '../Product'

const ProductsSession = ({ list, history, name }) => (
	<Container>

		{list[0].category ? (

			list.map((info, index) =>
				<div key={index}>
					<Categories>
						<Name>{info.category}</Name>
						<ButtonText to={`/category/${info.category}`}>ver mais</ButtonText>
					</Categories>
					<Products>
						{info.products.map((p, i) => <Product history={history} key={i} info={p} />)}

					</Products>

				</div>


			)
		) : (
				<>
					<Categories>
						<Name>{name}</Name>

					</Categories>
					<Products>
						{list.map((info, index) => <Product key={index} info={info} />)}

					</Products>
				</>

			)}

		{!list[0] && <Alert>Ooops, não encontramos produtos...</Alert>}

	</Container>
);

const mapStateToProps = state => ({
	list: state.products.products
});

export default connect(mapStateToProps)(ProductsSession)

