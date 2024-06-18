import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [urlID, setUrlID] = useState(url);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }

    if (method === "DELETE") {
      let productUrlId = `${url}/${data}`;
      setConfig({
        method,
      });
      setMethod(method);
      setUrlID(productUrlId);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);

        const data = await res.json();

        setData(data);
      } catch (e) {
        setError("Houve algum error ao carregar os dados...");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "DELETE") {
        await fetch(urlID, { method: method });
        setCallFetch(null);
      }

      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();
        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url, urlID]);

  return { data, httpConfig, loading, error };
};
