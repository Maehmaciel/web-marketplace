import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 130%;
	height: 100%;
	display: flex;
	flex-direction: row;
	position: fixed !important;
	background: rgba(0,0,0,0.7);
	overflow: hidden;
	z-index: 5;

`
export const Menu = styled.div`
	width: 20%;
	background: #fff;
	display: flex;
	flex-direction: column;
	font-size: 28px;
	
	@media (max-width: 700px) {
		width: 35%;
	}

	@media (max-width: 550px) {
		width: 45%;
	}

	@media (max-width: 450px) {
		width: calc(80% - 30%);
	}

	@media (max-width: 350px) {
		width: calc(100% - 35%);
	}
`;

export const Icon = styled.img`
	width: 20px;
	height: 20px;
	align-self: flex-end;

`

export const Title = styled.h2`
	color: #090C00;
	padding: 90px 0px 24px 60px;
	border-bottom:1px solid #DFDFDF;
	
`

export const List = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(60%-110px) !important;
	overflow:auto;
	padding: 48px 0px 0px 60px; 

	::-webkit-scrollbar {
		width: 3px;
		background-color: rgba(0,0,0,0.1);
	} 

	::-webkit-scrollbar-thumb {
		background-color: #0466B9;
	}
	
`
export const Category = styled(Link)`
	margin-bottom: 40px;
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 130%;
	color: #545454;
	display: flex;
`

export const Sobre = styled(Link)`
	margin-bottom: 33px;
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 130%;
	color: #545454;
	display: flex;
`

export const Whatsapp = styled.button`
	background:#FFF;
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 130%;
	color: #A5C135;
	margin-left: 10px;
	display: flex;
	justify-content:center;
	align-items:center;
`

export const Footer = styled.div`
	border-top:1px solid #DFDFDF;
	display: flex;
	flex-direction: column;
	margin-top: auto;
	padding:70px 0px 123px 60px;	
`

