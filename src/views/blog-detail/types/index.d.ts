export interface Meta {
  views: number;
  likes: number;
  comments: number;
}

export interface ToUser {
  user_id: string;
  name: string;
  avatar: string;
  type: number;
}

// 文章详情
export interface OtherComments {
  content: string;
  create_time: string;
  likes: number;
  state: number;
  to_user: ToUser;
  user: ToUser;
  _id: string;
}
export interface Comments {
  article_id: string;
  content: string;
  create_time: string;
  id: number;
  is_handle: number;
  is_top: boolean;
  likes: number;
  other_comments: OtherComments[];
  state: number;
  update_time: string;
  user: ToUser;
  user_id: string;
  __v: number;
  _id: string;
}

export interface ArticleDetailIF {
  toc?: string;
  _id?: string;
  author?: string;
  category?: Array<object>;
  comments?: Array<Comments>;
  created_time: string;
  desc?: string;
  content?: string;
  content_url?: string;
  id: number;
  img_url?: string;
  numbers?: number;
  keyword?: Array<string>;
  like_users?: Array<object>;
  meta?: Meta;
  origin?: number;
  state?: number;
  tags?: Array<object>;
  title?: string;
  updated_time?: string;
}

export interface ArticleDetailParams {
  id: string | string[];
  type?: number;
}