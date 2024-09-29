import test
from flask import Flask, request
import os

app = Flask(__name__)

# @app.route("/api/testupload", methods=["POST"])
# def print_data():
#     print("test")
#     with open(f"pdfs/test.webp", "w") as file:
#         request.files["file"].save("hh24/pdfs/test.pdf")
#         file.close()
#     # request.files["file"].save(os.path.curdir)
#     # with open(f'pdfs/{request.files["file"]}', 'w') as file:
#     #     # Write the string to the file
#     #     file.write(text)
#     print(request.files["file"])
#     return ""

@app.route('/api/uploadfile', methods=['POST'])
def get_data():
    print("test")
    
    request.files["file"].save(f'pdfs/{request.form.get("filename")}.pdf')
        
    if request.method == 'POST':
        # Get form data
        if request.form:
            filename = request.form.get('filename')
            print(filename)
            course = request.form.get('course')
            print(course)
            section = request.form.get('section')
            print(section)

        # Get JSON data
        elif request.is_json:
            data = request.get_json()
            filename = data.get('filename')
            course = data.get('course')
            section = data.get('section')

        test.runAll(f'{request.form.get("filename")}.pdf', course, int(section))

    return 'Invalid request method'

if __name__ == '__main__':
    app.run(debug=True)