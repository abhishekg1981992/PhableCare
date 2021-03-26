import React, { Component } from "react";

export default class SearchResults extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentIndex: -1,
    };

    this.setActiveTutorial = this.setActiveTutorial.bind(this);
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      //   currentTutorial: tutorial,
      currentIndex: index,
    });

    this.props.setActiveTutorial(tutorial, index);
  }

  render() {
    let movieList = this.props.movies;
    const { currentIndex } = this.state;
    return (
      <div className="col-md-6">
        {movieList.length > 0 && <h4>Movie List</h4>}
        <ul className="list-group">
          {movieList &&
            movieList.map((tutorial, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title}
              </li>
            ))}
        </ul>

        {/* <button
          className="m-3 btn btn-sm btn-danger"
          onClick={this.removeAllTutorials}
        >
          Remove All
        </button> */}
      </div>
    );
  }
}
