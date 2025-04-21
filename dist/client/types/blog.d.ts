export interface IBlog {
    _id: string;
    title: string;
    description: string;
    picture: string;
}
export interface BlogState {
    posts: IBlog[];
    error: string;
}
export declare enum BlogActionTypes {
    FETCH_BLOGS = "FETCH_BLOGS",
    FETCH_BLOGS_ERROR = "FETCH_BLOGS_ERROR"
}
interface FetchBlogsAction {
    type: BlogActionTypes.FETCH_BLOGS;
    payload: IBlog[];
}
interface FetchBlogsErrorAction {
    type: BlogActionTypes.FETCH_BLOGS_ERROR;
    payload: string;
}
export type BlogAction = FetchBlogsAction | FetchBlogsErrorAction;
export {};
