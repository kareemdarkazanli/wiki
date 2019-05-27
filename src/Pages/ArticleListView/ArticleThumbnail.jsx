import React from 'react';
import {Link} from 'react-router-dom';

export default ({title="", thumbnail={}}) => {

  const {src, alt, title:imageTitle} = thumbnail;

  return (
    <li className="article-thumbnail">
      <Link to={`/${title.toLowerCase()}`}>
        <img src={src} alt={alt} title={imageTitle} />
        <p>{title[0].toUpperCase() + title.substring(1)}</p>
      </Link>
    </li>

  )
}
