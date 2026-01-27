export const config = {
  runtime: "edge",
};

export default async function handler() {
  const url =
    "https://api.openaq.org/v3/measurements?country=IN&city=Delhi&limit=10";

  const response = await fetch(url, {
    headers: {
      "X-API-Key": process.env.OPENAQ_API_KEY,
      "accept": "application/json",
    },
  });

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: "OpenAQ request failed" }),
      { status: 500 }
    );
  }

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
