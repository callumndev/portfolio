import { Anchor, AppShell, Divider, NavLink, ScrollArea, Text } from "@mantine/core";
import { TextAnimate } from "@gfazioli/mantine-text-animate";
import { TypeAnimation } from "react-type-animation";
import { SocialButtons } from "./SocialButtons";
import scrollToElement from "../utils/scrollToElement";

export function Navbar({
    close,
}: Readonly<{
    close: () => void;
}>) {
    const onNavLinkClick = (id: string) => {
        close();
        scrollToElement(id);
    }

    return (
        <>
            <AppShell.Section px="md" pt="md">
                <TextAnimate animate="in" animation="slideRight" by="text">
                    {process.env.NEXT_PUBLIC_SITE_NAME}
                </TextAnimate>

                <Text size="sm" c={"dimmed"}>
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            "FullStack Developer",
                            2000,
                            "Computer Science Student",
                            2000,
                            "Based in Manchester, England",
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </Text>

            </AppShell.Section>


            <Divider pt="md" mt="md" />
            <AppShell.Section grow component={ScrollArea} my="md" px="md">
                {/* About */}
                <NavLink
                    component="button"
                    onClick={() => onNavLinkClick("about")}
                    label="about"
                />

                {/* Experience */}
                <NavLink
                    component="button"
                    onClick={() => onNavLinkClick("experience")}
                    label="experience"
                />

                {/* Projects */}
                <NavLink
                    component="button"
                    onClick={() => onNavLinkClick("projects")}
                    label="projects"
                />

                {/* Connect */}
                <NavLink
                    component="button"
                    onClick={() => onNavLinkClick("connect")}
                    label="connect"
                />
            </AppShell.Section>
            <AppShell.Section p="md">
                <SocialButtons />
                <Text ta="center" c="dimmed" size="sm">
                    This site was made & designed by Callum N, and is{" "}
                    <Anchor
                        href={process.env.NEXT_PUBLIC_REPO_LINK}
                        target="_blank"
                        underline="always"
                        c="dimmed"
                    >
                        open source
                    </Anchor>.
                </Text>
                <Text ta="center" c="dimmed" size="sm">
                    &copy; {new Date().getFullYear()} Callum N. All rights reserved.
                </Text>
            </AppShell.Section>
        </>
    );
}
