import React from "react";
import "../styles/modal.css";
export default class MovieInfoModal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentIndex: -1,
    };
  }

  componentDidMount() {
    console.log("inside componentDidMount");
  }

  onClose = (e) => {
    this.props.toggleDisplay(false);
  };

  render() {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    let movieList = this.props.movies;
    const { currentIndex } = this.state;
    const movieDetails = this.props.movieDetails;

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
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
                <strong>Released:</strong>
              </label>{" "}
              {movieDetails.published}
            </div>
            <div>
              <label>
                <strong>Director:</strong>
              </label>{" "}
              {movieDetails.director}
            </div>
            <div>
              <label>
                <strong>Genre:</strong>
              </label>{" "}
              {movieDetails.genre}
            </div>
            <div>
              <label>
                <strong>Plot:</strong>
              </label>{" "}
              {movieDetails.description}
            </div>
          </div>

          <button type="button" onClick={this.onClose}>
            Close
          </button>
        </section>
      </div>
    );
  }
}
