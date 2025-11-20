import { CheckCircle2, Flame } from "lucide-react"

const services = [
  {
    icon: Flame,
    title: "Nuohouspalvelu",
    description: "Piipun ammattimainen puhdistus ja kunnossapito. Varmistetaan savukanavien tehokkuus ja turvallisuus.",
    items: ["Piipun puhdistus", "Savukanavien tarkastus", "Palosertifikaatti"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-accent transition-all max-w-md w-full md:max-w-2xl"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-base">{service.description}</p>

                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
