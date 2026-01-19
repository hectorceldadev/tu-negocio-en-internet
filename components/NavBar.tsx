'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// 1. Importamos el tipo 'LucideIcon' para que TypeScript sea feliz
import { ChevronDown, Menu, X, CalendarDays, ArrowUpRight, Scissors, User, Zap, Star, type LucideIcon } from 'lucide-react'
import { SITE_CONFIG } from '@/config'

// 2. Definimos que este objeto tiene claves string y valores LucideIcon
const iconMap: Record<string, LucideIcon> = {
  Scissors: Scissors,
  User: User,
  Zap: Zap,
  Star: Star,
  // Añade aquí más si los necesitas en el futuro
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { navBar } = SITE_CONFIG;

  const [firstLine, secondLine] = navBar.logo.textOrImage.split('\n')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // Bloquear scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [isOpen]);

  return (
    <div className="relative z-100">

      {/* --- NAVBAR FLOTANTE --- */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[95%] max-w-7xl 
                      bg-background/10 backdrop-blur-xl border border-foreground/10 
                      rounded-full shadow-2xl transition-all duration-300 z-100 py-2">

        <div className="px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">

            {/* LOGO */}
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

            {/* NAVEGACIÓN DESKTOP */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 font-regular">
              {navBar.navegacion.map((item, index) => {

                // Enlaces Normales
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`text-md font-bold text-foreground hover:text-primary transition-colors duration-150 tracking-wide px-2 py-1 ${pathname === item.href ? 'text-primary': ''}`}
                  >
                    {item.text}
                  </Link>
                )
              })}
            </div>

            {/* CTA & BURGER */}
            <div className="flex items-center gap-4">
              <Link
                href={navBar.cta.href}
                target="_blank"
                className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full ring ring-white/10 text-md font-bold transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] active:scale-95 uppercase tracking-wider"
              >
                {navBar.cta.text}
              </Link>

              <button
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors relative z-60"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- MENU MÓVIL (OVERLAY) --- */}
      <div
        className={`
          fixed inset-0 font-regular bg-background z-40 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10 overflow-y-auto">

          <div className="space-y-8 flex-1">
            {navBar.navegacion.map((item, index) => {
              return (
                <div key={index} className="border-b border-white/5 pb-2">
                  <Link
                    href={item.href}
                    className="block text-4xl font-black text-foreground hover:text-primary transition-colors tracking-tight"
                  >
                    {item.text}
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="mt-auto pt-6">
            <Link
              href={navBar.cta.href}
              target="_blank"
              className="flex items-center justify-center gap-3 w-full bg-primary text-white py-5 rounded-3xl font-bold text-xl shadow-2xl shadow-primary/20 active:scale-95 transition-transform"
            >
              <CalendarDays className="w-6 h-6" />
              {navBar.cta.text}
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}