import { useEffect, useState } from "react";
interface ApodData {
  hdurl?: string;
  url: string;
  title: string;
  explanation: string;
  date: string;
  media_type: string;
}

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  //<ApodData | null> tells Typescript that the data can be an Apod object or null
  const [data, setData] = useState<ApodData | null>(null);
  function handleToggleModal() {
    setShowModal(!showModal);
  }

  //Takes in a function and a depenency array. If we have a blank depency array, then run function everytime page loads.
  //If there is something in the array, then we only run the function when the variable gets updated
  useEffect(() => {
    //defining the function
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        setData(apiData);
        console.log(apiData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          const errorMessage: string = error.message;
          console.error(errorMessage);
        } else {
          console.error("An unknown error occurred.");
        }
      }
    }
    //calling the function
    fetchAPIData();
  }, []);
  return (
    <>
      {data && (
        <div className="card" style={{ width: "18rem" }}>
          <img src={data.hdurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">APOD project</p>
            <button onClick={handleToggleModal} className="btn btn-primary">
              More info
            </button>
          </div>
        </div>
      )}
    </>
  );
}
