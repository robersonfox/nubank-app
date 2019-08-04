import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { 
    MainContainer, Content, Card, CardHeader, CardContent, 
    CardFooter, Title, Description, Annotation
} from './styles'

export default function Main() {
    return (
        <MainContainer >
            <Header />
                <Content>
                    <Menu></Menu>

                    <Card>
                        <CardHeader>
                            <Icon name="attach-money" size={28} color="#666" />
                            <Icon name="visibility-off" size={28} color="#666" />
                        </CardHeader>
                        <CardContent>
                            <Title>Saldo Disponível</Title>
                            <Description>R$ 0,65</Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>
                                Transferência de R$ 200,00 recebida de Joao Ninguem
                            </Annotation>
                        </CardFooter>
                    </Card>
                </Content>

            <Tabs />
        </MainContainer>
    )
}
