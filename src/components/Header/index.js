import React from 'react';

import { HeaderContainer, Top, Logo, Title } from './styles';

import logo from '~/assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Header() {
    return (
        <HeaderContainer >
            <Top>
                <Logo source={logo} />
                <Title>Roberson</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </HeaderContainer>
    )
}

