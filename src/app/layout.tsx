import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

/*const afacad = Afacad_Flux({
    variable: "--font-afacad",
    subsets: ["latin"],
});*/


export const metadata: Metadata = {
    title: "YC Directory",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body className={`${jost.className} text-[16px]`}>
                {children}
            </body>
        </html>
    );
}
