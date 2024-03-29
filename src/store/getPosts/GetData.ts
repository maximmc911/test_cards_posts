import axios from "axios";
import { useDispatch } from "react-redux";
import { actions } from "./getPosts";
import { RandomGenerator } from "../../mixins/features";

export const URL: string = `https://jsonplaceholder.typicode.com/posts`;
export const GetData = (): void => {
  const dispach = useDispatch();
  const GetCatalogPosts = async (): Promise<void> => {
    try {
      const dataPost = [];
      const { data } = await axios.get(URL);

      for (const iterator of data) {
        iterator.like = RandomGenerator(0, 50);

        iterator.dislike = RandomGenerator(0, 50);
        dataPost.push(iterator);
      }
      dispach(actions.handleGetPosts(dataPost));
    } catch (error) {
      alert(`Возникла внутрення ошибка, попробуйте зайти на сайт позже `);
      console.log(`ошибка`);
    }
  };

  GetCatalogPosts();
};
