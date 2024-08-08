import React from 'react';
import './PostArticle.css';

function PostArticle() {
    return <div className='article-div'>
        <div className='article-header-div'>
            <h2>What do you want to ask?</h2>
        </div>
        <div className="form-div">
            <form className="article-form">
                <div className="article-title-div">
                    <div className="title">Title: </div>
                    <div className="field">
                        <input type="text" id="article_title" name="textGroup" tabIndex="1" placeholder='Enter the title of your article here' style={{ width: "85%" }} />
                    </div>
                </div>
                <div className="article-body-div">
                    <div className="title">Abstract: </div>
                    <div className="field">
                        <textarea id="article_abstract" name="textGroup" tabIndex="2" placeholder='Enter a 1-paragraph abstract' style={{ width: "95%", height: "100px" }} />
                    </div>
                </div>
                <div className="article-body-div">
                    <div className="title">Article Text: </div>
                    <div className="field">
                        <textarea id="article_body" name="textGroup" tabIndex="3" placeholder='Enter a the article text' style={{ width: "95%", height: "250px" }} />
                    </div>
                </div>
                <div className="article-tags-div">
                    <div className="title">Tags: </div>
                    <div className="field">
                        <input type="text" id="article_tags" name="textGroup" tabIndex="4" placeholder='Add up to 3 tags here to describe what your article is about' style={{ width: "84.7%" }} />
                    </div>
                </div>
                <div className="article-post-div">
                    <button className='article-post-button' type='submit'>Post</button>
                </div>
            </form>
        </div>
    </div>
}

export default PostArticle