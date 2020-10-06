import React from 'react';
import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {

  function handleSubmit(data:object): void {
    console.log(data);
  } 

  return (
      <Container>
      <Background />
      <Content>
        <img src={ logoImg } alt="GoBarber Web"/>
        <Form onSubmit={ handleSubmit }>
          <h1>Faça seu cadastro</h1>
          
          <Input name="name" icon={ FiUser } placeholder= "Nome" />
          <Input name="email" icon={ FiMail } placeholder= "E-mail" />

          
          <Input name="password" icon={ FiLock } type="password" placeholder="Senha" />
          
          <Button type="submit">Cadastrar</Button>

        </Form>onSubmit={ }

        <a href="#">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
}

export default SignUp;