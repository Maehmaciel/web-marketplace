import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "@unform/web";
import icClose from '../../assets/ic_close.svg'
import * as actions from '../../store/actions/cart';

import {
	Container,
	Content,
	Box,
	List,
	FirstColumns,
	FirstLine,
	Column,
	Line,
	ColumnRemove,
	Image,
	Name,
	Product,
	Alert,
	Section,
	SectionTitle,
	Span,
	Button,
	ButtonOutlined,
	Address,
	AddressSpan,
	ButtonText
} from './styles';

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';
import Cartao from '../../Components/Forms/Cartao';
import Endereco from '../../Components/Forms/Endereco';


import api from '../../services/api'

function Cart({ history, cart, removeFromCart, popupStatus, login, clearCart, logout }) {
	const [price, setPrice] = useState(0)
	const [finish, setFinish] = useState(false)
	const [addresses, setAddresses] = useState(false)
	const [paymentMethod, setPaymentMethod] = useState({ card: false, selected: false })
	const [addressSelected, setAddressSelected] = useState(false)
	const [newAddress, setNewAddress] = useState(false)
	const [getOnStore, setGetOnStore] = useState(false)
	const [error, setError] = useState('')
	const [session, setSession] = useState('')
	const [card, setCard] = useState({})

	useEffect(() => {
		let value = 0
		cart.map(product => {
			value = value + (product.price * product.qnt)

		})
		setPrice(value)
	}, [cart, addresses])

	useEffect(() => {
		if (error) {
			popupStatus({ name: 'notify', information: error })
		}
	}, [error])

	const getSession = async () => {
		setError('')
		try {
			const { data } = await api.get('/sessaoPagseguro')
			setSession(data.session.id[0])
		} catch (error) {
			setError('Erro ao criar sessao do pagseguro')
		}
	};


	useEffect(() => {
		getSession()
	}, [])

	const getToken = async (info) => {
		setError("")
		let cod=info.cartao.replace(/\s/g, '').substring(0,6)
		try {
			
			const {data}=await api.post('/cardBrand',{ tk:session,
			
			creditCard:cod
			
			})
			info.brand=data.brand
			
		} catch (error) {
			setError("Erro ao verificar bandeira do cartao")
		
		}

		try {
		
			const {data}=await api.post('/token',{ sessionId:session,
			amount:price.toFixed(2),
			cardNumber:info.cartao.replace(/\s/g, ''),
			cardBrand:info.brand,
			cardCvv:info.cvv,
			cardExpirationMonth:info.date.split("/")[0],
			cardExpirationYear:info.date.split("/")[1]})
		
			

			if(data.erro)
			setError("Erro ao conseguir token do cartao, Verifique seus dados")

			else
			setCard({name:info.name,token:data.token,cpf:info.cpf})
		} catch (error) {
			console.log({ sessionId:session,
				amount:price.toFixed(2),
				cardNumber:info.cartao.replace(/\s/g, ''),
				cardBrand:info.brand,
				cardCvv:info.cvv,
				cardExpirationMonth:info.data.split("/")[0],
				cardExpirationYear:info.data.split("/")[1]})
			setError("Erro ao conseguir token do cartao, Verifique seus dados")
		}
		
	}

	const run = async () => {
		if (!login.cpf) {
			setError('opa, não está logado')
			return
		}

		setFinish(true)

		const { data } = await api.get(`/l/addresses/${login.cpf}`)

		if (data.error) {
			logout()
			return popupStatus({ name: 'notify', information: 'opa, ocorreu um erro :(' })
		}

		if (login.address.full) data.push({ address: login.address })

		if (data.length > 0) setAddresses(data)
	}

	const selectPayMethod = (method) => {

		setPaymentMethod({ card: true, selected: true })

	}

	const addAddress = async (address) => {
		await api.post('/l/addresses', { cpf: login.cpf, address })

		run()
		setAddressSelected(null)
		setNewAddress(false)
	}

	const isSelected = (index) => {
		if (addressSelected === (index + 1)) return true

		return false
	}

	const createOrderFromAddress = async () => {

		const address = addresses[addressSelected - 1]
		try {
			const {data}=await api.post('/l/order', {
				cpf: login.cpf,
				delivery: { address: address.address, deliveryDate: '' },
				cart: {
					itens: cart,
					total: price
				},
				card,
				getOnStore: false
			})
	
			console.log(
				data
			)
			if(data.code.transaction)
			setError('Compra Criada')
		} catch (error) {
			setError("Erro ao criar Compra, tente novamente mais tarde")
		}
		
		




		clearCart()
		history.push('/orders')

	}

	const createOrderToGetOnStore = async (info) => {
		const address = "**RETIRAR NA LOJA**"

		let deliveryDate = `${info.date}-${info.hour}:00`


		try {
			const {data}=await api.post('/l/order', {
				cpf: login.cpf,
				delivery: { address, deliveryDate },
				cart: {
					itens: cart,
					total: price
				},
				card,
				getOnStore: true
			})
			console.log(data)
			if(data.code.transaction)
			setError('Compra Criada')
		} catch (error) {
			console.log(error)
			setError("Erro ao criar Compra, tente novamente mais tarde")
		}



		clearCart()
		history.push('/orders')

	}



	return (
		<Container>
			<Top history={history} />
			
			{cart.length ? (
				<Content>
				
					{/* List of products in cart */}
					<Box>
						<List>
							<tbody>
								<FirstLine>
								
									<FirstColumns>Itens no carrinho</FirstColumns>
									<FirstColumns>Preço</FirstColumns>
									<FirstColumns>Quantidade</FirstColumns>
									<FirstColumns></FirstColumns>
								</FirstLine>

								{cart.map((product, index) => (
									<Line>
										<Column>
								
											<Product to={`/product/${product.type}/${product.id}`}>
												<Image src={product.img} />
												<Name>{product.name}</Name>
											</Product>

										</Column>
										<Column>R$ {product.price}</Column>
										<Column>{product.qnt} UND.</Column>
										<ColumnRemove onClick={() => { removeFromCart(product, 1) }} >
											<img alt="excluir" style={{ height: 16, width: 16 }} src={icClose} />
										</ColumnRemove>
									</Line>
								))}
							</tbody>
						</List>
					</Box>

					{/* Total price and payment methods */}
					<Box>
						{/* Total price */}
						<Section>
							<SectionTitle>Valor da compra</SectionTitle>
							<Span>*Taxas se aplicam de acordo com o método de pagamento</Span>
							<SectionTitle>R$ {price.toFixed(2)}</SectionTitle>
						</Section>

						{/* Payment Methods */}
						{finish && (
							<div style={{ display: 'flex' }}>
								{/* Site payment methods */}
								<Section style={{ marginLeft: 20 }}>
									<SectionTitle>Forma de Pagamento</SectionTitle>
									<Span>*Outras formas de pagamento disponíveis para compras no aplicativo.</Span>
									<div>

										<ButtonOutlined
											onClick={() => { selectPayMethod('card') }}
											className={paymentMethod.card && 'selected'}>
											Cartão de Crédito
											</ButtonOutlined>
									</div>
								</Section>
							</div>
						)}
					</Box>


					<Button onClick={run} bg="#00B755">Executar compra</Button>



					{(paymentMethod.selected ) && (
						<div>
							<Box>
								<Section>
									<SectionTitle>Dados do Cartao</SectionTitle>
									<Cartao getToken={getToken} />
								</Section>
							</Box>
							{(!getOnStore && card.token && addresses) && (
								<Box>
									<Section style={{ border: 0 }}>
										<SectionTitle>Defina um endereço para entrega</SectionTitle>
										<div className="addresses">

											{addresses.map(({ address }, index) => (
												isSelected(index) ? (
													<Address className="selected-address" onClick={() => setAddressSelected(index + 1)}>
														<AddressSpan>Endereço: {address.full}</AddressSpan>
														<AddressSpan>Número: {address.number}</AddressSpan>
														<AddressSpan>Bairro: {address.bairro}</AddressSpan>
														<AddressSpan>Cidade: {address.city}</AddressSpan>
														<AddressSpan>Estado: {address.uf}</AddressSpan>
														<AddressSpan>CEP: {address.cep}</AddressSpan>
													</Address>
												) : (
														<Address onClick={() => setAddressSelected(index + 1)}>
															<AddressSpan>Endereço: {address.full}</AddressSpan>
															<AddressSpan>Número: {address.number}</AddressSpan>
															<AddressSpan>Bairro: {address.bairro}</AddressSpan>
															<AddressSpan>Cidade: {address.city}</AddressSpan>
															<AddressSpan>Estado: {address.uf}</AddressSpan>
															<AddressSpan>CEP: {address.cep}</AddressSpan>
														</Address>
													)

											))}

										</div>
									</Section>
								</Box>
							)}

							{ card.token && (newAddress  || !addresses ) && (
								<Box>
									<Section>
										<SectionTitle>Novo Endereço</SectionTitle>
										<Endereco addAddress={addAddress} setNewAddress={setNewAddress}></Endereco>
									</Section>
								</Box>
							)}

							{getOnStore && (
								<Box>
									<Section>
										<SectionTitle>Retirar na loja</SectionTitle>
										<Form onSubmit={createOrderToGetOnStore} style={{ flexWrap: 'wrap', display: 'flex' }}>
											<Input
												name="date"
												placeholder="Data de Retirada*"
												mask="99/99/9999"
												type="text"
												className="address-input" />

											<Input
												name="hour"
												placeholder="Horário de Retirada"
												mask="99:99"
												type="text"
												style={{ width: '15%' }}
												className="address-input"
												required />

											<div>
												<Button type="submit" style={{ marginRight: 20 }} bg="#00B755">Finalizar</Button>
												<Button onClick={() => { setGetOnStore(false) }} bg="#59ABF1">Cancelar Retirada</Button>
											</div>

										</Form>
									</Section>
								</Box>
							)}

							{(!newAddress && !getOnStore && card.token) && (
								<div>
									<Button onClick={() => { setNewAddress(true) }} style={{ marginRight: 20 }} bg="#0466B9">Novo Endereço</Button>
									<ButtonText onClick={() => { setGetOnStore(true) }} style={{ marginRight: 20 }} bg="#59ABF1">Retirar na loja</ButtonText>
									<Button onClick={() => { createOrderFromAddress() }} style={{ marginRight: 20 }} bg="#0466B9">Finalizar</Button>
								</div>
							)}



						</div>
					)}


				</Content>

			) : (
					<Content style={{ height: 'calc(100% - 261px)' }}>
						<Box>
							<Alert>Seu carrinho está vazio...</Alert>
						</Box>

					</Content>
				)}

			<Footer />

		</Container>
	);
}

const mapStateToProps = state => ({
	cart: state.cart,
	login: state.login.user
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)