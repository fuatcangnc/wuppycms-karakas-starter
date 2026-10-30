import settings from './site-settings.json'
import servicesData from './services.json'
import couriers from './couriers.json'

export const siteSettings = settings
export const defaultServices = servicesData.services.map((service) => ({
  ...service,
  url: `/${service.slug}`,
}))
// Kategoriler hizmet listesinden turetilir: menu ve /hizmetler sektorden bagimsiz calisir.
export const serviceCategories = Array.from(new Set(defaultServices.map((service) => service.category))).filter(Boolean)
export const courierCompanies = couriers

export type Service = (typeof defaultServices)[number]
export type Courier = (typeof courierCompanies)[number]

export const phoneHref = `tel:${siteSettings.phone.replace(/\D/g, '')}`
export const whatsappHref = (message = `Merhaba, ${siteSettings.brandName} hizmetleri hakkında bilgi almak istiyorum.`) =>
  `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent(message)}`
