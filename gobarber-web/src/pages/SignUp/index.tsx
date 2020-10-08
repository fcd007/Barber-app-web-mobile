import React, { useCallback, useRef } from 'react';
import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationError from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  console.log(formRef);

  const  handleSubmit = useCallback(async (data: object) => {
    try {
        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .min(8, 'Senha com mínimo de 8 caracteres'),

          });

          await schema.validate(data, {
            abortEarly: false,
          });
    } catch (err) {

      const errors= getValidationError(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
      <Container>
      <Background />
      <Content>
        <img src={ logoImg } alt="GoBarber Web"/>
        
        <Form ref= { formRef } onSubmit={ handleSubmit }>
          <h1>Faça seu cadastro</h1>
          
          <Input name="name" icon={ FiUser } placeholder= "Nome" />
          <Input name="email" icon={ FiMail } placeholder= "E-mail" />

          
          <Input name="password" icon={ FiLock } type="password" placeholder="Senha" />
          
          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="#">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
}

export default SignUp;
