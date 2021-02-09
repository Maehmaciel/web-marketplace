import React from 'react';

import { Container, Text } from './styles';

const Button = ({size, children,href, click}) => (
	<Container size={size} href={href} onClick={click}>
		<Text>
		{children}	
		</Text>
	</Container>
);

export default Button;
