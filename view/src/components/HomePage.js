import React from 'react';

function HomePage({ startQuiz }) {
    return (
        <div>
            <h1>Salesforce認定アドミニストレータ過去問</h1>
            <button onClick={startQuiz}>Start Test</button>
        </div>
    );
}

export default HomePage;
