
export interface Facets {
}

export interface MediaEmbed {
}

export interface SecureMediaEmbed {
}

export interface Source {
    url: string;
    width: number;
    height: number;
}

export interface Resolution {
    url: string;
    width: number;
    height: number;
}

export interface Variants {
}

export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
}

export interface Preview {
    images: Image[];
    enabled: boolean;
}

export interface Data2 {
    contest_mode: boolean;
    subreddit_name_prefixed: string;
    banned_by?: any;
    media_embed: MediaEmbed;
    thumbnail_width?: number;
    subreddit: string;
    selftext_html: string;
    selftext: string;
    likes?: any;
    suggested_sort?: any;
    user_reports: any[];
    secure_media?: any;
    link_flair_text: string;
    id: string;
    view_count?: any;
    secure_media_embed: SecureMediaEmbed;
    clicked: boolean;
    report_reasons?: any;
    author: string;
    saved: boolean;
    mod_reports: any[];
    name: string;
    score: number;
    approved_by?: any;
    over_18: boolean;
    domain: string;
    hidden: boolean;
    thumbnail: string;
    subreddit_id: string;
    edited: any;
    link_flair_css_class: string;
    author_flair_css_class: string;
    gilded: number;
    downs: number;
    brand_safe: boolean;
    archived: boolean;
    removal_reason?: any;
    can_gild: boolean;
    thumbnail_height?: number;
    hide_score: boolean;
    spoiler: boolean;
    permalink: string;
    num_reports?: any;
    locked: boolean;
    stickied: boolean;
    created: number;
    url: string;
    author_flair_text: string;
    quarantine: boolean;
    title: string;
    created_utc: number;
    distinguished?: any;
    media?: any;
    num_comments: number;
    is_self: boolean;
    visited: boolean;
    subreddit_type: string;
    is_video: boolean;
    ups: number;
    preview: Preview;
    post_hint: string;
}

export interface Child {
    kind: string;
    data: Data2;
}

export interface Data {
    facets: Facets;
    modhash: string;
    children: Child[];
    after: string;
    before?: any;
}

export interface RedditRootObject {
    kind: string;
    data: Data;
}


