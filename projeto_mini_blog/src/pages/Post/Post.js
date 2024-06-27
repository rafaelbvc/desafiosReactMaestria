import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument.js";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  console.log(post, "post");

  return (
    <div className={styles.post}>
      {post && (
        <>
          {loading && <p>Carregando...</p>}
          <h1>{post.title}</h1>
        </>
      )}
    </div>
  );
};

export default Post;
