import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "kredcool.github.io",
  description: "Personal website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
