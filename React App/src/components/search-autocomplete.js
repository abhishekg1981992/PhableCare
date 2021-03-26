import React, { Component, Fragment } from "react";
import "../styles/autocomplete-styles.css";
import TutorialDataService from "../services/tutorial.service";

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: -1,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    };
  }

  onChange = (e) => {
    // const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    TutorialDataService.findByTitle(userInput)
      .then((response) => {
        this.setState({
          filteredSuggestions: response.data,
          activeSuggestion: -1,
          showSuggestions: true,
          userInput: userInput,
        });
        console.log("search results:" + JSON.stringify(response.data));
      })
      .catch((e) => {
        console.log(e);
      });

    // this.setState({
    //   activeSuggestion: 0,
    //   showSuggestions: true,
    //   userInput: e.currentTarget.value,
    // });
  };

  onClick = (movie) => {
    this.setState({
      activeSuggestion: -1,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    });

    this.props.selectMovie(movie);
  };

  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: -1,
        showSuggestions: false,
        // userInput: filteredSuggestions[activeSuggestion],
      });
      this.props.searchMovie(this.state.userInput);
    }
    //  else if (e.keyCode === 38) {
    //   if (activeSuggestion === 0) {
    //     return;
    //   }
    //   this.setState({ activeSuggestion: activeSuggestion - 1 });
    // }
    // // User pressed the down arrow, increment the index
    // else if (e.keyCode === 40) {
    //   if (activeSuggestion - 1 === filteredSuggestions.length) {
    //     return;
    //   }
    //   this.setState({ activeSuggestion: activeSuggestion + 1 });
    // }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              return (
                <li
                  className={className}
                  key={suggestion.id}
                  onClick={() => onClick(suggestion)}
                >
                  {suggestion.title}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions available.</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder="Search"
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
