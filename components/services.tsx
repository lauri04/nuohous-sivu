import { CheckCircle2, Flame, Wind, Gauge } from "lucide-react"

const services = [
  {
    icon: Flame,
    title: "Nuohouspalvelu",
    description: "Piipun ammattimainen puhdistus ja kunnossapito. Varmistetaan savukanavien tehokkuus ja turvallisuus.",
    items: ["Piipun puhdistus", "Savukanavien tarkastus", "Palosertifikaatti"],
  },
  {
    icon: Wind,
    title: "IV-Puhdistus",
    description:
      "Ilmanvaihto-järjestelmien perusteellinen puhdistus. Parantaa ilman laatua ja järjestelmän tehokkuutta.",
    items: ["Ilmakanavien puhdistus", "Puhaltimen puhdistus", "Suodattimien vaihto"],
  },
  {
    icon: Gauge,
    title: "IV-mittaus ja säätö",
    description: "Järjestelmän mittaus ja optimointi. Varmistetaan oikea ilmanvaihtomäärä ja energiatehokkuus.",
    items: ["Virtausnopeuden mittaus", "Tasapainotus", "Energiatehokkuuden optimointi"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Laaja-alainen palvelutarjonta</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Olemme asiantuntijoita piippu- ja savukanavajärjestelmien ylläpidosta ja kunnostuksesta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-accent transition-all"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

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
