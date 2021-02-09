import styled from 'styled-components';
import background from '../../assets/background.png'
export const Background = styled.div`
	height: 100%;
	width: 100%;
	position:relative;
	background-size:cover;
	background-position:50% 50%;
	background-image:url(${background});
`;

export const BackgroundImageText = styled.span`
	font-style: normal;
	font-weight: 300;
	font-size: 48px;
	line-height: 135%;
	text-align: center;
	color: #FFFFFF;
`;

export const Container = styled.div`
	position:absolute;
	width:100%;
	height:100%;
	background: #FFF;
`;

export const HeadContent = styled.div`
	display:flex;
	flex-direction:column;
	height:calc(100% - 88px);
	justify-content:center;
	align-items:center;
`;