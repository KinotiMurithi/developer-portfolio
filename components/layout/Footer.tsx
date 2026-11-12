
"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ratzonsoftwares",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1BNAqnUWcZ/",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/collins-kinoti-129731423/",
  },
  {
    name: "GitHub",
    href: "https://github.com/KinotiMurithi",
  },
  {
    name: "X",
    href: "https://x.com/Ratzon145762",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ratzon_ladonai",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-600 dark:border-white/10 dark:bg-[#090909] dark:text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">

        {/* Footer content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact
            </h3>

            <a
              href="mailto:ratzonditalproducts@gmail.com"
              className="flex items-center gap-3 text-sm transition-colors hover:text-purple-600"
            >
              <Mail size={17} />
              <span>ratzondigitalproducts@gmail.com</span>
            </a>

            <a
              href="tel:+254769655170"
              className="flex items-center gap-3 text-sm transition-colors hover:text-purple-600"
            >
              <Phone size={17} />
              <span>+254 769 655 170</span>
            </a>

            <div className="flex items-center gap-3 text-sm">
              <MapPin size={17} />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4 md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Follow Us
            </h3>

            <nav
              aria-label="Social media links"
              className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-purple-600"
                >
                  {social.name}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center dark:border-white/10">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Ratzon
            </span>{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Digital Products
            </span>
            . All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
