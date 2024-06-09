from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/api/questions', methods=['GET'])
def get_questions():
    with open('data/questions.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
    return jsonify(questions)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
