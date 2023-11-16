from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Index route
@app.route('/')
def index():
    return render_template('index.html')

# Submit route for handling form submissions
@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()

    # Store data in a file (data.json)
    with open('data.json', 'a') as file:
        json.dump(data, file)
        file.write('\n')

    return jsonify({'success': True})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, port=5000)
