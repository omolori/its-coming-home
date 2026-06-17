"use client";

import { useState } from "react";

const CA = "3SMtZcc2iWRGvVGtVoL61MfD8zv27NUY4SyWasVXpump";

const PUMPFUN_URL = `https://pump.fun/coin/${CA}`;
const X_URL = "https://x.com/itscominghomeme";
const TG_URL = "https://t.me/+WXdUZvU9DOUwNTdk";
const X_GROUP_URL =
  "https://x.com/i/chat/group_join/g2064938125785505903/098uou1JBO";
const DEX_URL =
  "https://dexscreener.com/solana/d1au7pj6me5ljzfnrcvlwtakj2o5pddqdf8hvyxg477n";
const KYM_URL = "https://knowyourmeme.com/memes/its-coming-home-three-lions";
const TIKTOK_TAG_URL = "https://www.tiktok.com/tag/itscominghome";

const tiktokVideos = [
  {
    title: "Trending #ItsComingHome TikTok 1",
    embedUrl: "https://www.tiktok.com/embed/v2/7650151271432834326?is_from_webapp=1&sender_device=pc&web_id=7652130958993081878",
    views: "10K+",
  },
  {
    title: "Trending #ItsComingHome TikTok 2",
    embedUrl: "https://www.tiktok.com/embed/v2/7649810792694533398?is_from_webapp=1&sender_device=pc&web_id=7652130958993081878",
    views: "10K+",
  },
  {
    title: "Trending #ItsComingHome TikTok 3",
    embedUrl: "https://www.tiktok.com/embed/v2/7652136597290306838?is_from_webapp=1&sender_device=pc&web_id=7652130958993081878",
    views: "10K+",
  },
  {
    title: "Trending #ItsComingHome TikTok 4",
    embedUrl: "https://www.tiktok.com/embed/v2/7621999890972871959?is_from_webapp=1&sender_device=pc&web_id=7652130958993081878",
    views: "10K+",
  },
  {
    title: "Trending #ItsComingHome TikTok 5",
    embedUrl: "https://www.tiktok.com/embed/v2/7647234139904855299?is_from_webapp=1&sender_device=pc&web_id=7652130958993081878",
    views: "10K+",
  },
];

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <div
        className="fixed left-0 right-0 bottom-0 top-[120px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      />
      <div className="fixed left-0 right-0 bottom-0 top-[120px] bg-black/70" />

      <TopTicker />
      <TopBrand />

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed left-4 top-[126px] z-[70] border border-[#ffde59] bg-[#721300] px-4 py-3 font-black text-[#ffde59]"
      >
        ☰
      </button>

      <aside
        className={`fixed left-0 top-0 z-40 h-full w-72 border-r border-[#ffde59] bg-black/95 p-6 pt-32 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-3xl font-black text-[#ffde59]">$HOME</h2>
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

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-56">
        {page === "dashboard" && <Dashboard />}
        {page === "worldcup" && <WorldCupHub />}
        {page === "memes" && <MemeVault />}
      </section>
    </main>
  );
}

function TopTicker() {
  return (
    <div className="fixed left-0 top-0 z-[60] flex h-[48px] w-full items-center overflow-hidden border-b border-[#ffde59] bg-[#f7f0df] text-black">
      <div className="ticker-track whitespace-nowrap text-lg italic leading-none">
        <span>It&apos;s coming home</span>
        <span className="ticker-dot">•</span>
        <span>Football is coming home</span>
        <span className="ticker-dot">•</span>
        <span>It&apos;s coming home</span>
        <span className="ticker-dot">•</span>
        <span>Football is coming home</span>
        <span className="ticker-dot">•</span>
        <span>It&apos;s coming home</span>
        <span className="ticker-dot">•</span>
        <span>Football is coming home</span>
        <span className="ticker-dot">•</span>
        <span>It&apos;s coming home</span>
        <span className="ticker-dot">•</span>
        <span>Football is coming home</span>
        <span className="ticker-dot">•</span>
      </div>
    </div>
  );
}

function TopBrand() {
  return (
    <div className="fixed left-0 top-[48px] z-[55] flex h-[60px] w-full items-center justify-between border-b border-[#ffde59]/40 bg-black/90 px-8 text-xs tracking-[0.45em] text-white">
      <div>$HOME</div>
      <div>EST. 1996</div>
    </div>
  );
}

function Dashboard() {
  const [copied, setCopied] = useState(false);

  const copyCA = async () => {
    await navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <section className="flex min-h-[80vh] items-end justify-center p-6 text-center">
        <div className="max-w-4xl border border-[#ffde59] bg-black/85 p-8">
          <h1 className="text-5xl font-black md:text-8xl">
            IT&apos;S COMING HOME
          </h1>
          <p className="mt-4 text-lg text-white/85 md:text-2xl">
            $HOME — the global football meme coin built for World Cup chaos.
          </p>
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

      <section className="mt-10 border border-[#ffde59] bg-black/80 p-6">
        <h2 className="text-3xl font-black">Coin Address</h2>

        <div className="mt-4 flex flex-col gap-3 lg:flex-row">
          <div className="break-all border border-[#ffde59] bg-black p-4 font-mono text-sm text-[#ffde59] lg:flex-1">
            CA: {CA}
          </div>

          <button onClick={copyCA} className="action-btn">
            {copied ? "Copied" : "Copy CA"}
          </button>

          <a href={DEX_URL} target="_blank" className="action-btn text-center">
            Live Dex Chart
          </a>
        </div>
      </section>

      <section className="mt-10 border border-[#ffde59] bg-black/80 p-6 leading-8">
        <h2 className="text-4xl font-black text-[#ffde59]">About</h2>

        <p className="mt-5">
          &quot;It&apos;s Coming Home&quot; is a slogan amongst fans of the
          England national football team to express their optimism that their
          team will win at the FIFA World Cup. By saying &quot;It&apos;s coming
          home&quot; they literally mean that England will bring the World Cup
          home to England. Due to the overly optimistic nature of the slogan it
          has been used in memes designed to jokingly mock those who get
          overexcited at positive progress for England in international
          football. The term significantly rose in use during the 2018 World Cup
          as England progressed through the tournament.
        </p>

        <h3 className="mt-8 text-3xl font-black text-[#ffde59]">Origin</h3>

        <p className="mt-4">
          The phrase &quot;It&apos;s coming home&quot; comes from the 1996 song
          &quot;Three Lions&quot; released by the band The Lightning Seeds with
          the lyrics written by comedians David Baddiel and Frank Skinner.
        </p>

        <div className="mt-6 border border-[#ffde59]">
          <iframe
            src="https://www.youtube.com/embed/RJqimlFcJsM"
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h3 className="mt-8 text-3xl font-black text-[#ffde59]">Spread</h3>

        <blockquote className="my-5 border-l-4 border-[#ffde59] bg-[#721300]/40 p-4 text-xl font-bold">
          It&apos;s coming home, it&apos;s coming home, it&apos;s coming,
          football&apos;s coming home!
        </blockquote>

        <p>
          In 1998, The Lightning Seeds released an updated version to coincide
          with the FIFA World Cup being held in France that year.
        </p>

        <div className="mt-6 border border-[#ffde59]">
          <iframe
            src="https://www.youtube.com/embed/KsrGajtU8tw"
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <TikTokTrending />
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
    <section className="border border-[#ffde59] bg-black/80 p-6">
      <h1 className="text-5xl font-black">World Cup Hub</h1>

      <h2 className="mt-10 text-3xl font-bold">Fixtures & Results</h2>
      <Table headers={["Date", "Group", "Match", "Result", "Status"]} rows={fixtures} />

      <h2 className="mt-10 text-3xl font-bold">Group Standings</h2>
      <Table headers={["Group", "Team", "Played", "Points", "GD"]} rows={standings} />

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
    <section className="border border-[#ffde59] bg-black/80 p-6">
      <h1 className="text-5xl font-black">Meme Vault</h1>
      <p className="mt-2 text-white/70">All the $HOME memes in one place.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {memes.map((meme) => (
          <div key={meme} className="overflow-hidden border border-[#ffde59] bg-black">
            <img src={meme} alt="It's Coming Home meme" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

function LinkCard({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} target="_blank" className="link-card">
      {label}
    </a>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="mt-4 overflow-x-auto border border-[#ffde59]">
      <table className="w-full min-w-[650px] text-left">
        <thead className="bg-[#721300] text-[#ffde59]">
          <tr>
            {headers.map((h) => (
              <th key={h} className="border-b border-[#ffde59] p-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[#ffde59]/40 bg-black/80">
              {row.map((cell, j) => (
                <td key={j} className="p-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Ranking({
  title,
  rows,
}: {
  title: string;
  rows: (string | number)[][];
}) {
  return (
    <div className="border border-[#ffde59] bg-black/70 p-5">
      <h3 className="text-2xl font-bold">{title}</h3>
      <Table headers={["Player", "Country", "Total"]} rows={rows} />
    </div>
  );
}

function TikTokTrending() {
  return (
    <section className="mt-10 border border-[#ffde59] bg-black/80 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-4xl font-black text-[#ffde59]">
            Trending TikToks
          </h2>
          <p className="mt-2 text-white/70">
            Latest manually selected #ItsComingHome TikToks with 10K+ plays.
          </p>
        </div>

        <a href={TIKTOK_TAG_URL} target="_blank" className="action-btn text-center">
          View TikTok Search
        </a>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {tiktokVideos.map((video, index) => (
          <div
            key={index}
            className="border border-[#ffde59] bg-black p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-black text-[#ffde59]">
                {video.title}
              </h3>

              <span className="text-sm text-white/70">
                {video.views}
              </span>
            </div>

            {video.embedUrl ? (
              <iframe
                src={video.embedUrl}
                className="h-[750px] w-full border-0"
                allow="encrypted-media"
                allowFullScreen
              />
            ) : (
              <div className="flex h-[750px] items-center justify-center border border-[#ffde59]/40 text-center text-white/60">
                Paste TikTok Embed URL Here
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}