import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    border-radius: 10px;

    background: #232129;
    margin-bottom: 8px;

    border-width: 2px;
    border-color: #233129;

    flex-direction: row;
    align-items: center;

    ${(props) => 
        props.isErrored && 
        css`
            border-color: #c53030;
    `}

    ${(props) => 
        props.isFocused && 
        css`
            border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-family: 'RobotoSlab-Regular';
    color: #f4ede8;
    font-size: 20px;
`;

export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
`;