import { Contacto } from "@/components/Contacto"
import Hero from "@/components/Hero"
import { Reviews } from "@/components/Reviews"
import Servicios from "@/components/Servicios"
import Timeline from "@/components/Timeline"

const page = () => {
  return (
    <div>
      <Hero />
      <Servicios />
      <Timeline />
      <Reviews />
      <Contacto />
    </div>
  )
}

export default page
