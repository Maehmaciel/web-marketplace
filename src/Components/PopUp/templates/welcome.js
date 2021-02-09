import React from 'react';

import { Container, ButtonClose, Title, Text,Content,Btn } from './styles';

import icClose from '../../../assets/ic_cancel.svg';
import Button from '../../../Components/Button'

const Welcome = ({close, func}) => (
	<Container>
		<ButtonClose onClick={close} src={icClose}/>
		<Content>
			<Title>Seja Bem vindo</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
		</Content>
		<Btn>
		<Button onClick={func} size={'small'}>VER AGORA</Button>	
		</Btn>
		
		
			
	</Container>
);

export default Welcome;
