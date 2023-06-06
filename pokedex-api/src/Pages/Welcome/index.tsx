import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from './Squirtle-Tela-Inicial.json'

import * as S from './styles'




// Tela Inicial com o GIF do Squirtle
export function Welcome(){
    return <S.Container>
        <S.Content>
            
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />


        </S.Content>
        <S.Footer>
            <S.Title>Bem-Vindo</S.Title>
            <S.SubTitle>Olá, eu sou sua Pokedex e estou aqui para te auxiliar na sua jornada!</S.SubTitle>
        </S.Footer>
    </S.Container>
}