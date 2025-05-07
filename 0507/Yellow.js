import React from 'react';
import dummy from '../data/product.json'; //노랑풍선 json파일 
import '../css/product.css';

function Yellow(props) {
  return (
    <article className='product'>
      <h3>테마로 만나는 상품</h3>
      <ul className='product_list'>
        {dummy.products.map(product=>(
          <li 
          key={product.id}>
          <img src={`${process.env.PUBLIC_URL}/images/${product.filename}`} alt=''/>
          <p>
            <span className='product_title'>{product.title}</span>
            <br />
            <span className='price'>{product.price}</span>
          </p>
        </li>
        ))}
      </ul>
    </article>
  );
}

export default Yellow;