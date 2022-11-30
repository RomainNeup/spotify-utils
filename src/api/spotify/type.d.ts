interface User {
    display_name: string;
    extarnal_urls: {
        spotify: string;
    };
    followers: {
        href: string;
        total: number;
    };
    href: string;
    id: string;
    images: {
        height: number;
        url: string;
        width: number;
    }[];
    type: string;
    uri: string;
}

interface Track {
    album: {
        album_type: string;
        artists: {
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
        }[];
        available_markets: string[];
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        images: {
            height: number;
            url: string;
            width: number;
        }[];
        name: string;
        release_date: string;
        release_date_precision: string;
        total_tracks: number;
        type: string;
        uri: string;
    };
    artists: {
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
    }[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: {
        isrc: string;
    };
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
}

interface PlaylistItem {
    added_at: string;
    added_by: {
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    is_local: boolean;
    primary_color: string;
    track: Track;
    video_thumbnail: {
        url: string;
    };
}

interface TrackResponse {
    href: string;
    items: PlaylistItem[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

interface Playlist {
    colaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: {
        height: number;
        url: string;
        width: number;
    }[];
    name: string;
    owner: {
        display_name: string;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    public: boolean;
    snapshot_id: string;
    tracks: Track[];
    type: string;
    uri: string;
}

interface PlaylistResponse {
    href: string;
    items: Playlist[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}