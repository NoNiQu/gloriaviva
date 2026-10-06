import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import type { NavigationLink } from "~/types/navigation";

const navigation = [
  { label: "Cofradías", to: "/cofradias" },
  { label: "Cultos", to: "/cultos" },
  { label: "Sedes Canónicas", to: "/sedescanonicas" },
  { label: "Contacto", to: "/contacto" },
  { label: "FAQ", to: "/faq" },
] satisfies NavigationLink[];

const whiteHeaderRoutes = ["/contacto", "/faq", "/aviso-legal", "/privacidad"];

export function Header() {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";
  const hasWhiteHeader = whiteHeaderRoutes.includes(pathname);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const inertElements = [
      document.getElementById("skip-to-content"),
      document.getElementById("site-content"),
      document.getElementById("site-footer"),
      document.getElementById("scroll-to-top"),
    ].filter((element): element is HTMLElement => element !== null);

    document.body.style.overflow = "hidden";

    inertElements.forEach((element) => {
      element.setAttribute("inert", "");
    });

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);

        requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;

      inertElements.forEach((element) => {
        element.removeAttribute("inert");
      });

      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const desktopLogoSrc = hasWhiteHeader ? "/logoWeb.webp" : "/logoWeb_B.webp";

  const mobileLogoSrc =
    hasWhiteHeader && !isMenuOpen
      ? "/logoWebMovil_B.webp"
      : "/logoWebMovil_A.webp";

  const desktopLogo = (
    <img
      src={desktopLogoSrc}
      alt="Gloria Viva — Glorias de Toledo"
      width={300}
      height={60}
      loading="eager"
      fetchPriority={isHomePage ? "high" : "auto"}
      className="h-auto w-62.5"
    />
  );

  const mobileLogo = (
    <img
      src={mobileLogoSrc}
      alt="Gloria Viva — Glorias de Toledo"
      width={280}
      height={190}
      loading="eager"
      fetchPriority={isHomePage ? "high" : "auto"}
      className="h-auto w-35"
    />
  );

  const mobileIconColor =
    hasWhiteHeader && !isMenuOpen ? "bg-white" : "bg-black";

  const mobileFocusColor =
    hasWhiteHeader && !isMenuOpen
      ? "focus-visible:outline-white"
      : "focus-visible:outline-black";

  return (
    <>
      <header
        className={[
          "absolute inset-x-0 top-0 z-50",
          "transition-colors duration-300",
          isMenuOpen ? "bg-white" : "bg-transparent",
          "lg:bg-transparent",
        ].join(" ")}
      >
        {/* CABECERA DE ESCRITORIO */}
        <div className="hidden lg:block">
          <div className="mx-auto flex h-45 max-w-1440px items-center justify-between px-45">
            {isHomePage ? (
              <div>{desktopLogo}</div>
            ) : (
              <Link
                to="/"
                aria-label="Volver a la página de inicio"
                className={[
                  "block focus-visible:outline-2 focus-visible:outline-offset-4",
                  hasWhiteHeader
                    ? "focus-visible:outline-white"
                    : "focus-visible:outline-black",
                ].join(" ")}
              >
                {desktopLogo}
              </Link>
            )}

            <nav aria-label="Navegación principal">
              <ul className="flex items-center gap-8">
                {navigation.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        [
                          "relative py-2",
                          "text-[1.07rem]",
                          "tracking-[0.02em]",
                          "transition-opacity duration-200",
                          "hover:opacity-70",
                          "focus-visible:outline-2",
                          "focus-visible:outline-offset-4",

                          hasWhiteHeader
                            ? "text-white focus-visible:outline-white"
                            : "text-black focus-visible:outline-black",

                          "after:absolute",
                          "after:inset-x-0",
                          "after:-bottom-1",
                          "after:h-px",
                          "after:origin-left",
                          "after:transition-transform",
                          "after:duration-200",

                          hasWhiteHeader ? "after:bg-white" : "after:bg-black",

                          isActive
                            ? "after:scale-x-100"
                            : "after:scale-x-0 hover:after:scale-x-100",
                        ].join(" ")
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* CABECERA MÓVIL */}
        <div className="grid h-45 grid-cols-[48px_1fr_48px] items-center px-5 lg:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
            className={[
              "relative",
              "flex",
              "h-12",
              "w-12",
              "items-center",
              "justify-center",
              "justify-self-start",
              "focus-visible:outline-2",
              "focus-visible:outline-offset-4",
              mobileFocusColor,
            ].join(" ")}
          >
            <span className="sr-only">
              {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>

            <span
              aria-hidden="true"
              className={[
                "absolute h-px w-7",
                mobileIconColor,
                "transition-transform duration-300",
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.75",
              ].join(" ")}
            />

            <span
              aria-hidden="true"
              className={[
                "absolute h-px w-7",
                mobileIconColor,
                "transition-opacity duration-300",
                isMenuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />

            <span
              aria-hidden="true"
              className={[
                "absolute h-px w-7",
                mobileIconColor,
                "transition-transform duration-300",
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.75",
              ].join(" ")}
            />
          </button>

          <div className="justify-self-center">
            {isHomePage ? (
              <div>{mobileLogo}</div>
            ) : (
              <Link
                to="/"
                aria-label="Volver a la página de inicio"
                className={[
                  "block",
                  "transition-opacity",
                  "duration-200",
                  "hover:opacity-80",
                  "focus-visible:outline-2",
                  "focus-visible:outline-offset-4",
                  mobileFocusColor,
                ].join(" ")}
              >
                {mobileLogo}
              </Link>
            )}
          </div>

          <div aria-hidden="true" className="h-12 w-12" />
        </div>
      </header>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <nav
        id="mobile-navigation"
        aria-label="Navegación móvil"
        className={[
          "fixed inset-x-0 bottom-0 top-45 z-40",
          "bg-white text-black",
          "overflow-y-auto",
          "transition-all duration-300",
          "lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        ].join(" ")}
      >
        <div className="flex min-h-full flex-col px-8 pb-10 pt-10">
          <ul className="mt-10 border-t border-black/15">
            {navigation.map((item) => (
              <li key={item.to} className="border-b border-black/15">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "group flex min-h-20 items-center justify-between gap-6",
                      "text-xl font-semibold tracking-[0.06em] text-black",
                      "transition-colors duration-200",
                      "focus-visible:outline-2",
                      "focus-visible:-outline-offset-2",
                      "focus-visible:outline-black",
                      "hover:text-black",
                    ].join(" ")
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
