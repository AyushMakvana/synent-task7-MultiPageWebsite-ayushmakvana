export default function Services() {
  const services = [
    {
      title: "Bingo lobbies",
      description:
        "Create a private two-player room, build separate 5x5 boards, call numbers by turn, and track completed BINGO lines.",
    },
    {
      title: "Guess Word rounds",
      description:
        "Choose who guesses and who answers, then play through short secret words with yes, no, and maybe responses.",
    },
    {
      title: "Shareable game codes",
      description:
        "Each lobby gets a code so the second player can join the same match from the browser.",
    },
    {
      title: "Live game status",
      description:
        "Both games keep the important state visible, including player names, roles, turns, answers, winners, and new round actions.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase text-emerald-700">Services</p>
        <h1 className="mt-3 text-4xl font-black tracking-normal text-slate-950">
          What you can play here
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Game Lobby provides lightweight two-player game rooms for quick matches
          with clear rules, visible progress, and no complicated setup.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div className="rounded-lg border border-slate-200 bg-white p-5" key={service.title}>
              <h2 className="text-xl font-bold text-slate-950">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
