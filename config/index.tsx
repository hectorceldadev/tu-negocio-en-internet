export interface SiteConfig {
    metadataInfo: {
        title: {
            default: string
        }
        description: string
        siteUrl: string
        keywords: string[]
        openGraph: {
            title: string,
            description: string
            url: string
            siteName: string
            locale: string
            type: string
            images: [
                {
                    url: string
                    width: 1200,
                    height: 630,
                    alt: string
                }
            ]
        }
    }
    schemaInfo: {
        businessType: string
        address: {
            city: string
        }
        areaServed: string[]
        priceRange: string // Ej: "$", "$$", "$$$"
        openingHours: Array<{
            days: string[] // Ej: ['Monday', 'Tuesday']
            opens: string
            closes: string
        }>
    }
    navBar: {
        logo: {
            textOrImage: string
            href: string
        }
        navegacion: Array<{
            href: string
            text: string
        }>
        cta: {
            text: string
            href: string
        }
    }
    hero: {
        badge: string
        title: string
        desc: string
        ctaPrimary: {
            href: string
            icon: string
            text: string
        }
        showSocialProof: boolean
        image: '/images/home/hero.webp'
    }
    reviews: {
        badge: string
        title: string
        desc: string
        items: Array<{
            user: string
            servicio: string
            content: string
            rating: number
            icon: string
        }>
    }
    contacto: {
        metadata: {
            title: string
            description: string
        }
        badge: string
        title: string
        desc: string
        formAction: string
        formOptions: string[]
        info: {
            horario: {
                entresemana: string
                sabado: string
                domingo: string
                sabadoYDomingo: string
            },
            contacto: {
                telefono: string
                links: {
                    phone: {
                        icon: string
                        href: string
                    }
                }
            }
        }
    },
    footer: {
        logo: string
        desc: string
        socialLinks: Array<{
            icon: string
            href: string
        }>
        copyright: string
    }
    design: {
        background: 'barberia-urbana' | 'salon-de-belleza' | 'peluqueria-regular' | 'CrossBackground' | 'HexBackground' | 'WaveBackground'
        paleta: // Paletas Oscuras Originales
                | 'violet' | 'yellow' | 'green' | 'orange' | 'amber' | 'red' | 'lime' | 'emerald'
                | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'purple' | 'fuchsia' | 'pink'
                | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'

                // Nuevas Paletas Light
                | 'light-violet' | 'light-yellow' | 'light-green' | 'light-orange' | 'light-amber'
                | 'light-red' | 'light-lime' | 'light-emerald' | 'light-teal' | 'light-cyan'
                | 'light-sky' | 'light-blue' | 'light-indigo' | 'light-purple' | 'light-fuchsia'
                | 'light-pink' | 'light-rose' | 'light-slate' | 'light-gray' | 'light-zinc'
                | 'light-neutral' | 'light-stone'

                // Paletas Salón de Belleza (Estilo Nude/Pastel)
                | 'nude' | 'nude-rose' | 'lavender' | 'sage' | 'matcha' | 'glacial'
                | 'ocean' | 'latte' | 'blush' | 'mauve' | 'peach'
                typography: 'barberiaUrbana' | 'salonBelleza' | 'peluqueriaRegular'
    }
}

export const SITE_CONFIG: SiteConfig = {
    metadataInfo: {
        title: {
            default: 'Tu Negocio En Internet | Página web por 50€'
        },
        description: 'Diseñamos webs por 50€/mes. Aumentamos el trafico de tu negocio de forma organica. Especialistas desarrollo y diseño web. Ponte en contacto aquí ->',
        siteUrl: 'https://tunegocioeninternet.es', //** */ Pon aquí el dominio real cuando lo tengas
        keywords: ['Diseño web', 'Crear página web', 'Desarrollo web', 'Página web para mi negocio', 'Web local', 'Web Negocio', 'Página web', 'Pagina web crear', 'Pagina web gratis', 'Pagina web barata', 'Pagina web responsive', 'Página web Kit digital', 'Pagina web y dominio', 'Pagina web y hosting', 'Pagina web y posicionamiento', 'Pagina web y venta', 'Diseño sitio web', 'Crear sitio web', 'Sitio web'],
        openGraph: {
            title: "Tu Negocio En Internet | Página web por 50€",
            description: "Diseñamos webs por 50€. Ponte en contacto aquí ->",
            url: "https://tunegocioeninternet.es",
            siteName: "Tu Negocio En Internet",
            locale: "es_ES",
            type: "website",
            images: [
                {
                    url: "/images/open-graph/open-graph.png",
                    width: 1200,
                    height: 630,
                    alt: "Tu Negocio En Internet | Página web por 50€",
                }
            ]
        }
    },
    schemaInfo: {
        businessType: 'ProfessionalService', 
        address: { 
            city: 'Valencia',
        },
        areaServed: [
            "Valencia",
            "Madrid",
            "Barcelona",
            "Sevilla",
            "Baleares",
            "Bilbao",
        ],
        priceRange: '€€',
        openingHours: [ 
            {
                days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '24:00'
            },
        ]
    },
    navBar: {
        logo: {
            textOrImage: 'Tu Negocio \nEn Internet',
            href: '/'
        },
        navegacion: [
            {
                href: '/',
                text: 'Inicio'
            },
            {
                href: '/servicio',
                text: 'Servicio'
            },
            {
                href: '/contacto',
                text: 'Contacto'
            },
        ],
        cta: {
            text: '¡Quiero mi web!',
            href: 'https://wa.me/34634779186?text=Hola%20Tu%20Negocio%20En%20Internet%20estaba%20intersado%20en%20la%20creación%20de%20un%20sitio%20web'
        }
    },
    hero: {
        badge: 'Tu Negocio En Internet · EST 2026',
        title: 'Tu web  \npor 50€/mes',
        desc: 'La nueva referencia de diseño web en España. Especialistas en diseño y desarrollo web para darle la imagen digital que necesita tu negocio. Tu sitio de confianza para escalar tu local.',
        ctaPrimary: {
            href: 'https://wa.me/34634779186?text=Hola%20Tu%20Negocio%20En%20Internet%20estaba%20intersado%20en%20la%20creación%20de%20un%20sitio%20web',
            icon: 'ArrowUpRight',
            text: 'Consigue tu web'
        },
        showSocialProof: true,
        image: "/images/home/hero.webp",
    },
    reviews: {
        badge: 'COMMUNITY',
        title: 'LO QUE DICEN DE NOSOTROS',
        desc: 'La calidad de nuestro trabajo se ve reflejada en el retorno de nuestros clientes.',
        items: [
            {
                content: 'Desde que lanzamos la web, hemos notado que entra mucha gente nueva diciendo que nos encontró en Google. Antes solo dependíamos de Instagram y esto ha sido un salto de calidad.',
                servicio: 'Diseño Web + SEO',
                user: 'Laura M. - Salón Velvet',
                rating: 5,
                icon: 'User'
            },
            {
                content: 'Lo mejor es no tener que soltar 1.500€ de golpe. El modelo de suscripción es perfecto para pequeños negocios. Además, Héctor se encarga de todo y yo me olvido de la técnica.',
                servicio: 'Suscripción Mensual',
                user: 'Javier R. - Barbería Clásica',
                rating: 5,
                icon: 'User'
            },
            {
                content: 'Teníamos una página antigua que no se veía bien en el móvil. El cambio ha sido radical, ahora es moderna, rápida y mis clientas agradecen tener el botón de WhatsApp tan a mano.',
                servicio: 'Rediseño Web',
                user: 'Elena S. - Estética Aura',
                rating: 5,
                icon: 'User'
            },
            {
                content: 'Héctor entendió mi marca a la primera. No es la típica plantilla aburrida, se nota que está hecha a medida. Muy contentos con el resultado y el trato cercano.',
                servicio: 'Diseño Personalizado',
                user: 'Marcos P. - The Cut',
                rating: 4,
                icon: 'User'
            },
            {
                content: 'Al principio dudaba si realmente necesitaba una web teniendo Facebook, pero los resultados hablan por sí solos. Este mes hemos tenido un 20% más de solicitudes de cita.',
                servicio: 'Estrategia Digital',
                user: 'Ana B. - Peluquería Nerea',
                rating: 5,
                icon: 'User'
            },
            {
                content: 'Súper rápido y eficaz. En menos de una semana teníamos la web funcionando. Cualquier cambio de precios que necesito, me lo gestiona al momento. Un alivio total.',
                servicio: 'Mantenimiento Web',
                user: 'Carlos D. - Barber Shop 90',
                rating: 5,
                icon: 'User'
            },
            {
                content: 'La inversión se paga sola. Solo con dos o tres clientes nuevos que nos trae la web al mes, la cuota ya está más que amortizada. Recomendable 100%.',
                servicio: 'Posicionamiento Google',
                user: 'Sofía L. - Beauty Lab',
                rating: 5,
                icon: 'User'
            },
            {
                content: 'Da una imagen de seriedad y profesionalidad que antes nos faltaba. Ahora cuando alguien busca "peluquería en el barrio", salimos los primeros y con una imagen impecable.',
                servicio: 'Diseño Web',
                user: 'Roberto G. - Estilo Urbano',
                rating: 5,
                icon: 'User'
            },
        ]
    },
    contacto: {
        metadata: {
            title: 'Contacto | Página web por 50€/mes',
            description: 'Estamos listos para cambiar tu imagen. Contacta por correo o escríbenos al Whatssap. Impulsa tu negocio a otro nivel'
        },
        badge: "GET IN TOUCH",
        title: "Contacto", 
        desc: "Estamos listos para cambiar tu imagen. Contacta por correo o escríbenos al Whatssap. Impulsa tu negocio a otro nivel ",
        formAction: "https://formspree.io/f/xjggroyk",
        formOptions: [
            "Sitio Web"
        ],
        info: {
            horario: {
                entresemana: '[Lun - Vie: 10:00 - 20:00]',
                sabado: '[Sabado: 10:00 - 20:00]',
                domingo: '[Domingo: 10:00 - 20:00]',
                sabadoYDomingo: '[Sab y Dom: 10:00 - 20:00]',
            },
            contacto: {
                telefono: '+34 634 77 91 86',
                links: {
                    phone: {
                        icon: 'Phone',
                        href: 'https://wa.me/34634779186?text=Hola%20Tu%20Negocio%20En%20Internet%20estaba%20intersado%20en%20la%20creación%20de%20un%20sitio%20web'
                    }
                }
            }
        },
    },
    footer: {
        logo: 'Tu Negocio En Internet',
        desc: 'La nueva referencia de diseño web en España. Especialistas en diseño y desarrollo web para darle la imagen digital que necesita tu negocio. Tu sitio de confianza para escalar tu negocio.',
        socialLinks: [
            { icon: "Phone", href: "https://wa.me/34634779186?text=Hola%20Tu%20Negocio%20En%20Internet%20estaba%20intersado%20en%20la%20creación%20de%20un%20sitio%20web" }
        ],
        copyright: '2026 - Tu Negocio En Internet'
    },
    design: {
        background: 'barberia-urbana',
        paleta: 'orange',
        typography: 'barberiaUrbana'
    }
}