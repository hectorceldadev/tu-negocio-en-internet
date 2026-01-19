'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const steps = [
    {
        number: '01',
        title: 'Contactas con nosotros',
        description: 'Nos escribes por WhatsApp o agendamos una llamada rápida. Sin compromiso.',
    },
    {
        number: '02',
        title: 'Reunión de 10 min',
        description: 'Te enseño la maqueta que he diseñado exclusivamente para tu peluquería. Ves cómo queda antes de pagar nada.',
    },
    {
        number: '03',
        title: 'Tu web lista',
        description: 'Si te gusta, activamos la suscripción y en menos de 5 días tu negocio está funcionando online.',
    },
];

gsap.registerPlugin(ScrollTrigger)

const Timeline = () => {

    const containerRef = useRef(null)
    const marqueeRef = useRef(null)

    useGSAP(() => {

        const marquee = marqueeRef.current
        
        if (marquee) {
            const marqueeWidth = marquee?.scrollWidth
            gsap.to(".marquee-content", {
                x: -marqueeWidth / 2,
                duration: 20,
                ease: "none",
                repeat: -1,
            })
        } 

        gsap.from('.animate-timeline', {
            y: 40,
            ease: 'power2.out',
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

    }, { scope: containerRef })

    return (
        <section
            ref={containerRef} 
            className="pb-18 pt-34 relative overflow-hidden">
                <div className="absolute top-4 left-0 w-full bg-background-secondary border-y border-foreground/20 py-3 overflow-hidden rotate-1 sm:-rotate-1 z-0 backdrop-blur-sm">
                <div ref={marqueeRef} className="flex whitespace-nowrap marquee-content">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className={`mx-4 text-sm font-bold tracking-[0.3em] text-primary uppercase `}>
                            • 50€ • Web • Hosting • Online • GROW • 
                        </span>
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-[42px] md:text-5xl text-foreground font-title font-bold mb-4 tracking-tight leading-tight animate-timeline">
                        ¿Cómo <span className='text-primary'>trabajamos?</span>
                    </h2>
                    <p className="text-muted text-lg max-w-lg mx-auto animate-timeline">
                        Un proceso simple. Sin complicaciones técnicas para ti.
                    </p>
                </div>
                <div className="relative pb-10 animate-timeline">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/60 to-transparent -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/60 to-transparent -translate-x-1/2 md:hidden" />
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`
                  relative flex 
                  items-start md:items-center 
                  md:justify-between 
                  animate-timeline
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}
                            >
                                <div className="absolute left-0 top-0 md:top-auto md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(37,99,235,0.3)] z-10">
                                    <span className="text-xs font-bold text-foreground">
                                        {step.number}
                                    </span>
                                </div>
                                <div className={`
                  w-full md:w-[45%] 
                  pl-16 md:pl-0 
                  ${index % 2 === 0 ? 'md:text-right md:pr-0' : 'md:text-left md:pl-0'}
                `}>
                                    <h3 className="text-xl text-primary font-bold mb-2 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Espacio vacío para equilibrar el flex en desktop */}
                                <div className="hidden md:block md:w-[45%]" />

                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Final */}
                <div className="flex flex-col justify-center sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto animate-timeline">

                    {/* Botón Primario */}
                    <Link
                        href={'/contacto'}
                        className="group w-full sm:w-auto relative overflow-hidden rounded-xl bg-primary px-8 py-4 text-foreground transition-all duration-150 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                    >
                        <div className="relative z-10 flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm sm:text-base">
                            ¿Comenzamos?
                            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Timeline;