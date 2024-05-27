export async function load({ fetch }) {
    const parksRes = await fetch("/api/parks");

    const parks = await parksRes.json();

    return { parks };
}
