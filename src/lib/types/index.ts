export type ParkType = {
    id: number;
    name: string;
    country: string;
    continent: string;
    latitude: string;
    longitude: string;
    timezone: string;
};

export type RideType = {
    id: number;
    name: string;
    is_open: boolean;
    wait_time: number;
    last_updated: string;
};

export type LandType = {
    id: number;
    name: string;
    rides: Array<RideType>;
};
