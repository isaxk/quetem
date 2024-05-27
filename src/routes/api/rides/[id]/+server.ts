import { json } from "@sveltejs/kit";

export async function GET({ fetch, params }) {
    const res = await fetch(
        `https://queue-times.com/parks/${params.id}/queue_times.json`,
    );
    const jsonRides = await res.json();

    let rides = jsonRides;
    if (jsonRides.rides && jsonRides.rides.length > 0) {
        rides.lands.push({
            id: 10000001,
            name: "Other",
            rides: jsonRides.rides,
        });
    } else {
        rides = { ...jsonRides };
    }

    return json(rides);
}
