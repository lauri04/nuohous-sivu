export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Nuohouspalvelu Hautala</h3>
            <p className="text-sm text-primary-foreground/80">Ammattimainen nuohouspalvelu Etelä-Pohjanmaalla.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Palvelut</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-accent transition">
                  Nuohouspalvelu
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition">
                  IV-Puhdistus
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition">
                  IV-Mittaus ja säätö
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Yritys</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Tietoa meistä
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-accent transition">
                  Palvelualueet
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition">
                  Ota yhteyttä
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ota yhteyttä</h4>
            <p className="text-sm">
              <a href="tel:0405212363" className="hover:text-accent transition">
                0405212363
              </a>
              <br />
              <br />
              Alarannantie 186
              <br />
              62410 Rintala
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Nuohouspalvelu Hautala. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  )
}
