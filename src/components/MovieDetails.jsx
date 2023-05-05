import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./movieDetails.css";
import BookTicket from "./BookTicket";

const API_URL = "https://api.tvmaze.com/shows";

const MovieDetails = ({ match }) => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      console.log(data);
      setShow(data);
    };
    fetchShow();
  }, [id]);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div>
      {show ? (
        <div className="movieDetail">
          <div className="movie">
            <div>
              <p>{show.Year}</p>
            </div>
            <div>
              <img
                src={
                  show.image !== null
                    ? show.image.medium
                    : "https://via.placeholder.com/400"
                }
                alt={show.Title}
              />
            </div>
            <div>
              <span>{show.type}</span>
              <h3>{show.name}</h3>
            </div>
          </div>

          <div className="info">
            <p>{show.summary}</p>

            <button onClick={showFormHandler} className="btn">
              BOOK TICKET
            </button>
            <Link to={`/`}>
              <button className="btn">HOME</button>
            </Link>
          </div>
          {showForm ? <BookTicket onSubmitForm={hideFormHandler} /> : null}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
