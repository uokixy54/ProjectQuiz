import React, { useState } from 'react';

function QuestionPage({ question, submitAnswer, nextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleSubmit = () => {
        submitAnswer(selectedAnswer);
        nextQuestion();
    };

    return (
        <div>
            <h1>{question.question}</h1>
            {question.choices.map((choice, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        name="answer"
                        value={choice}
                        onChange={() => setSelectedAnswer(choice)}
                    />
                    {choice}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Answer</button>
        </div>
    );
}

export default QuestionPage;
