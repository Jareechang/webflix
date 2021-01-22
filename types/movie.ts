export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    // Date string
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    /*
     * url slug of the movie
     * **/ 
    slug?: string;

    /*
     * The limit for amount of text to display in the cad
     *
     * **/
    descriptionPreviewLimit?: number;
}

