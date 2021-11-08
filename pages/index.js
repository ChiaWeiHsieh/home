import React from 'react'
import Main from '../components/layouts/Main'
import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, Button } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

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
                <Paragraph>瑋哥是一位有熱誠的前端學習者，擅長撰寫及規劃前端文件，並成功寫出許多網頁案例。
                    <NextLink href="/works/inkdrop">
                        <Link>Inkdrop</Link>
                    </NextLink>
                </Paragraph>

                ，

                <Box textAlign="center" my={4}>
                    <NextLink href="/works/">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal">
                            我的個人檔案</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1992</BioYear>
                    Born in Taichung Taiwan.(台灣台中市)
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    完成了資訊學業。
                </BioSection>
            </Section>
            <Section>
                <Heading as="h3" variant="section-title">
                    I love
                </Heading>
                <Paragraph>
                    Music, {''}
                    <Link href="">Drawing</Link>
                </Paragraph>
            </Section>
        </Container>
    )
}
