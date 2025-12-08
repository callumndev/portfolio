"use client";

import { Box, Button, Text } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import scrollToElement from "../../utils/scrollToElement";

function PlaceText({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: 'red', to: 'blue', deg: 90 }}
            inherit
            span
        >
            {children}
        </Text>
    )
}

export function Hero() {
    return (
        <Box ta="center" mt="10rem">
            <Text fz={40} fw={700}>
                Hi, I&lsquo;m <Text span c="purple" inherit ta="center">Callum</Text>.
            </Text>
            <Text size="xl">
                A Fullstack Developer from <PlaceText>England</PlaceText>.
            </Text>
            <Button
                mt="sm"
                rightSection={<IconArrowDown size={14} />}
                onClick={() => scrollToElement("about")}
            >
                Learn about me
            </Button>
        </Box>
    );
}
