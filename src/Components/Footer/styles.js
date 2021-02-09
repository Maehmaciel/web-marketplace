import styled,{css} from 'styled-components';

export const Container = styled.footer`
	display: flex;
	flex-direction:column;
	height:240px;
	background-color:#FCFCFC;
	justify-content:space-between;
	align-items:center;
	padding:59px 0px 18px 0px;
	${(props) =>
    props.isBlack &&
    css`
		background-color:#090C00;
	`}
	@media (max-width: 1360px) {
		padding:16px 20px 18px 20px;
		
	}
`;



export const Item = styled.a`
	font-style: normal;
	font-weight: 900;
	font-size: 24px;
	line-height: 130%;
	color: #090C00;
	cursor:pointer;
	@media (max-width: 1160px) {
		font-size: 20px;
		
	}
	
`;

export const UltimaAtualizacao = styled.span`
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 175%;
	text-align: center;
	color: #545454;
	@media (max-width: 1160px) {
		font-size: 12px;
		
	}
	
`;


export const Lista = styled.div`
	display:flex;
	width:50%;
	justify-content:space-around;
	align-items:center;
	flex-wrap:wrap;

	@media (max-width: 1160px) {
		width:100%;
		align-items:flex-start
		
	}

	${(props) =>
	props.isImage &&
    css`
		width:20%;
	`}


	
`;

export const Point = styled.span`
 	font-size:40px;
	color: #A5C135;
	
`;
