export interface UserMention {
    screen_name: string;
    name: string;
    id: any;
    id_str: string;
    indices: number[];
}

export interface Url {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

export interface Entities {
    hashtags: any[];
    symbols: any[];
    user_mentions: UserMention[];
    urls: Url[];
}

export interface Metadata {
    iso_language_code: string;
    result_type: string;
}

export interface Description {
    urls: any[];
}

export interface Url3 {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

export interface Url2 {
    urls: Url3[];
}

export interface Entities2 {
    description: Description;
    url: Url2;
}

export interface User {
    id: any;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url: string;
    entities: Entities2;
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset?: number;
    time_zone: string;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang: string;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
    translator_type: string;
}

export interface Entities3 {
    hashtags: any[];
    symbols: any[];
    user_mentions: any[];
    urls: any[];
}

export interface Metadata2 {
    iso_language_code: string;
    result_type: string;
}

export interface Url5 {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

export interface Url4 {
    urls: Url5[];
}

export interface Description2 {
    urls: any[];
}

export interface Entities4 {
    url: Url4;
    description: Description2;
}

export interface User2 {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url: string;
    entities: Entities4;
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset: number;
    time_zone: string;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang: string;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
    translator_type: string;
}

export interface QuotedStatus {
    created_at: string;
    id: number;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: Entities3;
    metadata: Metadata2;
    source: string;
    in_reply_to_status_id?: any;
    in_reply_to_status_id_str?: any;
    in_reply_to_user_id?: any;
    in_reply_to_user_id_str?: any;
    in_reply_to_screen_name?: any;
    user: User2;
    geo?: any;
    coordinates?: any;
    place?: any;
    contributors?: any;
    is_quote_status: boolean;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    lang: string;
}

export interface Entities5 {
    hashtags: any[];
    symbols: any[];
    user_mentions: any[];
    urls: any[];
}

export interface Metadata3 {
    iso_language_code: string;
    result_type: string;
}

export interface Url7 {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

export interface Url6 {
    urls: Url7[];
}

export interface Description3 {
    urls: any[];
}

export interface Entities6 {
    url: Url6;
    description: Description3;
}

export interface User3 {
    id: any;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url: string;
    entities: Entities6;
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset: number;
    time_zone: string;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang: string;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
    translator_type: string;
}

export interface BoundingBox {
    type: string;
    coordinates: number[][][];
}

export interface Attributes {
}

export interface Place {
    id: string;
    url: string;
    place_type: string;
    name: string;
    full_name: string;
    country_code: string;
    country: string;
    contained_within: any[];
    bounding_box: BoundingBox;
    attributes: Attributes;
}

export interface RetweetedStatus {
    created_at: string;
    id: any;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: Entities5;
    metadata: Metadata3;
    source: string;
    in_reply_to_status_id?: number;
    in_reply_to_status_id_str: string;
    in_reply_to_user_id?: number;
    in_reply_to_user_id_str: string;
    in_reply_to_screen_name: string;
    user: User3;
    geo?: any;
    coordinates?: any;
    place: Place;
    contributors?: any;
    is_quote_status: boolean;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    lang: string;
}

export interface Status {
    created_at: string;
    id: any;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: Entities;
    metadata: Metadata;
    source: string;
    in_reply_to_status_id?: number;
    in_reply_to_status_id_str: string;
    in_reply_to_user_id?: number;
    in_reply_to_user_id_str: string;
    in_reply_to_screen_name: string;
    user: User;
    geo?: any;
    coordinates?: any;
    place?: any;
    contributors?: any;
    is_quote_status: boolean;
    quoted_status_id: number;
    quoted_status_id_str: string;
    quoted_status: QuotedStatus;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    possibly_sensitive: boolean;
    lang: string;
    retweeted_status: RetweetedStatus;
}

export interface SearchMetadata {
    completed_in: number;
    max_id: number;
    max_id_str: string;
    next_results: string;
    query: string;
    refresh_url: string;
    count: number;
    since_id: number;
    since_id_str: string;
}

export interface SearchResult {
    statuses: Status[];
    search_metadata: SearchMetadata;
}