import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import AddBooksToCart from '../container/AddBooksToCart';

const Title = ({ name, author, price }) => (
  <h3 title={name}>
    <p style={{
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      width: 200,
      textAlign: 'center'
    }}>{name}</p>

    <span>- {" "}{author}</span>
    <p>{"$ "}{price}</p>
  </h3>
);

const Details = ({ book, className }) => {
  const {
    name,
    author,
    price,
    stars,
    read
  } = book;

  return (
    <div className={className}>
      <Title
        name={name}
        author={author}
        price={price}
      />

      <Stars amount={stars} />

      <div className="details-footer">
        <div style={{ textAlign: 'center' }}>
          <i style={{ color: '#000', padding: '16px 8px' }} className="far fa-eye" />
          {read.toLocaleString()}
        </div>

        <AddBooksToCart book={book} />
      </div>
    </div>
  );
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

Details.propTypes = {
  book: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};

export default Details;