import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { 
        Image, 
        View, 
        ScrollView,
        KeyboardAvoidingView, 
        Platform,
        TextInput,
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
    const formRef = useRef<FormHandles>(null);

    const emailInputRef = useRef<TextInput>(null);

    const passwordInputRef = useRef<TextInput>(null);

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
                        <Form ref={formRef} 
                            onSubmit={(data) =>{
                                console.log(data)
                            }}
                        >
                            <Input 
                                autoCapitalize="words" 
                                name="name"icon="user" 
                                placeholder="Digite seu nome" 
                                returnKeyType="next"
                            />

                            <Input 
                                ref={emailInputRef}
                                keyboardType="email-address" 
                                autoCorrect={false}
                                autoCapitalize="none"
                                name="email" icon="mail" 
                                placeholder="Digite seu e-mail" 
                                returnKeyType="next"
                                emailInputRef.current?.focus();
                            />

                            <Input  
                                ref={passwordInputRef}
                                secureTextEntry
                                name="senha" 
                                icon="lock" 
                                placeholder="Digite sua senha"
                                textContentType="newPassword"
                                returnKeyType="send"
                            />
                        </Form>  
                        <Button 
                            onPress={() => 
                                formRef.current?.submitForm()}
                            > 
                            Cadastrar 
                        </Button>
                        
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