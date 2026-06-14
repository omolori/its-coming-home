"use client";

import { useState } from "react";

const PUMPFUN_URL =
  "https://pump.fun/coin/3SMtZcc2iWRGvVGtVoL61MfD8zv27NUY4SyWasVXpump";
const X_URL = "https://x.com/itscominghomeme";
const TG_URL = "https://t.me/+WXdUZvU9DOUwNTdk";
const X_GROUP_URL =
  "https://x.com/i/chat/group_join/g2064938125785505903/098uou1JBO";
const DEX_URL =
  "https://dexscreener.com/solana/d1au7pj6me5ljzfnrcvlwtakj2o5pddqdf8hvyxg477n";
const KYM_URL = "https://knowyourmeme.com/memes/its-coming-home-three-lions";

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      />
      <div className="fixed inset-0 bg-black/70" />

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-yellow-400 px-4 py-2 font-black text-black shadow-lg"
      >
        ☰
      </button>

      <aside
        className={`fixed left-0 top-0 z-40 h-full w-72 border-r border-yellow-400/30 bg-black/90 p-6 backdrop-blur-xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="mt-12 text-3xl font-black text-yellow-400">$HOME</h2>
        <p className="mb-8 text-sm text-white/70">It&apos;s Coming Home</p>

        <nav className="space-y-3">
          <button onClick={() => setPage("dashboard")} className="nav-btn">
            Dashboard
          </button>
          <button onClick={() => setPage("worldcup")} className="nav-btn">
            World Cup Hub
          </button>
          <button onClick={() => setPage("memes")} className="nav-btn">
            Meme Vault
          </button>
        </nav>
      </aside>

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        {page === "dashboard" && <Dashboard />}
        {page === "worldcup" && <WorldCupHub />}
        {page === "memes" && <MemeVault />}
      </section>
    </main>
  );
}

function Dashboard() {
  return (
    <>
      <section className="flex min-h-[80vh] items-end justify-center rounded-3xl border border-yellow-400/20 bg-black/35 p-6 text-center shadow-2xl backdrop-blur-sm">
        <div className="max-w-4xl rounded-3xl border border-yellow-400/30 bg-black/75 p-8 backdrop-blur-md">
          <h1 className="text-5xl font-black md:text-8xl">IT&apos;S COMING HOME</h1>
          <p className="mt-4 text-lg text-white/85 md:text-2xl">
            $HOME — the global football meme coin built for World Cup chaos.
          </p>
          <a href={DEX_URL} target="_blank" className="buy-btn">
            BUY $HOME
          </a>
        </div>
      </section>

      <h2 className="mt-12 text-3xl font-black">Official Links</h2>

      <div className="mt-5 grid gap-4 md:grid-cols-5">
        <LinkCard label="Pump.fun" href={PUMPFUN_URL} />
        <LinkCard label="X Page" href={X_URL} />
        <LinkCard label="X Group" href={X_GROUP_URL} />
        <LinkCard label="Telegram" href={TG_URL} />
        <LinkCard label="Know Your Meme" href={KYM_URL} />
      </div>

      <h2 className="mt-12 text-3xl font-black">Live Dexscreener Chart</h2>

      <div className="mt-5 overflow-hidden rounded-3xl border border-yellow-400/20 bg-black/70">
        <iframe
          src={`${DEX_URL}?embed=1&theme=dark&info=0`}
          className="h-[760px] w-full border-0"
        />
      </div>
    </>
  );
}

function WorldCupHub() {
  const fixtures = [
    ["2026-06-11", "A", "Mexico vs South Africa", "2-0", "FT"],
    ["2026-06-11", "A", "South Korea vs Czechia", "2-1", "FT"],
    ["2026-06-12", "B", "Canada vs Bosnia", "1-1", "FT"],
    ["2026-06-12", "D", "USA vs Paraguay", "4-1", "FT"],
    ["2026-06-13", "C", "Brazil vs Morocco", "1-1", "FT"],
    ["2026-06-14", "D", "Australia vs Turkey", "2-0", "FT"],
  ];

  const standings = [
    ["A", "Mexico", 1, 3, 2],
    ["A", "South Korea", 1, 3, 1],
    ["B", "Canada", 1, 1, 0],
    ["B", "Bosnia", 1, 1, 0],
    ["C", "Scotland", 1, 3, 1],
    ["D", "USA", 1, 3, 3],
    ["D", "Australia", 1, 3, 2],
  ];

  return (
    <section className="rounded-3xl border border-yellow-400/20 bg-black/75 p-6 backdrop-blur-md">
      <h1 className="text-5xl font-black">World Cup Hub</h1>
      <p className="mt-2 text-white/70">
        Live API can be added here. For now this uses starter data.
      </p>

      <h2 className="mt-10 text-3xl font-bold">Fixtures & Results</h2>
      <Table
        headers={["Date", "Group", "Match", "Result", "Status"]}
        rows={fixtures}
      />

      <h2 className="mt-10 text-3xl font-bold">Group Standings</h2>
      <Table
        headers={["Group", "Team", "Played", "Points", "GD"]}
        rows={standings}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Ranking title="Top Scorers" rows={[["Folarin Balogun", "USA", 2], ["Reyna", "USA", 1], ["Cyle Larin", "Canada", 1]]} />
        <Ranking title="Top Assisters" rows={[["Assist Leader", "USA", 2], ["Player 2", "Canada", 1], ["Player 3", "Mexico", 1]]} />
      </div>
    </section>
  );
}

function MemeVault() {
  const memes = [
    "/memes/meme1.png",
    "/memes/meme2.png",
    "/memes/meme3.png",
    "/memes/meme4.png",
    "/memes/meme5.png",
    "/memes/meme6.png",
    "/memes/meme7.png",
  ];

  return (
    <section className="rounded-3xl border border-yellow-400/20 bg-black/75 p-6 backdrop-blur-md">
      <h1 className="text-5xl font-black">Meme Vault</h1>
      <p className="mt-2 text-white/70">All the $HOME memes in one place.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {memes.map((meme) => (
          <div key={meme} className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
            <img src={meme} alt="It's Coming Home meme" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

function LinkCard({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="rounded-2xl border border-yellow-400/20 bg-black/70 p-5 text-center font-bold transition hover:bg-yellow-400 hover:text-black"
    >
      {label}
    </a>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: (string | number)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[650px] text-left">
        <thead className="bg-yellow-400 text-black">
          <tr>
            {headers.map((h) => (
              <th key={h} className="p-3">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/10 bg-black/60">
              {row.map((cell, j) => (
                <td key={j} className="p-3">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Ranking({ title, rows }: { title: string; rows: (string | number)[][] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
      <h3 className="text-2xl font-bold">{title}</h3>
      <Table headers={["Player", "Country", "Total"]} rows={rows} />
    </div>
  );
}