import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import logo from '~/assets/Nubank_Logo.png';

import { HeaderContainer, Top, Logo, Title } from './styles';

export default function Header() {
    return (
        <HeaderContainer >
            <Top>
                <Logo source={logo} />
                <Title>Ruan Reis</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </HeaderContainer>
    )
}

