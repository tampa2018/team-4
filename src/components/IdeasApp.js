import React from 'react';
import AddIdea from './AddIdea';
import Header from './Header';
import Ideas from './Ideas';

export default class IdeasApp extends React.Component {
  state = {
    options: [],
    rank: [],
    selectedOption: undefined
  };
  //Maybe for admin
  // handleDeleteIdeas = () => {
  //   this.setState(() => ({ options: [] }));
  // };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleUpVoteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This idea already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = '100 Great Ideas';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <div className="widget">
            <Ideas
              options={this.state.options}
              // handleDeleteIdeas={this.handleDeleteIdeas}
              handleUpVoteOption={this.handleUpVoteOption}
            />
            <AddIdea
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
      </div>
    );
  }
}
