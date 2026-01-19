import { SITE_CONFIG } from '@/config';

const JsonLd = () => {

  const { hero, contacto, schemaInfo, metadataInfo } = SITE_CONFIG;

  const schema = {
    '@context': 'https://schema.org',
    '@type': schemaInfo.businessType,
    name: metadataInfo.title.default, 
    description: hero.desc,
    image: metadataInfo.openGraph.images.map(img => img.url), // Usamos las imágenes de OG
    telephone: contacto.info.contacto.telefono,
    url: metadataInfo.siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: schemaInfo.address.city,
    },
    areaServed: schemaInfo.areaServed.map(city => ({
        '@type': 'City',
        'name': city
    })),
    openingHoursSpecification: schemaInfo.openingHours.map(slot => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes
    })),
    priceRange: schemaInfo.priceRange,
    // Añadimos "SameAs" para conectar con redes sociales (SEO Local potente)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;