import axios from "axios";
import { useState, useEffect } from "react";

export default function RQsuperHeriosPage() {
  const [isloading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/heros")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (isloading) {
    return <div>isLoading...</div>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      {data.map((hero) => {
        return <h2 key={hero.id}>{hero.name}</h2>;
      })}
    </>
  );
}
