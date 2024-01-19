export interface Photo {
    id: number;
    sol: number;
    camera: {
        id: number;
        name: string;
        rover_id: number;
        full_name: string;
    };
    img_src: string;
    earth_date: string;
    rover: {
        id: number;
        name: string;
        landing_date: string;
        launch_date: string;
        status: string;
        max_sol: number;
        max_date: string;
        total_photos: number;
        cameras: {
            name: string;
            full_name: string;
        }[];
    };
}

export interface MyImageProps {
    alt?: string;
    height?: number | string;
    src: string;
    width?: number | string;
    placeholder: string;
}
