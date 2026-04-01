import * as Icons from "lucide-react";
import { SVGProps } from "react";

export const Footer = () => {
  return (
    <footer id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Let's Work Together.
        </h2>

        <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
          Saya selalu terbuka untuk diskusi Project baru maupun bersapa ria.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="mailto:muhammadsyahrullah26@gmail.com"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full font-semibold transition-all hover:bg-emerald-500 hover:text-white hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]"
          >
            <Icons.Mail className="w-5 h-5" />
            <span>Say Hello</span>
            <Icons.ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          {[
            {
              Icon: (props: SVGProps<SVGSVGElement>) => (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  {...props}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              ),
              href: "https://github.com/syahrullah26",
              label: "Github",
            },
            {
              Icon: (props: SVGProps<SVGSVGElement>) => (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  {...props}
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              ),
              href: "https://www.linkedin.com/in/muhammad-syahrullah-0317b729a/",
              label: "LinkedIn",
            },
            {
              Icon: (props: SVGProps<SVGSVGElement>) => (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  {...props}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              ),
              href: "https://instagram.com/muhammadsyahrullah26",
              label: "Instagram",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1"
              aria-label={social.label}
            >
              <social.Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-center items-center gap-4 text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} — Muhammad Syahrullah. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
