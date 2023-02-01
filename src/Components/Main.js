import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import loading from "../images/loading.gif";

const url = "https://course-api.com/react-tours-project";
const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const request = await fetch(url);
      const response = await request.json();
      setIsLoading(false);
      setData(response);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const removItems = (id) => {
    const newData = data.filter((items) => {
      return id !== items.id;
    });
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <div className="loading">
          <img src={loading} />
        </div>
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <main>
        <div className="nomorex text-center">
          <div>
            <h2 className="text-center d-block">No more tour</h2> <br />
          </div>
          <div>
            <button className="btn btn-success" onClick={fetchData}>
              Reaload Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  return <Tours tour={data} fun={removItems} />;
};

export default Main;
