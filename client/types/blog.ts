export interface  IBlog {
  _id: string,
  title: string,
  description: string,
  picture: string
}
export interface IArticle {
  title: string,
  description: string,
  picture: any
}
export interface BlogState {
  posts: IBlog[],
  error: string,
  article: IBlog,
  formAddArticle: IArticle
}
export enum BlogActionTypes {
    FETCH_BLOGS = 'FETCH_BLOGS',
    FETCH_BLOGS_ERROR = 'FETCH_BLOGS_ERROR',
    FETCH_ONE_ARTICLE = 'FETCH_ONE_ARTICLE',
    FETCH_ONE_ARTICLE_ERROR = 'FETCH_ONE_ARTICLE_ERROR',
    DELETE_ARTICLE = 'DELETE_ARTICLE',
    EDIT_ARTICLE = 'EDIT_ARTICLE',
    EDIT_ARTICLE_ERROR = 'EDIT_ARTICLE_ERROR',
    CHANGE_VALUE_ARTICLE = 'CHANGE_VALUE_ARTICLE',
    ADD_ONE_ARTICLE = 'ADD_ONE_ARTICLE',
    ADD_ONE_ARTICLE_ERROR = 'ADD_ONE_ARTICLE_ERROR',
    ADD_NEW_VALUE_FORM_ARTICLE = 'ADD_NEW_VALUE_FORM_ARTICLE'

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
  type: BlogActionTypes.DELETE_ARTICLE
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
  payload: IArticle
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
                          FetchOneArticleErrorAction;