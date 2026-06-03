export default function About() {
  const highlights = [
    {
      title: "Two-player lobbies",
      description:
        "Start a game, share the lobby code, and keep both players connected in the same match.",
    },
    {
      title: "Bingo and Guess Word",
      description:
        "Play a classic 5x5 number race or a quick secret-word guessing round.",
    },
    {
      title: "Simple online play",
      description:
        "The screens stay focused on the game state, player roles, and the next move.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase text-emerald-700">About</p>
        <h1 className="mt-3 text-4xl font-black tracking-normal text-slate-950">
          Quick two-player games for shared lobbies
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Game Lobby is built for small, friendly browser matches. Create a lobby,
          invite another player with a code, and jump into focused games that are
          easy to understand without extra setup.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The site currently includes Bingo, where players build custom 5x5 boards
          and race to complete BINGO, and Guess Word, where one player asks clues
          while the other answers only yes, no, or maybe.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div className="rounded-lg border border-slate-200 bg-white p-5" key={item.title}>
              <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
