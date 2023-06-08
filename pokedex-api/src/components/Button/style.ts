import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    ${({theme}) => css`
        width: 100%;
        height: 50px;
        background-color: ${theme.colors.types.water};
        justify-content: center;
        align-items: center;
        border-radius: 30px;
    `}

`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 14px;
        color: ${theme.colors.texto_branco};
    
    `}

`;