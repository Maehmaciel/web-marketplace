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
	background: #FCFCFC;
	display: flex;
	justify-content: space-around;
	padding: 102px 216px 0px 216px;
	flex-wrap: wrap;


	@media (min-width: 750px) {
		height: calc(100% - 221px) !important;
	}

	@media (max-width: 950px) {
		padding: 20px 50px 20px 50px;
		
	}

	@media (max-width: 350px) {
		padding: 20px 30px 20px 30px;
	}
`;

export const Box = styled.div`
	width: 50%;
	max-height:440px;
	
	background: #FCFCFC;
	border-radius: 6px;
	display: flex;

	@media (min-width: 950px) {
	
	}

	@media (max-width: 950px) {
		
	}

	@media (max-width: 650px) {
		
	}


`

export const Image = styled.img`
	width: 284px;

`

export const Name = styled.h2`
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 135%;
	color: #090C00;
	margin-bottom:32px;
	
`
export const ButtonText = styled(Link)`
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
export const Description = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 150%;
	color: #545454;
	margin-bottom:48px;
`


export const Horizontal = styled.div`
	display: flex;
	align-items:center;
	@media (max-width: 950px) {
		margin-top: 50px;
	}
`

export const Price = styled.span`
	font-style: normal;
	font-weight: 600;
	font-size: 40px;
	line-height: 150%;
	color: #090C00;
	margin-bottom:48px;

`