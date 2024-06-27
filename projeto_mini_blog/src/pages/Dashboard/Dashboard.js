import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContex";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const posts = [];

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">Criar primeiro post</Link>
        </div>   
      ) : (
        <div>
          <p>Tem posts!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
