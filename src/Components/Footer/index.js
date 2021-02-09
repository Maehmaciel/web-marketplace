import React from 'react';

import { Container, Lista , Point, Item,UltimaAtualizacao} from './styles';

import icFacebook from '../../assets/ic_facebook.png'
import icInstagram from '../../assets/ic_instagram.png'
import icLink from '../../assets/ic_linkedin.png'
const Footer = ({isBlack}) => (
	<Container isBlack={isBlack} >
		<Lista>
		<Item href="https://3rspu.loja.website"><Point>.</Point> 3R Energia SPU</Item>
		<Item href="https://3renergia.loja.website"><Point>.</Point> 3R Energia NR</Item>
		<Item href="https://www.3renergiapc.com.br"><Point>.</Point> 3R Energia PC</Item>
		</Lista>
		<Lista isImage={true}>
		<img alt="Icone Facebook" src={icFacebook}/>
		<img alt="Icone Instagram" src={icInstagram}/>
		<img alt="Icone Linkdln" src={icLink}/>
		</Lista>
		<UltimaAtualizacao>3R Energia - Última atualização do site em 25/05</UltimaAtualizacao>
	</Container>
);

export default Footer;
