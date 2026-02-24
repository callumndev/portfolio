"use client";

import { Box, Button, Center, Flex, Grid, Group, Image, Pill, Text } from "@mantine/core";
import { IconArrowDown, IconLink } from "@tabler/icons-react";
import scrollToElement from "../../utils/scrollToElement";
import { type Project } from "@/app/data/projects";
import React from "react";
import { DurationText } from "../DurationText";


export function Projects({
    projects,
}: Readonly<{
    projects: Project[];
}>) {
    return (
        <Box mt="10rem" id="projects">
            <Text size="xl" fw={700} ta="center">
                Projects
            </Text>

            <Center>
                <Grid mt="sm">
                    {projects
                        .sort((a, b) => b.order - a.order) // Sort by order, smallest last
                        .map(e => {
                            return (
                                <Grid.Col key={e.id} span={{ base: 12, md: 4 }}>
                                    <Box p="md" bdrs="sm" bg="gray.3" >
                                        <Flex gap="md" align="flex-start">
                                            {e.image && (
                                                <Image
                                                    h={100}
                                                    w={100}
                                                    src={e.image}
                                                    alt="Project image"
                                                    radius="xs"
                                                />
                                            )}

                                            <Flex direction="column" gap={4} >
                                                <Text fw={700}>{e.title}</Text>

                                                {e.link && (
                                                    <Button component="a" href={e.link} leftSection={<IconLink size={14} />} variant="transparent" justify="left" pl={0} h="md">
                                                        {new URL(e.link).hostname.replace("www.", "") + new URL(e.link).pathname.replace(/\/$/, "")}
                                                    </Button>
                                                )}

                                                <Text c="dimmed">
                                                    {e.startDate.month.substring(0, 3)} {e.startDate.year} - {" "}
                                                    {e.currentlyInProgress
                                                        ? "Present"
                                                        : `${e.endDate?.month.substring(0, 3) ?? ""} ${e.endDate?.year ?? ""}`}
                                                    {" "}·{" "}
                                                    <DurationText startDate={e.startDate} endDate={e.endDate} currentlyWorking={e.currentlyInProgress} />
                                                </Text>

                                                {/* <Text c="dimmed">{e.title} · {e.title}</Text> */}

                                                {e.description && (
                                                    <Text mt="xs">{e.description}</Text>
                                                )}

                                                {e.skills?.length && (
                                                    <Group gap="5" mt="xs">
                                                        {e.skills.map((skill, i) => (
                                                            <React.Fragment key={i}>
                                                                <Pill size="sm">{skill}</Pill>
                                                            </React.Fragment>
                                                        ))}
                                                    </Group>
                                                )}
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </Grid.Col>
                            )
                        })}
                </Grid>
            </Center>

            <Flex justify="center">
                <Button
                    mt="sm"
                    rightSection={<IconArrowDown size={14} />}
                    onClick={() => scrollToElement("connect")}
                >
                    Connect
                </Button>
            </Flex>
        </Box>
    );
}
