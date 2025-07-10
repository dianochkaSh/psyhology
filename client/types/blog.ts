export interface  IBlog {
  _id: string,
  title: string,
  description: string,
  picture: string
}
export interface BlogState {
  posts: IBlog[],
  error: string,
  article: IBlog
}
export enum BlogActionTypes {
    FETCH_BLOGS = 'FETCH_BLOGS',
    FETCH_BLOGS_ERROR = 'FETCH_BLOGS_ERROR',
    FETCH_ONE_ARTICLE = 'FETCH_ONE_ARTICLE',
    FETCH_ONE_ARTICLE_ERROR = 'FETCH_ONE_ARTICLE_ERROR',

}
interface FetchBlogsAction {
  type: BlogActionTypes.FETCH_BLOGS;
  payload: IBlog[]
}
interface  FetchOneArticleAction {
  type: BlogActionTypes.FETCH_ONE_ARTICLE;
  payload: IBlog
}

interface FetchOneArticleErrorAction {
  type: BlogActionTypes.FETCH_ONE_ARTICLE_ERROR;
  payload: string
}

interface FetchBlogsErrorAction {
  type: BlogActionTypes.FETCH_BLOGS_ERROR;
  payload: string
}
export type BlogAction = FetchBlogsAction | FetchBlogsErrorAction | FetchOneArticleAction | FetchOneArticleErrorAction;