import React from 'react';
import './article.css';

const Article = ({ imgUrl, category, date, title }) => {
  return (
    <div className="nextensio__blog-container_article">
        {/*Image for each container*/}
        <div className="nextensio__blog-container_article-image">
          <img src={ imgUrl } alt="blog"/>
        </div>

        {/*Text for each container*/}
        <div className="nextensio__blog-container_article-content">
          {/*Each parameter passed through is custom*/}
          <div>
            <h2 className="gradient__text">{category}</h2>
            <h3>{title}</h3>
          </div>
            <p>{date}</p>
            {/*If we want every container to output the same text, we can specify it here*/}
            {/*<p>Read Full Article</p>*/}
        </div>

    </div>
  )
}

export default Article