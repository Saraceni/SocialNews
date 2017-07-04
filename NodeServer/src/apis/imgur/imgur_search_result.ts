export interface DescriptionAnnotations {
}

export interface Tag {
    name: string;
    display_name: string;
    followers: number;
    total_items: number;
    following: boolean;
    background_hash: string;
    background_is_animated: boolean;
    is_promoted: boolean;
    description: string;
    logo_hash?: any;
    logo_destination_url?: any;
    description_annotations: DescriptionAnnotations;
    accent?: any;
}

export interface Datum {
    id: string;
    title: string;
    description: string;
    datetime: number;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    views: number;
    bandwidth: any;
    vote?: any;
    favorite: boolean;
    nsfw: boolean;
    section: string;
    account_url: string;
    account_id?: number;
    is_ad: boolean;
    in_most_viral: boolean;
    tags: Tag[];
    ad_type: number;
    ad_url: string;
    in_gallery: boolean;
    topic: string;
    topic_id: number;
    mp4: string;
    gifv: string;
    mp4_size: number;
    link: string;
    looping: boolean;
    comment_count: number;
    ups: number;
    downs: number;
    points: number;
    score: number;
    is_album: boolean;
    cover: string;
    cover_width?: number;
    cover_height?: number;
    privacy: string;
    layout: string;
    images_count?: number;
}

export interface ImgurRootObject {
    data: Datum[];
    success: boolean;
    status: number;
}

