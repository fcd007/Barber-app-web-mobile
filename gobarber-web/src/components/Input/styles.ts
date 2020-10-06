import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: Boolean;
    isFilled: Boolean;
}

export const Container = styled.div<ContainerProps>`
    font-size: 16px;
    
    
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;

    color: #666360;
    background: #232129;
    border: 2px solid #232129;

    & + div {
            margin-top: 8px;
        }

    ${ props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${ props => props.isFilled && css`
        color: #ff9000;
    `}

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
            margin-right: 16px;
        }
`;
