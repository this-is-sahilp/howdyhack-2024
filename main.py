import test
from flask import Flask, request

app = Flask(__name__)

@app.route('/data', methods=['POST'])
def get_data():
    if request.method == 'POST':
        # Get form data
        if request.form:
            filename = request.form.get('filename')
            course = request.form.get('course')
            section = request.form.get('section')

        # Get JSON data
        elif request.is_json:
            data = request.get_json()
            filename = data.get('filename')
            course = data.get('course')
            section = data.get('section')

        test.date(filename, course, section)

    return 'Invalid request method'

if __name__ == '__main__':
    app.run(debug=True)