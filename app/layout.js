import { Geist, Geist_Mono, Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeProvider } from "next-themes";

const wixDisplay = Wix_Madefor_Display({
  variable: "--font-wix-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choisis les poids dont tu as besoin
});


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Zoenirina - Portfolio",
  description: "My name is ZOENIRINA Marie Viviane. Welcome to my portfolio !",
};

export default function RootLayout({ children }) {
  return (
     <html lang="fr" suppressHydrationWarning>
      <body  className={`   
    ${wixDisplay.variable} 
    antialiased
  `}>
    {/*  ${geistSans.variable} 
    ${geistMono.variable}  */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
