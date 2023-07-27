export interface User {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

export interface Blog {
  blogId: number;
  blogTitle: string;
  blogDescription: string;
}

export interface Comment {
  blogId: number;
  commentDetail: string;
}
