import styled from 'styled-components';

export const Container = styled.div`
	width: 30%;
	padding: 24px;
	background: #fff;
	border-radius: 6px;
	font-size: 28px;
	color: #0466B9;
	display:flex;
	flex-direction:column;
	@media (max-width: 660px) {
		height: 50%;
		width: 80%;
		font-size: 22px;
		padding: 20px;
	}
`;
export const Content = styled.div`
	display:flex;
	flex-direction:column;
`;

export const ButtonClose = styled.img`
	width: 20px;
	height: 20px;
	align-self: flex-end;
	margin-bottom: 21px;
`
export const Btn = styled.div`
	align-self: center;
`

export const Error = styled.span`
	font-weight: 300;
	color: #F63E3E;
	font-sizE: 18px;
	margin-top: 10px;
`

export const Input = styled.input`
	padding: 16px 13px 5px 13px;
	color: rgba(48, 50, 51, 0.8);
	font-size: 18px;
	border: 1px solid #77797B;
	border-radius: 6px;
	margin-top: 20px;

`



export const FormButton = styled.button`
	height: 52px !important;
	padding: 15px;
	width: 100%;
	border-radius: 6px;
	background: ${props => props.bg};
	color: #fff;
	font-size: 18px;
	font-weight: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	font-weight: 300px !important;
`
export const Title = styled.span`
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 130%;
	text-align: center;
	color: #545454;
	width:100%;
	margin-bottom:24px;
`;

export const Text = styled.span`

	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 150%;
	text-align: center;
	color: #545454;
	width:100%;
	margin-bottom:60px;
`;

