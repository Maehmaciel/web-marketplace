import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	background-color:#FFF;
	min-height:100vh;
	display:flex;
	flex-direction:column;
	

`;

export const Content = styled.div`
	flex:1;
	padding: 0px 130px 60px 130px;

	@media (max-width: 950px) {
		padding: 20px 50px 20px 50px;
	}

	@media (max-width: 5000px) {
		padding: 20px 30px 20px 30px;
	}
`

export const Box = styled.div`
	padding: 20px;
	margin-top: 30px;
	background: #fff;
	border-radius: 6px;
	display: flex;
	flex-wrap: wrap;
	
	@media (max-width: 950px) {
		width: calc(100% - 100px);
	}

	@media (max-width: 5000px) {
		width: calc(100% - 100px);
	}
`

export const List = styled.table`
	margin: 10px;
	flex-grow: 1;
`

export const FirstLine = styled.tr`
	color: #303233;
	font-weight: 700;
	font-size: 18px;
`

export const FirstColumns = styled.td`
	padding: 15px;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	align: left;
	color: #303233;
`

export const Line = styled.tr`
`

export const Column = styled.td`
	padding: 15px;
	border-bottom: 1px solid rgba(255,255,255,0.8);
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	align: center;
	color: #383D40;
`


export const ColumnRemove = styled.th`
	padding: 15px;
	border-bottom: 1px solid rgba(255,255,255,0.8);
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	color: #F63E3E;
	border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const Image = styled.img`
	width: 60px;
	max-height: 70px;
`

export const Name = styled.span`
	margin-left: 20px;
	font-weight: 300;
	font-size: 18px;
	color: #383D40;
`

export const Product = styled(Link)`
	display: flex;
	align-items: center;
	color: #383D40;
	font-size: 18px;
`

export const Alert = styled.p`
	opacity: 0.6;
	position: initial;
	font-weight: 700;
	font-size: 20px;
	display: flex;
`

export const Section = styled.div`
	display: flex;
	padding: 10px 20px 10px 10px;
	flex-direction: column;
	flex-grow: 1;
`

export const SectionTitle = styled.span`
	color: #303233;
	font-weight: 700;
	font-size: 18px;
`

export const Span = styled.span`
	color: #77797B;
	font-size: 14px;
	margin-top: 12px;
	margin-bottom: 20px;
`

export const Button = styled.button`
	padding: 16px 72px;
	width: 276px;
	height: 56px;
	&:active{
	opacity:0.8;
	}

	&:hover{
	opacity:0.8;
	}
	background: #0995C6;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 150%;
	text-align: center;
	color: #FFFFFF;
	align-self: center;
	border-radius: 5px;
`

export const ButtonOutlined = styled.button`
	height: 52px;
	padding: 10px;
	color: #0466B9;
	border-radius: 6px;
	font-size: 14px;
	background: none;
	border: 1px solid #0466B9;
	margin-top: 20px;
	margin-right: 10px;
	


`

export const Address = styled.button`
	padding: 20px;
	margin-right: 20px;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	background: rgba(9, 149, 198, 0.05);
	border: 2px solid #545454;
	box-sizing: border-box;
	border-radius: 6px;
	font-family: Inter;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 150%;
	color: #545454;
	:focus{
		border: 2px solid #0995C6;
	}

`

export const AddressSpan = styled.span`
	margin-top: 5px;
	font-size: 14px;

`

export const ButtonText = styled.a`
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	color: #545454;
	text-decoration:none;
	margin-left:48px;
	:hover{
		text-decoration: underline;
		color: #0995C6;
	}

`

