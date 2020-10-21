import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
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
        ForgotPassword, 
        ForgotPasswordText, 
        CreatAccountButton, 
        CreatAccountButtonText 
    } from './styles';

const SignIn: React.FC = () => {
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
                            <Title> Faça seu logon</Title>
                        </View>

                        <Input name="email"icon="mail" placeholder="E-mail" />
                        <Input name="senha" icon="lock" placeholder="Dgite sua senha" />

                        <Button onPress={() => {}}> Entrar </Button>
                        <ForgotPassword onPress={() => {}}>
                            <ForgotPasswordText>
                                Esqueci minha senha
                            </ForgotPasswordText>
                        </ForgotPassword>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreatAccountButton onPress={() => {}} >
                <Icon name="log-in" size={ 20 } color="#ff9000" />
                <CreatAccountButtonText>
                    Criar uma conta
                </CreatAccountButtonText>
            </CreatAccountButton>
        </>
    );
}

export default SignIn;