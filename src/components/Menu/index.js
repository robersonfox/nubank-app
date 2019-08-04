import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons'

import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles'

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="Teste Teste"
          size={80}
          color="#FFF"
          backgroundColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF"/>
          <NavText>Me Ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF"/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF"/>
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF"/>
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>

    </Container>
  )
}