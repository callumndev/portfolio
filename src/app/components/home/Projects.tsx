"use client";

import { Box, Button, Text } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import scrollToElement from "../../utils/scrollToElement";

export function Projects() {
    return (
        <Box ta="center" mt="10rem" id="projects">
            <Text size="xl" fw={700}>
                Projects
            </Text>

            <Button
                mt="sm"
                rightSection={<IconArrowDown size={14} />}
                onClick={() => scrollToElement("connect")}
            >
                Connect
            </Button>
        </Box>
    );
}
