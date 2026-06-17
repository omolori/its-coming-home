import { NextResponse } from "next/server";

const API_KEY = process.env.API_FOOTBALL_KEY;
const BASE_URL = "https://v3.football.api-sports.io";
const LEAGUE_ID = 1;
const SEASON = 2026;

async function api(path: string) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "x-apisports-key": API_KEY || "",
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`API failed: ${path}`);
  }

  return res.json();
}

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({
      source: "fallback",
      message: "Missing API_FOOTBALL_KEY environment variable.",
    });
  }

  try {
    const [fixtures, standings, scorers, assisters] = await Promise.all([
      api(`/fixtures?league=${LEAGUE_ID}&season=${SEASON}`),
      api(`/standings?league=${LEAGUE_ID}&season=${SEASON}`),
      api(`/players/topscorers?league=${LEAGUE_ID}&season=${SEASON}`),
      api(`/players/topassists?league=${LEAGUE_ID}&season=${SEASON}`),
    ]);

    return NextResponse.json({
      source: "live",
      fixtures: fixtures.response || [],
      standings: standings.response || [],
      scorers: scorers.response || [],
      assisters: assisters.response || [],
    });
  } catch {
    return NextResponse.json({
      source: "fallback",
      message: "Live World Cup API request failed.",
      fixtures: [],
      standings: [],
      scorers: [],
      assisters: [],
    });
  }
}