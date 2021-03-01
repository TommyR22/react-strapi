import React, {useEffect} from 'react';
import "./Post.scss"
import {faUser, faCalendar, faTags, faClock} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Post({info, index}) {
    const urlStrapi = 'http://localhost:1337';

    useEffect(() => {

    }, []);

    function isEven(value) {
        if (value%2 == 0)
            return true;
        else
            return false;
    }

    return (
        /*<div className={`post`}>
            <article className="card" role="article">
                <a href="#">
                    <div className="card-text">
                        <div className="card-meta">Architecture</div>
                        <h2 className="card-title">{`${info.Title}`}</h2>
                    </div>
                    <img className="card-image" src={`${urlStrapi}${info.image.url}`}/>
                </a>
            </article>
        </div>*/
        <div className={`blog-card ${!isEven(index) ? "alt" : ""}`}>
            <div className="meta">
                <div className="photo" style={{backgroundImage: `url(${urlStrapi}${info.image.url}`}}></div>
                <ul className="details">
                    <li><FontAwesomeIcon icon={faUser} className="icon"/><a href="#">{`${info.author}`}</a></li>
                    <li><FontAwesomeIcon icon={faCalendar} className="icon"/>{`${info.published}`}</li>
                    <li>
                        <ul>
                            <FontAwesomeIcon icon={faTags} className="icon"/>
                            <li><a href="#">{`${info.MetaTagTime.MetaTags}`}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description">
                <h1>{`${info.Title}`}</h1>
                {/*<h2>Opening a door to the future</h2>*/}
                <p> {`${info.content}`}</p>
                <p className="read-more">
                    <FontAwesomeIcon icon={faClock} className="icon__black"/><a href="#">{`${info.MetaTagTime.AvgReadTime}`}</a><br></br>
                    Comments: <a href="#">{`${info.comments.length}`}</a>
                </p>
            </div>
        </div>

    );
}

export default Post;
