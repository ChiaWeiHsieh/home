import { Container, Heading } from '@chakra-ui/react'
import Section from '../components/Section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/inkdrop_01.png'
import { SimpleGrid } from '@chakra-ui/react'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>Works</Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="inkdrop"
                        title="Inkdrop"
                        thumbnail={thumbInkdrop}
                    >
                        A-Mark-down-App
                    </WorkGridItem>
                    <WorkGridItem
                        id="inkdrop"
                        title="Inkdrop"
                        thumbnail={thumbInkdrop}
                    >
                        A-Mark-down-App
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works