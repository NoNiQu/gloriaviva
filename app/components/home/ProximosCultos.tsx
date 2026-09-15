const monthFormatter = new Intl.DateTimeFormat("es-ES", {
  month: "long",
});

export function ProximosCultos() {
  const currentMonth = monthFormatter.format(new Date());

  const formattedMonth =
    currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);

  return (
    <section
      aria-labelledby="proximos-cultos-title"
      className="flex min-h-svh items-center bg-black text-white"
    >
      <div className="mx-auto flex w-full max-w-360 flex-col items-center justify-center px-6 py-20 text-center md:px-10 lg:px-30">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
          Próximos cultos
        </p>

        <h2
          id="proximos-cultos-title"
          className="mt-5 text-[3.5rem] font-normal leading-none tracking-[-0.04em] md:text-7xl lg:text-8xl"
        >
          {formattedMonth}
        </h2>

        <p className="mt-8 text-base leading-7 text-white/60 md:text-lg">
          Más información pronto
        </p>
      </div>
    </section>
  );
}
