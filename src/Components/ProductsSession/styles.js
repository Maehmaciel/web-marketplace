import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	background: #FFF;
	border-radius: 6px;
	padding: 30px 125px 90px 125px;
	display: flex;
	flex-direction:column;

	@media (max-width: 950px) {
		padding: 30px 45px 0 45px;
	}

	@media (max-width: 350px) {
		padding: 30px 25px 0 25px;
	}
`;

export const Categories= styled.div`
	display: flex;
	justify-content:space-between;
`;
export const Products= styled.div`
	display: flex;
	flex-wrap:wrap;
`;


export const Alert = styled.h2`
	margin: 85px 70px 85px 70px;
	opacity: 0.6;
`
export const Name = styled.h2`
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 130%;
	color: #090C00;
	@media (max-width: 950px) {
		margin-left: 45px;
	}

	@media (max-width: 350px) {
		margin-left: 25px;
	}

	
`
export const ButtonText = styled(Link)`
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	color: #545454;
	:hover{
		text-decoration: underline;
		color: #0995C6;
	}

`