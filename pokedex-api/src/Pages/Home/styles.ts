import styled, { css } from 'styled-components/native'



/*Dentro desses const serão escritos CSS para a tela*/
export const Container = styled.View`
    ${({ theme }) => css`

    flex: 1;
    background-color: ${theme.colors.background};

    `}
`;
