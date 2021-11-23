import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} align="center" mb={6}>
                Hello, I&apos;m a full-stack developer based in Taiwan!
            </Box>

            <Box display={{md:"flex"}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Xuan-Di Lin
                    </Heading>
                    <p>Backend engineer ( Fullstack Developer / Cloud infrastructure / Physics prediction system)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
