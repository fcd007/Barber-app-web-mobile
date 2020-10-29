import React, { useCallback, useRef } from 'react';

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

import api from '../../services/api';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import getValidationError from '../../utils/getValidationErros';

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

interface SignDataForm {
    email:string;
    password:string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);

    const navigation = useNavigation();

    const { signIn } = useAuth();

    const handleSignIn = useCallback(
        async (data: SignDataForm) => {
          try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
              email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido'),
              password: Yup.string().required('Senha obrigatória'),
            });
    
            await schema.validate(data, {
              abortEarly: false,
            });
    
            await signIn({
              email: data.email,
              password: data.password,
            });
    
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationError(err);
              formRef.current?.setErrors(errors);
              return;
            }
            
            Alert.alert(
                'Erro na autenticação',
                'Ocorreu um erro ao fazer login, tente novamente.',
                );
            }
        }, []);

    return (
        <>
            <KeyboardAvoidingView 
                style={{ flex: 1 }}
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
                        
                        <Form ref={formRef} onSubmit={handleSignIn}>
                            <Input 
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                name="email"
                                icon="mail" 
                                placeholder="E-mail" 
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    passwordInputRef.current?.focus();
                                }}
                            />
                            
                            <Input 
                                ref={passwordInputRef}
                                name="password" 
                                icon="lock" 
                                placeholder="Digite seu password" 
                                secureTextEntry
                                returnKeyType="send"
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm();
                                }}
                            />
                        </Form>
                        
                        <Button 
                            onPress={() => { 
                                formRef.current?.submitForm(); 
                            }}
                            > Entrar 
                        </Button>
                       
                        <ForgotPassword onPress={() => {}}>
                            <ForgotPasswordText>
                                Esqueci minha senha
                            </ForgotPasswordText>
                        </ForgotPassword>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreatAccountButton onPress={() => navigation.navigate('SignUp')} >
                <Icon name="log-in" size={ 20 } color="#ff9000" />
                <CreatAccountButtonText> Criar uma conta </CreatAccountButtonText>
            </CreatAccountButton>
        </>
    );
};

export default SignIn;