import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { 
        Image, 
        View, 
        ScrollView,
        KeyboardAvoidingView, 
        Platform
    } from 'react-native';

import Input from '../../components/Input/';
import Button from '../../components/Button/';

import logoImg from '../../assets/logo.png';

import { 
        Container, 
        Title, 
        BackToSignIn, 
        BackToSignInText 
    } from './styles';

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView 
                style={{flex: 1}}
                behavior={ Platform.OS === 'ios' ? 'padding': undefined }
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex:1 }}
                >
                    <Container>
                        <Image source={ logoImg } />
                        
                        <View>
                            <Title> Criar sua conta</Title>
                        </View>

                        <Input name="name"icon="user" placeholder="Digite seu nome" />
                        <Input name="email" icon="mail" placeholder="Digite seu e-mail" />
                        <Input name="senha" icon="lock" placeholder="Digite sua senha" />

                        <Button onPress={() => {}}> Cadastrar </Button>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <BackToSignIn onPress={() => navigation.goBack()} >
                <Icon name="arrow-left" size={ 20 } color="#f4ede8" />
                <BackToSignInText>
                    Voltar para logon
                </BackToSignInText>
            </BackToSignIn>
        </>
    );
}

export default SignUp;