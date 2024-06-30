import React from 'react';

const TagList = ({ tags }) => {
  return (
    <div className='tag-container'>
      {tags.map((tag, index) => (
        <div key={index} className='tag'>{tag}</div>
      ))}
    </div>
  );
};

export default TagList;
