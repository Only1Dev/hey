export const config = {
  runtime: "edge",
};

export default async function handler() {
  const response = await fetch(
    "https://api.openaq.org/v3/latest?city=Delhi&limit=1",
    {
      headers: {
        "X-API-Key": "7a5a924eaabd15ed6f1545e43255f89ae61a0b7fdc96ca770715da7b64515fc7"
      }
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
