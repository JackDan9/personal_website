export interface Meta {
    views: number;
    likes: number;
    comments: number;
  }
  
  export interface List {
    category?: string[];
    created_time: string;
    desc: string;
    img_url?: string;
    meta?: Meta;
    tags?: string[];
    title: string;
    id: number;
  }
  
  export interface ArticlesData {
    count?: number;
    list: List | any;
  }
  
  