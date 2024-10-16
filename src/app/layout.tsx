import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
})

export const metadata: Metadata = {
  title: "SaveMate",
  description: "SaveMate is your ultimate personal finance app designed to help you take control of your financial journey. With intuitive budgeting tools, insightful analytics, and seamless tracking of your spending, SaveMate empowers you to achieve your financial goals effortlessly. Join our community of over 10 million budgeters and start your path to financial freedom today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
