import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import MainLayout from "./components/layouts/MainLayout";

import "@mantine/core/styles.css";
import "@gfazioli/mantine-text-animate/styles.css";

export const metadata: Metadata = {
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: "Made & designed by Callum N",
    authors: [{ name: "Callum N", url: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider>
                    <MainLayout>{children}</MainLayout>
                </MantineProvider>
            </body>
        </html>
    );
}