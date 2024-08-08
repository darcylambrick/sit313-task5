import React from 'react';
import './PostHeader.css';

function PostHeader({ setShowQuestion }) {
    const handleOptionChange = (event) => {
        setShowQuestion(event.target.value === 'question');
    };
    return <div className='newpostheader-div'>
        <div className='newpost-div'>
            <h2>New Post</h2>
        </div>
        <div className="radio-div">
            <form className="newpost-form">
                <div className="field">Select Post Type:</div>
                <div className="field">
                    <div className="ui-radio-checkbox">
                        <input type="radio" id="question" name="radioGroup" tabIndex="0" value="question" onChange={handleOptionChange} defaultChecked />
                        <label htmlFor="question">Question</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui-radio-checkbox">
                        <input type="radio" id="article" name="radioGroup" tabIndex="0" value="article" onChange={handleOptionChange}/>
                        <label htmlFor="article">Article</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default PostHeader