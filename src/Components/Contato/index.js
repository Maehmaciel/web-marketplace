import React from 'react';

import { Container,ItemDados,ItemContato, ItemText, ItemTitle, SubTitle,Content} from './styles';

const Contato = ({about}) => (
		<Container>
		
			<div style={{width:'50%'}}>
				<ItemTitle>
				Sobre a empresa
				</ItemTitle>
				<ItemText>
				{about}
				</ItemText>
			</div>
			<ItemDados>
			
			<ItemTitle>
			Fale conosco
			</ItemTitle>
			<Content>
			<ItemContato>
				<SubTitle>E-mail</SubTitle>
				<ItemText>
				contato@3renergiapc.com.br
				</ItemText>
			</ItemContato>
			<ItemContato>
				<SubTitle>Telefone</SubTitle>
				<ItemText>
				35) 3414-3405
				</ItemText>
				<ItemText>
				(35) 99969-3228
				</ItemText>
				<ItemText>
				(19) 99126-5374
				</ItemText>	
			</ItemContato>
			<ItemContato>
				<SubTitle>Endereço</SubTitle>
				<ItemText>
				Av. Champagnat, 1419 Poços de Caldas - MG
				</ItemText>
			</ItemContato>
			</Content>
			

			
			</ItemDados>
			

		</Container>
);

export default Contato;


