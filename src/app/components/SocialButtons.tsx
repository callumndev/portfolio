import { ActionIcon, Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export function SocialButtons() {
    return (
        <Group justify="center">
            {/* LinkedIn */}
            <ActionIcon
                component="a"
                href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE}
                target="_blank"
                variant="transparent"
                color="#0077B5"
                size="xl"
                aria-label="LinkedIn"
            >
                <IconBrandLinkedin style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>

            {/* GitHub */}
            <ActionIcon
                component="a"
                href={process.env.NEXT_PUBLIC_GITHUB_PROFILE}
                target="_blank"
                variant="transparent"
                color="#151b23"
                size="xl"
                aria-label="GitHub"
            >
                <IconBrandGithub style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
        </Group>
    );
}
