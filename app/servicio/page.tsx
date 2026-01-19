import Servicios from "@/components/Servicios"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Servicios | Página web por 50€',
  description: 'Página Web por 50€. Instalación gratuita, incluye hosting, dominio, y mantenimiento técnico ante caídas. A que estas esperando, ponte en contacto con nosotros aqui ->'
}

const page = () => {
  return (
    <Servicios />
  )
}

export default page
