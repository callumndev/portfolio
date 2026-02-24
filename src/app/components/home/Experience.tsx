"use client";

import { Box, Button, Center, Flex, Grid, Group, Image, Pill, Text } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import scrollToElement from "../../utils/scrollToElement";
import React from "react";
import type { Experience } from "../../../../types/experience";
import { DurationText } from "../DurationText";


export function Experience({
    experience,
}: Readonly<{
    experience: Experience[];
}>) {
    return (
        <Box mt="10rem" id="experience">
            <Text size="xl" fw={700} ta="center">
                My experience
            </Text>

            <Center>
                <Grid mt="sm">
                    {experience
                        .sort((a, b) => b.order - a.order) // Sort by order, smallest last
                        .map(e => {
                            return (
                                <Grid.Col key={e.id} span={{ base: 12, md: 4 }}>
                                    <Box p="md" bdrs="sm" bg="gray.3" >
                                        <Flex gap="md" align="flex-start">
                                            <Image
                                                h={100}
                                                w={100}
                                                src={e.companyOrOrganization.image}
                                                alt="Company or organization image"
                                                radius="xs"
                                            />

                                            <Flex direction="column" gap={4} >
                                                <Text fw={700}>{e.title}</Text>

                                                <Text>{e.companyOrOrganization.name} · {e.employmentType}</Text>

                                                <Text c="dimmed">
                                                    {e.startDate.month.substring(0, 3)} {e.startDate.year} - {" "}
                                                    {e.currentlyWorking
                                                        ? "Present"
                                                        : `${e.endDate?.month.substring(0, 3) ?? ""} ${e.endDate?.year ?? ""}`}
                                                    {" "}·{" "}
                                                    <DurationText startDate={e.startDate} endDate={e.endDate} currentlyWorking={e.currentlyWorking} />
                                                </Text>

                                                <Text c="dimmed">{e.location} · {e.locationType}</Text>

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
                    onClick={() => scrollToElement("projects")}
                >
                    Projects
                </Button>
            </Flex>
        </Box>
    );
}
