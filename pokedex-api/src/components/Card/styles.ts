import styled, { css } from 'styled-components/native'

type PokemonType = {
    type: string
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
    ${({ theme, type }) => css`
        background: ${theme.colors.backgroundCard[type]};
        border-radius: 10px;
        margin-top: 30px;
        flex-direction: row;
        padding: 20px;        
    `}

`

export const LeftSide = styled.View`
    width: 50%;
    position: relative;

`
export const PokemonName = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 25px;
        line-height: 31px;
        margin-top: 5px;
        text-transform: captalize;
        color: ${theme.colors.text_white};
    `}

`

export const PokemonId = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.light_text};
    `}

`