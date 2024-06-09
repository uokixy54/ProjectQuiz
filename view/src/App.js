import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';

function App() {
    const [page, setPage] = useState('home');
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [results, setResults] = useState([]);

    const fetchQuestions = async () => {
        const res = await fetch('http://localhost:5000/api/questions');
        const data = await res.json();
        setQuestions(data);
    };

    const startQuiz = async () => {
        await fetchQuestions();
        setPage('question');
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setResults([]);
    };

    const submitAnswer = (ans) => {
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = currentQuestion.answer === ans;
        setResults([...results, { question: currentQuestion.question, isCorrect }]);
        setUserAnswers([...userAnswers, ans]);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setPage('result');
        }
    };

    return (
        <div className="App">
            {page === 'home' && <HomePage startQuiz={startQuiz} />}
            {page === 'question' && (
                <QuestionPage
                    question={questions[currentQuestionIndex]}
                    submitAnswer={submitAnswer}
                    nextQuestion={nextQuestion}
                />
            )}
            {page === 'result' && (
                <ResultPage results={results} restartQuiz={() => setPage('home')} />
            )}
        </div>
    );
}

export default App;
