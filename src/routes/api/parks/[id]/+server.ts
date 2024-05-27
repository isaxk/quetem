import { json } from "@sveltejs/kit";

function findParkData(id: number, parks: any) {
    var foundPark: any;
    parks.forEach((group: any) => {
        group.parks.forEach((park: any) => {
            if (park.id == id) {
                foundPark = park;
            }
        });
    });
    return foundPark;
}

export async function GET({ fetch, params }) {
    const res = await fetch(`https://queue-times.com/parks.json`);
    const parks = await res.json();

    const park = findParkData(params.id, parks);

    return json(park);
}
