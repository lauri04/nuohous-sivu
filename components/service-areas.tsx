import { MapPin } from "lucide-react"

const areas = [
  { city: "Kauhava", region: "Pääpalvelukaupunki" },
  { city: "Lapua", region: "Palvelukaupunki" },
  { city: "Lappajärvi", region: "Palvelukaupunki" },
  { city: "Alavus", region: "Lähialue" },
  { city: "Töysä", region: "Lähialue" },
  { city: "Kuortane", region: "Lähialue" },
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 md:py-32 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Palvelualueet</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Toimimme Etelä-Pohjanmaalla laajalla alueella. Ota yhteyttä, niin selvitämme yhdessä mahdollisuuden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-lg border border-border hover:border-accent transition"
            >
              <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">{area.city}</h3>
                <p className="text-sm text-muted-foreground">{area.region}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-lg text-center">
          <p className="text-lg font-semibold mb-2">Palvelualueesi ei listalla?</p>
          <p className="text-muted-foreground">Ota meihin yhteyttä – saatamme silti pystyä auttamaan sinua!</p>
        </div>
      </div>
    </section>
  )
}
