import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import SearchResults from "./search-results.component";
import MovieInfo from "./movie-info.component";
import MovieInfoModal from "./movie-info-modal";
import Autocomplete from "./search-autocomplete";

export default class SearchMovie extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.showMovieDetails = this.showMovieDetails.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      showModal: false,
    };
  }

  componentDidMount() {
    // this.retrieveTutorials();
  }

  showMovieDetails = (flag) => {
    this.setState({ showModal: flag });
  };

  selectMovie = (movieDetails) => {
    this.setState({
      currentTutorial: movieDetails,
      showModal: true,
    });
  };

  searchMovie = (input) => {
    this.setState(
      {
        searchTitle: input,
      },
      this.searchTitle
    );
  };

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then((response) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    // this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
      showModal: true,
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchTitle() {
    TutorialDataService.findByTitle(this.state.searchTitle)
      .then((response) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const {
      searchTitle,
      tutorials,
      currentTutorial,
      currentIndex,
      showModal,
    } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            {/* <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div> */}
            <Autocomplete
              selectMovie={this.selectMovie}
              searchMovie={this.searchMovie}
            />
          </div>
        </div>
        <SearchResults
          movies={tutorials}
          setActiveTutorial={this.setActiveTutorial}
        />
        {showModal && (
          <MovieInfoModal
            show={showModal}
            movieDetails={currentTutorial}
            toggleDisplay={this.showMovieDetails}
          />
        )}
      </div>
    );
  }
}
