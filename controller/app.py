from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/api/questions', methods=['GET'])
def get_questions():
    with open('data/questions.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
    return jsonify(questions)

if __name__ == '__main__':
    app.run(debug=True)
