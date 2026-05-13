import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[rgba(6,7,14,0.7)] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-12">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="ONNE LAB"
              width={140}
              height={44}
              className="h-10 w-auto object-contain mb-3"
            />
            <p className="text-slate-400 text-sm">{siteConfig.tagline}</p>
            <p className="text-slate-500 text-sm mt-1">📍 {siteConfig.location}</p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Links</p>
              <ul className="space-y-2">
                {[
                  { label: "LinkedIn", href: siteConfig.linkedin },
                  { label: "GitHub", href: siteConfig.github },
                  { label: "Portfólio", href: siteConfig.portfolio },
                ].map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Contato</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 break-all"
                  >
                    {siteConfig.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {siteConfig.phone}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© {year} ONNE LAB. Todos os direitos reservados.</p>
          <p className="text-xs text-slate-600">Feito com Next.js + Tailwind CSS + Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
