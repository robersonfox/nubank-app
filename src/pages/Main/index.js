import React from 'react';

import { MainContainer } from './styles'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs';


export default function Main() {
    return (
        <MainContainer >
            <Header />
            <Tabs />
        </MainContainer>
    )
}