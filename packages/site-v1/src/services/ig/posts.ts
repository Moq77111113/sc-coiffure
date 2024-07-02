import { getData } from '../data/get';

export const getPosts = async () => {
  try {
    const data = await getData('posts');

    const validPosts = await Promise.all(
      data.map(async (post) => {
        const response = await fetch(post.media_url).catch(() => null);
        return response?.ok ? post : null;
      })
    ).then((posts) =>
      posts.filter<(typeof data)[number]>(
        (_): _ is (typeof data)[number] => !!_
      )
    );
    return validPosts;
  } catch (e) {
    console.log('Error fetching posts', e instanceof Error ? e.message : '');

    // TODO : send error by mail to admin
    return [];
  }
};

export const getRandomPost = async () => {
  const posts = await getPosts();
  return posts.length ? posts[Math.floor(Math.random() * posts.length)] : null;
};
