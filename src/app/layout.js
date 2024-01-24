import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { navLinks } from "@/db";
import NavLink from "@/components/Link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JacksonW Photography",
  description:
    "JacksonW is a photography and cinematography firm that excel in producing quality photos and videos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navbar section */}
        <div className=" bg-white shadow ">
          <div className="container navbar w-full md:flex justify-between items-center ">
            <div className="links">
              {navLinks.map((link, i) => (
                <NavLink key={i} route={link.route} title={link.title} />
              ))}
            </div>
            <div className="action-buttons py-2 md:py-2">
              <Link
                href="/events/ultimate-photo-challenge"
                className="inline-block bg-gradient-to-tr from-secondary-600 to-primary-800 text-secondary-50 p-3 px-5 rounded-md"
              >
                Nominate Now
              </Link>
            </div>
          </div>
        </div>
        {/* navbar END */}

        {/* PAGE CONTENTS */}
        {children}
        {/* END: PAGE CONTENTS */}

        {/* FOOTER SECTION */}
        <footer className="bg-slate-900 py-8 text-slate-400 font-light">
          <div className="container text-center">
            <p>
              Copyright &copy; Jackson-W Studio, 2024 - All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
