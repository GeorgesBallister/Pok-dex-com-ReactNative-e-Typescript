import styled, { css } from 'styled-components/native'



/*Dentro desses const serão escritos CSS para a tela*/
export const Container = styled.View`
    ${({ theme }) => css`

    flex: 1;
    background-color: ${theme.colors.background};
    `}
`;

// Elementos do Content
export const Content = styled.View`
    
    height: 70%;
`;


// Elementos do Footer
export const Footer = styled.View`
    ${({ theme }) => css`

        justify-content: center;
        align-items: center;

        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        background-color: ${theme.colors.backgroundWater};
    `}
`;


export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 20px;
        color: ${theme.colors.texto_branco};

    `}

`;

export const SubTitle = styled.Text`
    ${({theme}) => css`

        margin-top: 20px;
        font-size: 14px;
        color: ${theme.colors.texto_branco};

    `}

`;