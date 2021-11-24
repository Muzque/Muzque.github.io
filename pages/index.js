import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                align="center"
                mb={6}
            >
                Hello, I&apos;m a full-stack developer based in Taiwan!
            </Box>

            <Box display={{ md:"flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Xuan-Di Lin
                    </Heading>
                    <p>Backend engineer ( Fullstack Developer / Cloud infrastructure / Physics prediction system)</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0}}
                    ml={{ md: 6}}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/profile.jfif"
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading
                    as="h3"
                    variant="section-title"
                >
                    Work
                </Heading>
                <Paragraph>
                    Hello world{' '}
                    <NextLink href="/works/inkdrop">
                        <Link>Inkdrop</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    )
}

export default Page
