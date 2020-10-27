import React, { useRef, useCallback } from 'react';

import { 
        Image, 
        View, 
        ScrollView,
        KeyboardAvoidingView, 
        Platform,
        TextInput,
        Alert,
    } from 'react-native';

import * as Yup from 'yup';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import getValidationError from '../../utils/getValidationErros';


import Input from '../../components/Input/';
import Button from '../../components/Button/';

import logoImg from '../../assets/logo.png';

import { 
        Container, 
        Title, 
        BackToSignIn, 
        BackToSignInText 
    } from './styles';

interface SignUpData {
    name:string;
    email:string;
    password:string;
}

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    const formRef = useRef<FormHandles>(null);

    const emailInputRef = useRef<TextInput>(null);

    const passwordInputRef = useRef<TextInput>(null);

    const handleSignUp = useCallback(
        async (data: SignUpData) => {
          try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
              name: Yup.string().required('Nome obrigatório'),
              email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido'),
              password: Yup.string().min(8, 'Senha com mínimo de 8 caracteres'),
            });
    
            await schema.validate(data, {
              abortEarly: false,
            });
    
            // await api.post('/users', data);
    
            // addToast({
            //   type: 'success',
            //   title: 'Cadastro realizado com sucesso!',
            //   description: 'Acesse área de logon, com seu usuário e senha.',
            // });
    
            // history.push('/');
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationError(err);
    
              formRef.current?.setErrors(errors);
              
              return;
            }

            Alert.alert(
                'Erro na cadastro',
                'Ocorreu um erro ao fazer o cadastro, tente novamente mais tarde',
                );
          }
        }, []);

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
                        <Form 
                            ref={formRef} 
                            onSubmit={handleSignUp}
                        >
                            <Input 
                                autoCapitalize="words" 
                                name="name"
                                icon="user" 
                                placeholder="Digite seu nome" 
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    emailInputRef.current?.focus();
                                }}
                            />

                            <Input 
                                ref={emailInputRef}
                                keyboardType="email-address" 
                                autoCorrect={false}
                                autoCapitalize="none"
                                name="email" 
                                icon="mail"
                                placeholder="Digite seu e-mail" 
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    passwordInputRef.current?.focus();
                                }}
                            />

                            <Input  
                                ref={passwordInputRef}
                                secureTextEntry
                                name="password" 
                                icon="lock" 
                                placeholder="Digite sua senha"
                                textContentType="newPassword"
                                returnKeyType="send"
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm();
                                }}
                            />
                        </Form>  
                        <Button onPress={() => formRef.current?.submitForm()}> 
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