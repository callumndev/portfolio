"use client";

import { Box, Button, Center, Flex, Grid, Image, Text } from "@mantine/core";
import { IconLink, IconMail } from "@tabler/icons-react";
import { type Connect } from "@/app/data/connect";


export function Connect({
    connect,
}: Readonly<{
    connect: Connect[];
}>) {
    return (
        <Box mt="10rem" id="connect">
            <Text size="xl" fw={700} ta="center">
                Connect with me
            </Text>

            <Center>
                <Grid mt="sm">
                    {connect
                        .sort((a, b) => b.order - a.order) // Sort by order, smallest last
                        .map(e => {
                            return (
                                <Grid.Col key={e.id} span={{ base: 12, md: 4 }}>
                                    <Box p="md" bdrs="sm" bg="gray.3">
                                        <Flex gap="md" align="flex-start">
                                            {e.image == "email" ? (
                                                <IconMail size={50} />
                                            ) : (
                                                e.image && (
                                                    <Image
                                                        h={50}
                                                        w={50}
                                                        src={e.image}
                                                        alt="Project image"
                                                        radius="xs"
                                                    />
                                                )
                                            )}

                                            <Flex direction="column" gap={4} >
                                                <Text fw={700}>{e.title}</Text>

                                                {e.link && (
                                                    <Button component="a" href={e.link} leftSection={<IconLink size={14} />} variant="transparent" justify="left" pl={0} h="md">
                                                        {new URL(e.link).hostname.replace("www.", "") + new URL(e.link).pathname.replace(/\/$/, "")}
                                                    </Button>
                                                )}
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </Grid.Col>
                            )
                        })}
                </Grid>
            </Center>
        </Box>
    );
}
