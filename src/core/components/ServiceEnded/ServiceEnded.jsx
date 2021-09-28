import React, { useEffect, useRef } from "react"
import { Container, Row, Title, Text } from "./style"
import { Button } from "components/Button/Button"

export const ServiceEnded = () => {
    return (
        <Container>
            <Title>Atendimento encerrado</Title>
            <Text>Seu atendimento foi encerrado por inatividade!</Text>
            <Row>
                <Button curved spaced>Encerrar</Button>
                <Button curved spaced>Reconectar</Button>
            </Row>
        </Container>
    )
}