import styled from 'styled-components';

export const Container = styled.div`
	background: #090C00;
	padding: 34px 360px 32px 360px;
	display:flex;
	flex-direction:column;
	@media (max-width: 950px) {
		padding: 30px 45px 20px 45px;
	}

	@media (max-width: 350px) {
		padding: 30px 25px 20px 25px;
	}

`;


export const Btn = styled.div`
	align-self:center;
`

export const Text = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 150%;
	text-align: center;
	color: #FFFFFF;
	margin-bottom:32px;
`

