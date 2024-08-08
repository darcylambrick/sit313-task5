import React,{ useState } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import PostHeader from './PostHeader'
import PostQuestion from './PostQuestion'
import PostArticle from './PostArticle'

function App() {
    const [showQuestion, setShowQuestion] = useState(true);

    return (
        <div>
            <Header />
            <PostHeader setShowQuestion={setShowQuestion} />
            {showQuestion ? <PostQuestion /> : <PostArticle />}
            <Footer />
        </div>
    );
}

export default App;