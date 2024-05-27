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

export async function load({ fetch, params }) {
    const ridesRes = await fetch(`/api/rides/${params.id}`);
    const parkRes = await fetch(`/api/parks/${params.id}`);

    const rides = await ridesRes.json();
    const park = await parkRes.json();

    return { rides, park, id: params.id };
}
