import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

export default NotFound = () => {
    return (
        <Container>
            <Heading as="h1">
                Not Found
            </Heading>
            <Text>找不到這個頁面</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">回到首頁</Button>
                </NextLink>
            </Box>
        </Container>
    )
}
