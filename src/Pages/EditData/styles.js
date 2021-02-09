import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	background-color:#FFF;
	display:flex;
	flex-direction:column;
`;
export const Content = styled.div`
	flex:1;
	padding:96px 0px 96px 216px;

`;

export const Name = styled.span`
	color: #383D40;
	font-weight: 500;
	font-size: 20px;
	margin-left: 130px;
	margin-top: 50px;
	display: flex;

	@media (max-width: 950px) {
		margin-left: 45px;
	}

	@media (max-width: 350px) {
		margin-left: 25px;
	}
`


