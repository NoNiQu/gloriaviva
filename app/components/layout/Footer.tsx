import { Link, useLocation } from "react-router";
import type { FooterColumnProps } from "~/types/footer";
import type { NavigationLink } from "~/types/navigation";

const navigationLinks = [
  { label: "Cofradías", to: "/cofradias" },
  { label: "Cultos", to: "/cultos" },
  { label: "Sedes Canónicas", to: "/sedescanonicas" },
] satisfies NavigationLink[];

const informationLinks = [
  { label: "Contacto", to: "/contacto" },
  { label: "Aviso legal", to: "/aviso-legal" },
  { label: "Privacidad", to: "/privacidad" },
] satisfies NavigationLink[];

export function Footer() {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";
  const currentYear = new Date().getFullYear();

  const logo = (
    <img
      src="/logoWeb.png"
      alt="Gloria Viva — Glorias de Toledo"
      className="block h-auto w-62.5"
    />
  );

  return (
    <footer className="bg-[#263D63] text-white">
      <div className="mx-auto max-w-360 px-8 pb-8 pt-16">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[1.5fr_0.75fr_0.75fr]">
          {/* Marca y descripción */}
          <div className="self-start">
            {isHomePage ? (
              <div>{logo}</div>
            ) : (
              <Link
                to="/"
                aria-label="Volver a la página de inicio"
                className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {logo}
              </Link>
            )}

            <p className="mt-5 max-w-md text-sm leading-6 tracking-[0.03em] text-white/80">
              Guía independiente y no oficial de las cofradías, hermandades y
              devociones de gloria de Toledo.
            </p>
          </div>

          <FooterColumn title="Navegación" links={navigationLinks} />

          <FooterColumn title="Información" links={informationLinks} />
        </div>

        {/* Parte inferior */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-7 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <p
            className="
              text-[0.95rem]
              leading-6
              tracking-wider
              text-white/80
            "
          >
            © {currentYear} Gloria Viva
          </p>

          <p
            className="
              max-w-xl
              text-xs
              leading-6
              tracking-wider
              text-white/80
              lg:text-right
            "
          >
            <span className="block">
              La información publicada puede sufrir modificaciones.
            </span>

            <span className="block">
              Consulta siempre los canales oficiales antes de asistir a un
              culto, procesión o celebración.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="self-start">
      <h2
        className="
          m-0
          text-[0.95rem]
          uppercase
          leading-none
          tracking-[0.14em]
          text-white/90
        "
      >
        {title}
      </h2>

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="
                text-[1.07rem]
                tracking-[0.02em]
                text-white/80
                transition-opacity
                duration-200
                hover:opacity-70
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
