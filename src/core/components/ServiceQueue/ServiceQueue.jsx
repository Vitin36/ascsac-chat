import React, { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { Container, Title, Text, TimeInfo } from "./style"
import { Button } from "components/Button/Button"
import { useDispatch } from "react-redux"
import { actions } from "store/actions/serviceQueue.action"

export const ServiceQueue = () => {
    const { currentPosition, waitingTime } = useSelector(state => state.serviceQueue)
    const timer = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.searchCurrentPosition())
        timer.current = setInterval(() => {
            dispatch(actions.searchCurrentPosition())
        }, 5000)
    }, [])

    useEffect(() => {
        return () => {
            clearInterval(timer.current);
        };
    }, []);

    return (
        <Container>
            <Title>Fila de atendimento</Title>
            <Text>Olá aguarde um instante!</Text>
            <Text>Você é <span>{currentPosition}º</span> na fila de atendimento</Text>
            <TimeInfo>Tempo médio de espera: <span>{waitingTime}</span></TimeInfo>
            <Button curved spaced onClick={() => { dispatch(actions.searchCurrentPosition()) }}>Abandonar</Button>
        </Container>)
}