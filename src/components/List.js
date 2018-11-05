import React from 'react';

function List(props) {
  return(
    <ul id={props.id}>
      {props.items.map(item => (
        <li key={item.id}>
          <span 
            onClick={() => props.toogle && props.toogle(item)}
            style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
            {item.name}
          </span>
          <button onClick={() => props.remove(item)}>
          X
          </button>
        </li>
      ))}
    </ul>
  )
};

export default List;