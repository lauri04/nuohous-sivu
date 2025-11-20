import { Phone, MessageCircle, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ota yhteyttä</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Olemme valmiita kuulemaan sinun tarpeistasi. Soita tai lähetä viesti, niin vastaamme nopeasti.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Puhelin</h3>
                  <a href="tel:0405212363" className="text-muted-foreground hover:text-accent transition">
                    0405212363
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Whatsapp</h3>
                  <a href="https://wa.me/358405212363" className="text-muted-foreground hover:text-accent transition">
                    Voimme sopia ajan Whatsapissa!
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Sähköposti</h3>
                  <a
                    href="mailto:heikki.hautala@netikka.fi"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    heikki.hautala@netikka.fi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
