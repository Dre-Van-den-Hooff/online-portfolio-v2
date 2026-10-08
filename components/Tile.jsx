import React from 'react';

// A bento tile. `area` places it in the grid; `index` staggers the entrance animation.
const Tile = ({ area, index = 0, className = '', as: Tag = 'section', children, ...rest }) => (
  <Tag
    className={`tile ${className}`}
    style={{ gridArea: area, '--i': index }}
    {...rest}
  >
    {children}
  </Tag>
);

export default Tile;
