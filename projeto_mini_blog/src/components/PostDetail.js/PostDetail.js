import styles from "./PostDetail.module.css";
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  console.log(post, "postdetails post");

  console.log(typeof post.tags, "posdetails tags");

  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {Array.isArray(post.tags) &&
          post.tags.map((tag, i) => (
            <p key={i}>
              <span>#</span>
              {tag}
            </p>
          ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
