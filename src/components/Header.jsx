import React, { useState } from 'react';
import { MdPlaylistAdd } from 'react-icons/md';
import { SiTodoist } from 'react-icons/si';
import { connect } from 'react-redux';

import '../styles/header.sass';
import { addItem } from '../redux/actions';

function Header({ list }) {
  const [isDisable, setIsDisable] = useState(true);
  const [item, setItem] = useState('');
  
  const handleClick = (e) => {
    e.preventDefault();

    setTimeout(() => {
      list(item);
    }, 1000);    
  }

  const handleChange = ({ target }) => {
    const { value } = target;

    if (value.length > 2) {
      setIsDisable(false);
      setItem(value);
    } else {
      setIsDisable(true);
    }
  }

  return (
    <header>
      <section>
        <SiTodoist className='logo' />
        <h1>Minhas<br />tarefas</h1>
      </section>

      <form>
        <section>
          <input
            type='text'
            placeholder='Digite suas tarefas aqui'
            onChange={handleChange}
            maxLength='23'
          />
        </section>

        <section>
          <button
            type='submit'
            disabled={isDisable}
            onClick={handleClick}
          >
            Adicionar
            <MdPlaylistAdd
              className='add-icon'
            />
          </button>
        </section>
      </form>
    </header>
  );
}

const mapDispatchToProps = dispatch => ({
  list: (state) => dispatch(addItem(state))
});

export default connect(null, mapDispatchToProps)(Header);
