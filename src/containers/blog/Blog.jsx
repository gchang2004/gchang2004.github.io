import React from 'react';
import { Article } from '../../components';
import { ladder_v2, mobile_v2, puzzle_v2, thinker_v2, AWS, WSJ } from './imports'; 
import './blog.css';

const Blog = () => {
  return (
    <div className="nextensio__blog section__padding" id="blog" >
        {/*Blog title*/}
        <div className="nextensio__blog-heading">
          <h1 className="gradient__text">Take a look at what's new. <br />A lot is happening.</h1>
        </div>

        {/* <Article /> is a component template imported here for use*/}
        <div className="nextensio__blog-container">
           {/*Main spotlight container*/}
          <div className="nextensio__blog-container_groupA">
            <a href="https://www.youtube.com/watch?v=p7MqvJAKLoM">
              <Article imgUrl={WSJ} category="Education" date="December 2, 2019" title="How Cloud Computing Became a Big Tech Battleground | WSJ"/></a>
            <a href="https://www.youtube.com/watch?v=mxT233EdY5c">
              <Article imgUrl={AWS} category="Education" date="July 14, 2021" title="What is Cloud Computing? | Amazon Web Services"/></a>
          </div>

          {/*Gradient Bar*/}
          <div className="nextensio__blog-gradient-bar">
            <div />
          </div>

          {/*Secondary containers*/}
          <div className="nextensio__blog-container_groupB">
            <a href="https://nextensio.io/f/deploying-different-versions-of-cloud-applications-seamlessly?blogcategory=Cloud+Apps">
              <Article imgUrl={thinker_v2} category="Cloud Apps" date="January 29, 2022" title="Deploying different versions of cloud application seamlessly" /></a>
            <a href="https://nextensio.io/f/cloud-migration?blogcategory=Cloud+Strategy">
              <Article imgUrl={puzzle_v2} category="Cloud Strategy" date="January 22, 2022" title="Cloud Migration is gaining momentum across all industries alike" /></a>
            <Article imgUrl={mobile_v2} category="Feature" date="March 5, 2004" title="Nextensio expands commitment to protect users from mercenary spyware" />
            <Article imgUrl={ladder_v2} category="Update"date="March 5, 2004" title="Nextensio powers ahead in new cloud migration solutions with over 100+ customers" />
          </div>
        </div>

    </div>
  )
}

export default Blog