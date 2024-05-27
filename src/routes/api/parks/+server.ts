import { json } from "@sveltejs/kit";

function parksUnGrouped(parks: any) {
    let justParks: any = [];
    parks.forEach((group: any) => {
        group.parks.forEach((park: any) => {
            justParks.push(park);
        });
    });
    return justParks;
}

export async function GET({ fetch, params }) {
    const res = await fetch(`https://queue-times.com/parks.json`);
    const parksJSON = await res.json();

    const parks = parksUnGrouped(parksJSON);

    return json(parks);
}
