export interface UserI {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostCardI {
  item: UserI;
}
