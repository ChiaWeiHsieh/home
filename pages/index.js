import React from 'react'
import Main from '../components/layouts/Main'
import { Container, Box, Heading } from '@chakra-ui/react'

export default function Pages() {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" align="center" p={3} mb={6}>
                Hello, I'm a full-stack developer from Taiwan.
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">Hello, I am Weigo.</Heading>
                    <p>(Web developer | Stock trader | Value Invester)</p>
                </Box>
            </Box>
        </Container>
    )
}
