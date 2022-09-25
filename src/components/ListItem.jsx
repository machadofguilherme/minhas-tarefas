import React, { useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import { connect } from 'react-redux';

import '../styles/list.sass';
import { removeItem } from '../redux/actions';

function ListItem({item, newlist, list}) {
  const [done, setDone] = useState('');

  const delItem = (i) => {
    const newList = list.filter((item) => item !== i);
    newlist(newList);
  }

  const itemDone = ({target}) => {
    const check = target.checked;
    const content = target.textContent;

    if (content === item) {
      check ? setDone('bg-true') : setDone('');
    }
  }

  return (
    <label
      className={ `list-item ${done}` }
      htmlFor='done' onClick={itemDone}
    >
      <p>{item}</p>

      <i>
        <RiCloseCircleFill
          onClick={() => delItem(item)}
        />
      </i>

      <input
        type='checkbox'
        className='hide'
        id='done'
      />
    </label>
  )
}

const mapDispatchToProps = (dispatch) => ({
  newlist: (state) => dispatch(removeItem(state)),
});

export default connect(null, mapDispatchToProps)(ListItem);
