'use client'

import Link from 'next/link'
import { Instagram, Heart, Phone, Facebook, Twitter, type LucideIcon } from 'lucide-react'
import { SITE_CONFIG } from '@/config'

// Diccionario de Iconos
const iconMap: Record<string, LucideIcon> = {
    Instagram: Instagram,
    Phone: Phone,
    Facebook: Facebook,
    Twitter: Twitter,
};


export const Footer = () => {
    const currentYear = new Date().getFullYear()
    // Extraemos config global y de servicios para la columna dinámica
    const { footer, navBar } = SITE_CONFIG;

    const [firstLine, secondLine] = navBar.logo.textOrImage.split('\n')

    return (
        <footer className="bg-background-secondary border-t border-foreground/10 relative z-50 text-muted font-regular">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="grid grid-cols-1 md:flex md:justify-center gap-12 mb-4">

                    {/* --- COLUMNA 1: BRANDING --- */}
                    <div className="md:col-span-1 flex flex-col justify-center items-center space-y-4">
                        <Link
                            href={navBar.logo.href}
                            className="flex flex-col text-[30px] font-title font-extrabold tracking-tighter md:tracking-normal leading-[0.9] -skew-2 hover:opacity-80 transition-opacity"
                        >
                            {/* Primera línea (Color normal del tema) */}
                            <span className="text-foreground">
                                {firstLine}
                            </span>

                            {/* Segunda línea (Con Degradado) */}
                            {secondLine && (
                                <span className="bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
                                    {secondLine}
                                </span>
                            )}
                        </Link>

                        <p className="text-sm leading-relaxed max-w-xs text-center">
                            {footer.desc}
                        </p>

                        {/* Redes Sociales */}
                        <div className="flex gap-4 pt-2">
                            {footer.socialLinks.map((social, i) => {
                                const Icon = iconMap[social.icon] || Phone;
                                return (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-background ring-1 ring-foreground/10 flex items-center justify-center text-muted-foreground hover:ring-primary text-primary transition-all"
                                    >
                                        <Icon size={20} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* --- COPYRIGHT --- */}
                <div className="pt-4 border-t border-white/10 flex flex-col justify-center items-center gap-4 text-sm">
                    <p className='text-center'>
                        © {footer.copyright.replace('[AÑO]', currentYear.toString())}. Todos los derechos reservados.
                    </p>
                    {/* <p className="flex items-center gap-1">
                        Hecho con <Heart size={14} className="text-primary fill-primary" /> por
                        <Link href="https://tunegocioeninternet.es" className="hover:text-foreground transition-colors">
                            tunegocioeninternet.es
                        </Link>
                    </p> */}
                </div>
            </div>
        </footer>
    )
}