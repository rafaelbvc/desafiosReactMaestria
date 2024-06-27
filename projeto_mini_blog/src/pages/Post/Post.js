import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument.js";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  console.log(post, "post");

  return (
    <div className={styles.post_container}>
      {post && (
        <>
          {loading && <p>Carregando...</p>}
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
          {post.tags.map((tag, index) => (
            <p key={index}>
              <span>#</span>{tag}
            </p>
          ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
