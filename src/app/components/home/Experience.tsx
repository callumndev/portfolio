"use client";

import { Box, Button, Center, Flex, Grid, Group, Image, Pill, Text } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import scrollToElement from "../../utils/scrollToElement";
import { DateType, type Experience } from "@/app/data/experience";
import React from "react";

const MONTHS: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
}

function toDateFromMonthYear(monthName: string, year: number): Date {
    const monthIndex = MONTHS[monthName.toLowerCase()];
    return new Date(year, monthIndex, 1);
}

function formatDuration(from: Date, to: Date = new Date()): string {
    let monthsDiff =
        (to.getFullYear() - from.getFullYear()) * 12 +
        (to.getMonth() - from.getMonth());

    if (monthsDiff < 0) monthsDiff = 0;

    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);

    // fallback if it's 0 months
    return parts.length ? parts.join(" ") : "0 mos";
}

type StartEnd = {
    startDate: DateType;
    endDate?: DateType | null;
    currentlyWorking: boolean;
}

function DurationText({ startDate, endDate, currentlyWorking }: StartEnd) {
    const start = toDateFromMonthYear(startDate.month, Number(startDate.year));

    const end = currentlyWorking || !endDate
        ? new Date()
        : toDateFromMonthYear(endDate.month, Number(endDate.year));

    const label = formatDuration(start, end); // e.g. "1 yr 3 mos"

    return <span>{label}</span>;
}


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
