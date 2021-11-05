import Logo from './logo'
import NextLink from 'next/link'
import { useColorModeValue } from '@chakra-ui/color-mode'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    MenuItem,
    MenuList,
    Menu, MenuButton, IconButton
} from '@chakra-ui/react'
import { HumburgerIcon } from '@chakra-ui/icons'


const LinkItem = ({ href, path, children }) => {
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : incativeColor
                }>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#fffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            z-index={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                wrap="wrap"
                maxW="container.md"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>

            </Container>
        </Box>

    )
}

export default Navbar