import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from './Squirtle-Tela-Inicial.json'

import * as S from './styles'
import { Button } from "../../components/Button";




// Tela Inicial com o GIF do Squirtle
export function Welcome() {
    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <S.WrapperImage>
                    <AnimatedLottieView style={{ width: 200 }} autoPlay source={pokemonAnimation} loop />
                </S.WrapperImage>
            </S.WrapperAnimation>



            <S.Title>Bem-Vindo</S.Title>
            <S.SubTitle>Olá, eu sou sua Pokedex e estou aqui para te auxiliar na sua jornada!</S.SubTitle>

        </S.Content>
        <S.Footer>
        <Button title='Iniciar Pokedex' />
        </S.Footer>
    </S.Container>
}