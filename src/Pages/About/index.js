import React from 'react';
import { 
	Container,
						
} from '../Cart/styles';

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';

import Contato from '../../Components/Contato'

function About({history, popupStatus, logout,  login}) {


	return (
		<Container>
			<Top history={history}/>

					{/* <Content>
						{company && (
							<Box style={{width: 'calc(100% - 60px)'}}>
								<Section style={{width: '50% !important', flexGrow: '0 !important'}}>
									<SectionTitle>Endereço </SectionTitle>
									<Info style={{marginTop: 20}}>
										{company.address.full}
									</Info>
									

									<Info>Número: {company.address.number}</Info>
									<Info>Bairro: {company.address.bairro}</Info>
									<Info>Cidade: {company.address.city}</Info>
									<Info>Estado: {company.address.uf}</Info>
									<Info>Complemento: {company.address.complement}</Info>
									<Info>CEP: {company.address.cep}</Info>
								</Section>

								<div style={{marginLeft: 15, display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
									<Value>
										<SectionTitle>Telefone</SectionTitle>
										<Info  style={{marginTop: 20}}>
											{company.phone}
										</Info>
									</Value>

									<Value>
										<Info  style={{marginTop: 20}}>
											{company.description}
											
										</Info>
									</Value>

									<div style={{display: 'flex', marginTop: 10}}>
										<Icon src={icWhats}/>
										<Whatsapp>Fale conosco via WhatsApp</Whatsapp>
									</div>
								</div>
								
							</Box>
						)}
					</Content> */}
					<Contato/>
			<Footer />
			
		</Container>
	);
}

export default About