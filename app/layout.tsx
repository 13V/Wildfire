import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Wildfire ($WILDFIRE)",
    description: "The burn that builds. Automatic buyback and burn protocol.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen">
                {children}
            </body>
        </html>
    );
}
