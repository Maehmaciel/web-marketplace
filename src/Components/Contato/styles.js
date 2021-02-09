import styled from 'styled-components';
export const Container = styled.div`
	flex:1%;
	background-color:#FCFCFC;
	border-bottom: 1px solid #DFDFDF;
	display:flex;
	justify-content:space-around;
	padding:124px 452px 124px 216px;
	@media (max-width: 1400px) {
		padding-right:216px;
	}
	@media (max-width: 1160px) {
		flex-direction:column;
		padding:48px 20px 40px 20px;
		align-items:flex-start;
		justify-content:flex-start
	}
	
`;


export const Content = styled.div`
	height:100%;
	display:flex;
	justify-content:space-between;
	flex-direction:column;
	
`;

export const ItemDados = styled.div`
	display:flex;
	justify-content:flex-start;
	flex-direction:column;
	max-height:400px;
	margin-left:138px;
	@media (max-width: 1160px) {
		margin-left:0px;
		height:100%;
		margin-top:48px;
	}
	
`;

export const ItemContato = styled.div`
	margin-bottom:32px;
	@media (max-width: 1160px) {
		margin-bottom:16px;
	}
	
`;

export const ItemTitle = styled.h2`
	color: #090C00;
	margin-bottom:49px;
	@media (max-width: 1160px) {
		font-weight: 600;
		font-size: 20px;
		line-height: 135%;
		margin-bottom:24px;
	}
	
`;
export const SubTitle = styled.p`
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 130%;
	color: #090C00;
	margin-bottom:16px;
	@media (max-width: 1160px) {			
	font-size: 18px;
	line-height: 135%;
	margin-bottom:8px;
	margin-top:8px;
	}

`;
export const ItemText = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 150%;
	color: #545454;
	@media (max-width: 1160px) {
		font-size: 14px;
		
	}

`;


