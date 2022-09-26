import React, { useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import { connect } from 'react-redux';

import '../styles/list.sass';
import { removeItem } from '../redux/actions';

function ListItem({item, newlist, list}) {
  const [done, setDone] = useState('bg-false');

  const delItem = (i) => {
    const newList = list.filter((item) => item !== i);
    newlist(newList);
  }

  const itemDone = ({target}) => {
    const content = target.textContent;
    content === item ? setDone('bg-true') : setDone('bg-false');
  }

  return (
    <section
      className={ `list-item ${done}` }
      onClick={itemDone}
    >
      <p>{item}</p>

      <i>
        <RiCloseCircleFill
          onClick={() => delItem(item)}
        />
      </i>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => ({
  newlist: (state) => dispatch(removeItem(state)),
});

export default connect(null, mapDispatchToProps)(ListItem);
