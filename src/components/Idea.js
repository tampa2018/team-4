import React from 'react';

const Idea = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleUpVoteOption(props.optionText);
        //props.handleRankOption(props.optionText);
      }}
    >
      {/* remove */}
      upvote
      </button>
  </div>
);

export default Idea;
