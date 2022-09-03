import axios from "axios";
import { useState, useEffect } from "react";

export default function RQsuperHeriosPage() {
  const [isloading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/heros").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (isloading) {
    return <div>isLoading...</div>;
  }
  return (
    <>{data.map((hero) => {
        return <h2 key={hero.id}>{hero.name}</h2>
    })}</>
  )
}
