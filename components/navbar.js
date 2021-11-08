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
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const incativeColor = useColorModeValue('gray200', 'white')
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
                TextAlign="center"
                wrap="wrap"
                justify="space-between"
            >
                <Flex TextAlign="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                </Stack>
                <Box flex={1} textAlign="right">
                    <ThemeToggleButton />
                    <Box ml={2}
                        display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options" />
                            <MenuList>
                                <NextLink href="/about" passHref>
                                    <MenuItem as={Link}>關於我</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>我的工作</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>文章</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box >

    )
}

export default Navbar