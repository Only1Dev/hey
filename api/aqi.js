export const config = {
  runtime: "edge",
};

export default async function handler() {
  try {
    const response = await fetch(
      "https://api.openaq.org/v2/latest?city=Delhi"
    );
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch AQI" }),
      { status: 500 }
    );
  }
}
