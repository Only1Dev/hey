import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const url = "https://api.openaq.org/v2/latest?city=Delhi";

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Backend fetch failed" });
  }
}
