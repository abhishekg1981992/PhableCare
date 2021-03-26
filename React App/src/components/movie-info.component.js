import React, { Component } from "react";

export default class MovieInfo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentIndex: -1,
    };
  }

  render() {
    let movieList = this.props.movies;
    const { currentIndex } = this.state;
    const movieDetails = this.props.movieDetails;

    return (
      <div className="col-md-6">
        {movieDetails ? (
          <div>
            <h4>Movie</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {movieDetails.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {movieDetails.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {movieDetails.published ? "Published" : "Pending"}
            </div>

            {/* <Link
              to={"/tutorials/" + currentTutorial.id}
              className="badge badge-warning"
            >
              Edit
            </Link> */}
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}
