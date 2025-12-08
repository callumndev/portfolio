"use client";

import { Anchor, Box, Button, Center, Flex, Grid, Progress, Text } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import scrollToElement from "../../utils/scrollToElement";
import getYearsAgo from "@/app/utils/getYearsAgo";
import { GitHubLanguages } from "@/app/actions/getGitHubLanguages";

export function About({
    githubLanguages,
}: Readonly<{
    githubLanguages: GitHubLanguages;
}>) {
    const age = getYearsAgo(2004, 8);
    const programmingYears = getYearsAgo(2018, 10);

    return (
        <Box ta="center" mt="10rem" id="about">
            <Text size="xl" fw={700}>
                About me
            </Text>
            <Text maw={"50rem"} mx={"auto"} size="lg">
                I am {age} year old Fullstack Developer from Manchester, England.
                I started programming {programmingYears} years ago at 14 years old to create automated
                social media bots but quickly evolved into a self-taught exploration of much more.
            </Text>
            <Text c="dimmed" mt="sm">
                Here are the most used languages from my{" "}
                <Anchor href={process.env.NEXT_PUBLIC_GITHUB_PROFILE}
                    target="_blank"
                    underline="always"
                    c="dimmed">GitHub</Anchor>:
            </Text>
            <Center>
                <Grid mt="sm">
                    {Object.entries(githubLanguages)
                        .sort((a, b) => b[1] - a[1]) // Sort highest to lowest by percentage
                        .slice(0, 6) // Limit
                        .map(([name, percentage]) => {
                            return (
                                <Grid.Col key={name} span={{ base: 12, md: 4 }}>
                                    <Box p="md" bdrs="sm" bg="gray.3">
                                        <Flex justify="space-between" mb="xs">
                                            <Text c={"blue"}>{name}</Text>
                                            <Text>{percentage}%</Text>
                                        </Flex>
                                        <Progress color="blue" value={percentage} />
                                    </Box>
                                </Grid.Col>
                            )
                        })}
                </Grid>
            </Center>

            <Button
                mt="sm"
                rightSection={<IconArrowDown size={14} />}
                onClick={() => scrollToElement("experience")}
            >
                View my experience
            </Button>
        </Box>
    );
}
