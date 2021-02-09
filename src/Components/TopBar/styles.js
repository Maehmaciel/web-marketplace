import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	background: #090C00;
	padding: 20px 130px 20px 130px;
	display: flex;
	flex-direction: column;

	@media (max-width: 950px) {
		padding: 20px 50px 20px 50px;
	}

	@media (max-width: 350px) {
		padding: 20px 30px 20px 30px;
	}

`;

export const Logo = styled.img`
`

export const RightSide = styled.div`
	display: flex;
    height: 100%;
	justify-content: center;
	align-items: center;
`

export const LinkContainer = styled(Link)`
	display: flex;
	align-items: center;
	margin-left: 40px;

	@media (max-width: 765px) {
		display: none;
	}
`

export const LinkMenu= styled.a`
	display: flex;
	align-items: center;
	margin-left: 40px;

	@media (max-width: 765px) {
		display: none;
	}
`

export const LinkIcon = styled.img`
	margin-right: 5px;
`

export const Menu = styled.img`
	width: 30px;
	height: 30px;
	display: none;

	@media (max-width: 765px) {
		display: flex;
	}
`

export const LinkSpan = styled.span`
	color: #FFFFFF;
	font-size: 16px;
	font-weight: 300;
	
`


export const LoginSpan = styled.span`
	color: #FFFFFF;
	font-size: 20px;
	font-weight: 300;
	display: flex;
	margin-left: 5px;
`

export const LoginSpanRegular = styled.span`
	color: #FFFFFF;
	font-size: 16px;
	font-weight: 400;
	margin-left: 5px;
`
export const Top = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content:space-between;
`

export const Bottom = styled.div`
	flex-grow: 1;
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	align-items: flex-end;
`

export const MobileLink = styled(Link)`
	font-size: 20px;
	font-weight: 500;
	color: #fff;
	margin-top: 10px;
`

export const ButtonText = styled(Link)`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 150%;
	color: #545454;
	:hover{
		text-decoration: underline;
		color: #0995C6;
	}

`
export const ButtonText2 = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 150%;
	color: #545454;
	:hover{
		text-decoration: underline;
		color: #0995C6;
	}

`