import React, { useEffect, useState } from 'react';
import { TbFaceIdError } from 'react-icons/tb';
import { connect } from 'react-redux';

import '../styles/list.sass';
import ListItem from './ListItem';

function List({list}) {
  const [items, setItems] = useState([]);

  useEffect(() => setItems(list));

  const renderList = (
      list
        .map((item, i) => (
          <ListItem key={i} item={item} list={items} />
      ))
    );
   
  return (
    <>
    {
      items.length !== 0
        ? (
            <section className='main-list'>
              { renderList }
            </section>
          )
        : (
            <main>  
              <h2>Nenhuma tarefa foi adicionada.</h2>
              <TbFaceIdError className='icon-error' /> 
            </main>
          )
    }
    </>
  );
}

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps)(List);
