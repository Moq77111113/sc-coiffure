import { getData } from "../data/get";

export const getPosts = async () => {
  try {
    const data = await getData("posts");
    return data;
  } catch (e) {
    console.log("Error fetching posts", e instanceof Error ? e.message : "");

    // TODO : send error by mail to admin
    return [];
  }
};
