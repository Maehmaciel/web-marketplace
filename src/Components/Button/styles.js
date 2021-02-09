import styled,{css} from 'styled-components';

export const Container = styled.button`
	background: #0995C6;
	border-radius: 5px;
	${(props) =>
    props.size === 'xsmall' &&
    css`
		padding: 8px 16px;
		border-radius: 4px;
	`}
	${(props) =>
	props.size === 'small' &&
    css`
		padding: 12px 24px;
	`}
	${(props) =>
	props.size === 'medium' &&
    css`
		padding: 16px 32px;
	`}
	${(props) =>
	props.size === 'big' &&
    css`
		padding: 16px 72px;
		width: 276px;
		height: 56px;
	`}

	&:active{
	opacity:0.8;
	}

	&:hover{
	opacity:0.8;
	}
	

	
`;

export const Text = styled.span`
	font-family: Inter;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 150%;
	text-align: center;
	color: #FFFFFF;
	align-self: center;
	margin: 0px 0px;



	
`;
