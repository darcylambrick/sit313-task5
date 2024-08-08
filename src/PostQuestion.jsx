import React from 'react';
import './PostQuestion.css';

function PostQuestion() {
    return <div className='question-div'>
        <div className='question-header-div'>
            <h2>What do you want to ask?</h2>
        </div>
        <div className="form-div">
            <form className="question-form">
                <div className="question-title-div">
                    <div className="title">Title: </div>
                    <div className="field">
                        <input type="text" id="question_title" name="textGroup" tabIndex="1" placeholder='Enter the title of your question here' style={{ width: "85%" }} />
                    </div>
                </div>
                <div className="question-body-div">
                    <div className="title">Describe your problem here: </div>
                    <div className="field">
                        <textarea id="question_body" name="textGroup" tabIndex="2" placeholder='Enter your question here' style={{ width: "95%", height: "400px" }} />
                    </div>
                </div>
                <div className="question-tags-div">
                    <div className="title">Tags: </div>
                    <div className="field">
                        <input type="text" id="question_tags" name="textGroup" tabIndex="3" placeholder='Add up to 3 tags here to describe what your question is about' style={{ width: "84.7%" }} />
                    </div>
                </div>
                <div className="article-post-div">
                    <button className='article-post-button' type='submit'>Post</button>
                </div>
            </form>
        </div>
    </div>
}

export default PostQuestion