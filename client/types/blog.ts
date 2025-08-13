export interface  IBlog {
  _id: string,
  title: string,
  description: string,
  picture: string,
  create_time: Date,
  is_deleted: boolean,
}
export interface IArticle {
  title: string,
  description: string,
  picture: any,
  create_time: Date,
  is_deleted: boolean,
}

export interface BlogState {
  posts: IBlog[],
  error: string,
  article: IBlog,
  formAddArticle: IArticle,
  successAdd: boolean,
}
export enum BlogActionTypes {
    FETCH_BLOGS = 'FETCH_BLOGS',
    FETCH_BLOGS_ERROR = 'FETCH_BLOGS_ERROR',
    FETCH_ONE_ARTICLE = 'FETCH_ONE_ARTICLE',
    FETCH_ONE_ARTICLE_ERROR = 'FETCH_ONE_ARTICLE_ERROR',
    EDIT_ARTICLE = 'EDIT_ARTICLE',
    EDIT_ARTICLE_ERROR = 'EDIT_ARTICLE_ERROR',
    CHANGE_VALUE_ARTICLE = 'CHANGE_VALUE_ARTICLE',
    ADD_ONE_ARTICLE = 'ADD_ONE_ARTICLE',
    ADD_ONE_ARTICLE_ERROR = 'ADD_ONE_ARTICLE_ERROR',
    ADD_NEW_VALUE_FORM_ARTICLE = 'ADD_NEW_VALUE_FORM_ARTICLE',
    SHOW_ERROR = 'SHOW_ERROR',
    DELETE_ONE_ARTICLE = 'DELETE_ONE_ARTICLE',
    DELETE_ONE_ARTICLE_ERROR = 'DELETE_ONE_ARTICLE_ERROR',
    SHOW_MODAL_DELETE_ARTICLE = 'SHOW_MODAL_DELETE_ARTICLE'

}
interface FetchBlogsAction {
  type: BlogActionTypes.FETCH_BLOGS;
  payload: IBlog[]
}
interface  FetchOneArticleAction {
  type: BlogActionTypes.FETCH_ONE_ARTICLE;
  payload: IBlog
}
interface EditArticleAction {
  type: BlogActionTypes.EDIT_ARTICLE,
  payload: IBlog
}
interface EditArticleErrorAction {
  type: BlogActionTypes.EDIT_ARTICLE_ERROR,
  payload: string
}
interface DeleteArticleAction {
  type: BlogActionTypes.DELETE_ONE_ARTICLE;
}
interface DeleteArticleErrorAction {
  type: BlogActionTypes.DELETE_ONE_ARTICLE_ERROR;
  payload: string
}

interface FetchOneArticleErrorAction {
  type: BlogActionTypes.FETCH_ONE_ARTICLE_ERROR;
  payload: string
}
interface ChangeValueArticleAction {
  type: BlogActionTypes.CHANGE_VALUE_ARTICLE,
  payload: {
    key: keyof IBlog,
    value: any
  }
}
interface ShowErrorAction {
  type: BlogActionTypes.SHOW_ERROR,
  payload: string
}
interface AddValueToFormAddArticleAction {
  type: BlogActionTypes.ADD_NEW_VALUE_FORM_ARTICLE,
  payload: {
    key: keyof IArticle,
    value: any
  }
}

interface FetchBlogsErrorAction {
  type: BlogActionTypes.FETCH_BLOGS_ERROR;
  payload: string
}
interface AddOneArticleAction {
  type: BlogActionTypes.ADD_ONE_ARTICLE;
  payload: { successAdd: true }
}
interface AddOneArticleErrorAction {
  type: BlogActionTypes.ADD_ONE_ARTICLE_ERROR;
  payload: string
}


export type BlogAction = FetchBlogsAction |
                          FetchBlogsErrorAction |
                          FetchOneArticleAction |
                          EditArticleAction |
                          DeleteArticleAction |
                          EditArticleErrorAction |
                          ChangeValueArticleAction |
                          AddOneArticleAction |
                          AddOneArticleErrorAction |
                          AddValueToFormAddArticleAction |
                          ShowErrorAction |
                          DeleteArticleErrorAction |
                          FetchOneArticleErrorAction;