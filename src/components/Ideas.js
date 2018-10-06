import React from 'react';
import Idea from './Idea';

const Ideas = (props) => (
  <div>
    <div className="widget-header">
    {/* HERE CHANGE */}
      <h3 className="widget-header__title">IDEAS</h3>
    </div>
  {/* change!!! */}
    {props.options.length === 0 && <p className="widget__message">Please add an idea to the discussion!</p>}
    {
      props.options.map((option, index) => (
        <Idea
          key={option}
          optionText={option}
          // adding
          count={index + 1}
          handleUpVoteOption={props.handleUpVoteOption}
        />
      ))
    }
  </div>
);

export default Ideas;
