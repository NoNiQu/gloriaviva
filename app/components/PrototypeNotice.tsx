export function PrototypeNotice() {
  return (
    <aside
      aria-label="Aviso sobre el estado de la web"
      className="
        fixed
        bottom-4
        left-4
        z-100
        w-[calc(100%-1.5rem)]
        max-w-56
        rounded-2xl
        border
        border-white/15
        bg-[#1a1a1a]
        px-4
        py-3
        text-left
        text-white
        shadow-lg
        md:bottom-6
        md:left-6
        md:w-auto
        md:min-w-52
        md:px-4
      "
    >
      <p className="text-sm text-center leading-6 tracking-wider text-white md:text-base">
        Gloria Viva <br /> Fase de prototipo
      </p>
    </aside>
  );
}
