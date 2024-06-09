import React from 'react';

function ResultPage({ results, restartQuiz }) {
    return (
        <div>
            <h1>Results</h1>
            {results.map((result, index) => (
                <div key={index}>
                    <p>{result.question}</p>
                    <p>{result.isCorrect ? 'Correct' : 'Incorrect'}</p>
                </div>
            ))}
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
}

export default ResultPage;
