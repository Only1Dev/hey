export const config = {
  runtime: "edge",
};

export default async function handler() {
  const response = await fetch(
    "https://api.openaq.org/v2/latest?city=Delhi"
  );
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
