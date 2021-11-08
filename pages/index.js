import React from 'react'
import Main from '../components/layouts/Main'
import { Container, Box, Heading, Image } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'

export default function Pages() {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                textAlign="center"
                p={3}
                mb={6}>
                Hello, I'm a full-stack developer from Taiwan.
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box textAlign="center" flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Hello, I am Weigo.
                    </Heading>
                    <p>(Web developer | Stock trader | Value Invester)</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/Weigo.png"
                        alt="profile image"
                    />
                </Box>
            </Box>

            <Section deplay={0.1}>
                <Heading as="h3"
                    variant="section-title">
                    Work
                </Heading>
                <p>Paragraph</p>
            </Section>
        </Container>
    )
}
