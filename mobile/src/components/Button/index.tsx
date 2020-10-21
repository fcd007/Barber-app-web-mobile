import React from 'react';
import { BaseButtonProperties } from 'react-native-gesture-handler';
import { Container, Buttontext }  from './styles';


interface ButtonProps extends BaseButtonProperties{
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container {...rest}>
        <Buttontext>
            { children }
        </Buttontext>
    </Container>
);
export default Button;