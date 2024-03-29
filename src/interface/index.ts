interface makeRoutes {
  id: string;
  path: string;
  element: JSX.Element;
}
interface getPost{
 
  id: number,
  userId: number,
  title: string,
  body: string,
  like?: number,
  dislike?: number,
}
interface Props{
  props?: getPost,
  prop?: boolean
}
interface page{
  number: number,
  active: boolean,
}
interface storeObject{
  pagination?: Array<getPost> | null,
  loader? : boolean,
  pages?: Array<page>,
  getPost?: Array<getPost>

}