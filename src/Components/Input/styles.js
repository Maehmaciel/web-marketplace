import styled from 'styled-components';
import InputMask from "react-input-mask";

export const Container = styled(InputMask)`
	padding: 15px 16px 14px 16px;
	margin-top: 8px;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 150%;
	color: #090C00;
	background: #FFFFFF;
	border: 2px solid #DFDFDF;
	box-sizing: border-box;
	border-radius: 4px;

	:focus{
		border: 2px solid #0995C6;
	}
`;
export const Info = styled.span`
	margin-top:16px;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #545454;
`;

export const Erro = styled.span`
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;
	color: #FF3232;
`;

