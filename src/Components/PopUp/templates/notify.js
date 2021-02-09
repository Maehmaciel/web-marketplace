import React from 'react';

import { Container, ButtonClose, Btn, Text, Content } from './styles';

import icClose from '../../../assets/ic_cancel.svg';
import Button from '../../Button'
const Notify = ({ info, close }) => (
	<Container>
		<ButtonClose onClick={close} src={icClose} />
		<Content>
			<Text>{info}</Text>
		</Content>

	</Container>
);

export default Notify;
