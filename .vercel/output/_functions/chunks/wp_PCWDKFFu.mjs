const domain = "https://thinkglobalconsultants.allanmendoza.tech/";
const apiUrl = `${domain}/wp-json/wp/v2`;
const getLastestPost = async ({
  perPage = 10
}) => {
  try {
    const response = await fetch(`${apiUrl}/posts?per_page=${perPage}&_embed`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    } else {
      const result = await response.json();
      if (!result.length) {
        throw new Error("No posts found");
      }
      const posts = result.map(
        (post) => {
          const {
            title: { rendered: title },
            content: { rendered: content },
            excerpt: { rendered: excerpt },
            date,
            slug
          } = post;
          const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          return { title, content, excerpt, date, slug, featuredImage };
        }
      );
      return posts;
    }
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    throw error;
  }
};
const getPostInfo = async (slug) => {
  try {
    const response = await fetch(`${apiUrl}/posts?slug=${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    } else {
      const [result] = await response.json();
      const {
        title: { rendered: title },
        content: { rendered: content }
      } = result;
      return { title, content };
    }
  } catch (error) {
    console.error("Error fetching post info:", error);
    throw error;
  }
};

export { getPostInfo as a, getLastestPost as g };
