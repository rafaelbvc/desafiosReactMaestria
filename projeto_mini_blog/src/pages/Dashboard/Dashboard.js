import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContex";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div>
          <p>Tem posts!</p>
        </div>
      )}
      {loading && <p>Carregando...</p>}
      {posts && posts.map((post, index) => <h3 key={index}>{post.title}</h3>)}
    </div>
  );
};

export default Dashboard;
