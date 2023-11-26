from flask import Flask, render_template, request, jsonify
import json
import webbrowser

app = Flask(__name__)

# Index route
@app.route('/')
def index():
    return render_template('index.html')

# Submit route for handling form submissions
@app.route('/submit', methods=['POST'])
def submit():
    try: 
        data = request.get_json()

        # Store data in a file (data.json)
        with open('data.json', 'a') as file:
            json.dump(data, file)
            file.write('\n')

        return jsonify({'success': True, 'message': 'Data stored successfully'}), 200
    except Exception as e:
        print('Error writing to file:', e)
        return jsonify({'success': False, 'error': 'Internal Server Error'}), 500

# Run the Flask app
if __name__ == '__main__':
    #Open the browser and start application
    webbrowser.open('http://localhost:5000/submit')
    app.run(debug=True)