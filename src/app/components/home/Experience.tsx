"use client";

import { Box, Button, Text } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import scrollToElement from "../../utils/scrollToElement";

export function Experience() {
    return (
        <Box ta="center" mt="10rem" id="experience">
            <Text size="xl" fw={700}>
                My experience
            </Text>
            <Button
                mt="sm"
                rightSection={<IconArrowDown size={14} />}
                onClick={() => scrollToElement("projects")}
            >
                Projects
            </Button>
        </Box>
    );
}
