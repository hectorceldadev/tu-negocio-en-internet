'use client'

import { Check, Globe, ShieldCheck, Smartphone, Zap, X } from 'lucide-react'; // Añadí 'X' para las aspas rojas
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: <Smartphone className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Diseño "Mobile First"',
    description: 'El 90% de tus clientes te ven desde el móvil. Tu web se verá perfecta en iPhone y Android.',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'SEO Local',
    description: 'Optimizada para que cuando busquen "Peluquería en [Tu Ciudad]", salgas tú y no tu competencia.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Velocidad Extrema',
    description: 'Nada de esperas. Tu web cargará al instante. Google ama las webs rápidas y tus clientes también.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Mantenimiento Incluido',
    description: 'Olvídate de virus o caídas. Yo vigilo que todo funcione 24/7.',
  },
  {
    icon: <Check className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Dominio y Hosting',
    description: 'Te ahorras pagar servidores y renovaciones de dominios anuales. Todo entra en la cuota.',
  },
];

const Servicios = () => {

  const containerRef = useRef(null)

  const pathname = usePathname()

  useGSAP(() => {

    gsap.from('.animate-header', {
      y: 40,
      duration: 0.4,
      stagger: 0.2,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.animate-features', {
      y: 40,
      duration: 1,
      stagger: 0.2,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.animate-features',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.animate-comparativa', {
      y: 40,
      duration: 0.4,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.animate-comparativa',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.animate-cta', {
      y: 40,
      duration: 0.4,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.animate-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

  }, { scope: containerRef })

  return (
    <section 
    ref={containerRef}
    className={`${pathname === '/servicio' ? 'pt-30 pb-16' : 'py-16'} relative overflow-hidden font-regular`} id="servicios">  
      <div className="container mx-auto px-4">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl text-foreground font-title font-bold mb-6 tracking-tight leading-tight animate-header">
            ¿Que <span className="text-primary">Ofrecemos?</span>
          </h2>
          <p className="text-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-header">
            Te ofrecemos un servicio completo para que tu negocio crezca y puedas centrarte en lo verdaderamente importa.
          </p>
        </div>

        {/* Grid de Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-background-secondary hover:bg-primary/20 p-8 rounded-2xl border border-foreground/20 transition-colors duration-300 group-hover:scale-102  hover:border-primary/20 animate-features"
            >
              <div className="mb-6 bg-foreground/10 ring ring-foreground/20 group-hover:text-foreground/20 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground  font-title uppercase mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* COMPARATIVA */}
        <div className="relative max-w-5xl mx-auto mb-24">
          {/* Fondo difuminado detrás de la comparativa */}
          
          <div className="bg-background-secondary ring ring-foreground/20 rounded-3xl p-8 md:p-12 shadow-2xl animate-comparativa">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-title text-foreground font-bold mb-4">¿Por qué este modelo?</h3>
              <p className="text-muted text-md">La diferencia entre gastar dinero e invertirlo inteligentemente.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              
              {/* Columna: Agencia Tradicional (Estilo "Desactivado") */}
              <div className="space-y-6 transition-all ring ring-foreground/20 p-8 rounded-2xl bg-foreground/20 duration-500">
                <h4 className="text-xl font-bold text-background mb-6 text-center uppercase border-b border-border pb-4 font-title">Agencia Tradicional</h4>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-muted-foreground">
                    <div className="bg-red-100 dark:bg-red-900/20 p-1 rounded-full mt-0.5">
                       <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className='text-muted'>Pago inicial de <span className="font-semibold text-red-500 line-through decoration-red-500/50">1.500€</span></span>
                  </li>
                  <li className="flex items-start gap-4 text-muted-foreground">
                    <div className="bg-red-100 dark:bg-red-900/20 p-1 rounded-full mt-0.5">
                       <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className='text-muted'>Si la web se cae, pagas extra</span>
                  </li>
                  <li className="flex items-start gap-4 text-muted-foreground">
                    <div className="bg-red-100 dark:bg-red-900/20 p-1 rounded-full mt-0.5">
                       <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className='text-muted'>Tecnología lenta y pesada (Wordpress)</span>
                  </li>
                </ul>
              </div>

              {/* Columna: TU OFERTA (Estilo "Premium") */}
              <div className="relative bg-background rounded-2xl p-8 border-2 border-primary/20 shadow-xl shadow-primary/10 transform md:scale-105">
                {/* Etiqueta flotante */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-primary to-purple-600 text-white text-center text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  La opción inteligente
                </div>
                
                <h4 className="text-xl font-bold text-primary mb-6 text-center uppercase font-title border-b border-primary/20 pb-4">Modelo Suscripción</h4>
                <ul className="space-y-5">
                  {[
                    "Sin inversión inicial (0€ Diseño)",
                    "Garantía de funcionamiento 100%",
                    "Tecnología Ultra-Rápida (Next.js)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 font-medium">
                      <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5 shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className='text-foreground'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL DE PRECIO */}
        <div className="text-center bg-background-secondary relative overflow-hidden rounded-3xl max-w-4xl mx-auto border border-primary/30 p-10 md:p-10 animate-cta">
            
            {/* Fondo Degradado CTA */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-primary/5 -z-10" />

            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground font-title">Plan Todo Incluido</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
                <div className="flex flex-col items-center">
                    <span className="text-muted-foreground text-xl line-through decoration-red-500/50 text-red-500 decoration-2">1.500€</span>
                    <span className="text-sm font-medium uppercase tracking-wider text-red-500">Diseño</span>
                </div>
                
                <div className="hidden md:block h-12 w-px bg-border/50 rotate-12"></div>
                
                <div className="flex flex-col items-center transform scale-110">
                    <span className="text-6xl md:text-7xl font-extrabold text-green-500 tracking-tighter drop-shadow-sm">0€</span>
                    <span className="text-sm text-green-600 font-bold uppercase tracking-wider bg-green-600/10 px-2 py-0.5 rounded-full mt-1">Instalación Gratis</span>
                </div>

                <div className="hidden md:block h-12 w-px bg-border/50 rotate-12"></div>

                 <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-primary">50€</span>
                    <span className="text-sm text-primary font-medium uppercase tracking-wider">/ mes</span>
                </div>
            </div>

            <p className="text-lg text-foreground mb-10 max-w-lg mx-auto">
                Sin permanencia. Sin letra pequeña. Todo incluido.
            </p>
            
            <Link 
                href="/contacto" 
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-green-600 px-10 font-medium text-primary-foreground shadow-lg shadow-green-600/25 transition-all duration-300 hover:bg-green-600/90 hover:scale-105 active:scale-95"
            >
               <span className="mr-2 text-lg text-foreground font-semibold uppercase">Empezar ahora</span>
               <div className="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-shimmer" />
            </Link>
        </div>

      </div>
    </section>
  );
};

export default Servicios;