import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-b from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32 relative overflow-hidden bg-cover bg-[center_25%]"
      style={{
        backgroundImage: "url('/chimney-cleaning-roof-winter.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance">
            Ammattimaista nuohouspalvelua Etelä-Pohjanmaalla
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 text-balance">
            Ammattimaista nuohouspalvelua. Nuohoamme hormit ja tulisijat kuntoon!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+358401234567"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition text-lg"
            >
              <span>Varaa tarkastus</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition"
            >
              Lue palveluista
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
