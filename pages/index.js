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
import { BioSection, BioYear } from '../components/bio'

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

            <Section delay={0.2}>
                <Heading
                    as="h3"
                    variant="section-title"
                >
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1989</BioYear>
                    Born in Taiwan.
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Completed the Master&apos;s Program in NSYSU.
                </BioSection>
                <BioSection>
                    <BioYear>2016/09 - 2017/12</BioYear>
                    Worked as a Research Assistant in NSYSU.
                </BioSection>
                <BioSection>
                    <BioYear>2018/04 - 2018/09</BioYear>
                    Worked as a Software Engineer in Q.S.F Network Information Ltd.
                </BioSection>
                <BioSection>
                    <BioYear>2018/12 - 2020/09</BioYear>
                    Worked as a Cloud Software Engineer in Gemini Open Cloud Computing Inc.
                </BioSection>
                <BioSection>
                    <BioYear>2020/09 - present</BioYear>
                    Worked as a Software Engineer in Wipro Limited (TVC in Google).
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Interests
                </Heading>
                <Paragraph>
                    Table Tennis, Basketball, Video Games, Escape Room, Sketching, Crypto Currency
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
