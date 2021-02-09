import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
	max-width: 280px;
	max-height:460px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	flex-grow: 1;
`;

export const Name = styled.span`
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 130%;
	color: #545454;
	align-self: flex-start;
	margin-top: 16px;
`

export const Image = styled.img`
	margin-top: 18px;
	max-width: 80%;
	height: 200px;
`

export const Price = styled.span`
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 135%;
	color: #090C00;
	align-self: start;
	margin-top: 24px;
`

export const Button = styled.span`
	width: 100%;
	background: ${props => props.bg};
	height: 32px;
	color: #FFFFFF;
	font-size: 16px;
	font-weight: 300;
	border-radius: 6px;
	display:flex;
	align-items: center;
	justify-content: center;
	margin-top: 16px;
`
