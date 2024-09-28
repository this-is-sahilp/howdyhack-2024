def convertTXT(): # does all the pdf to text conversion
    import pdfplumber
    import os

    # Open the PDF file


    def openPDF(inputPDF):
        with pdfplumber.open(f'pdfs/{inputPDF}') as pdf:
            text = ""

            # Extract text from each page
            for page in pdf.pages:
                text += page.extract_text()

        # Save the extracted text to a file

        cleanName = inputPDF # name with the .pdf and .txt
        cleanName = inputPDF[0:-4]

        with open(f'outputs/{cleanName}.txt', 'w') as text_file:
            text_file.write(text)


        print("PDF has been converted to text.")

    def readDir(): # gets all the files in the pdf directory
    # Specify the directory path
        directory_path = 'pdfs'

        # List all files in the directory
        files = [f for f in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, f))]

        for file in files:
            if not file.endswith(".pdf"):
                files.remove(file)

        # Print the list of files
        for file in files:
            print(file)
            openPDF(file)


    # openPDF('input.pdf')

    readDir()



def OR(input_prompt): #does the ai formatting
    from openai import OpenAI
    from os import getenv



    # gets API Key from environment variable OPENAI_API_KEY
    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key='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',
    )
    

    completion = client.chat.completions.create(

        model="microsoft/phi-3-mini-128k-instruct:free",
        messages=[
            {
            "role": "user",
            "content": "What is the meaning of life?"
            }
        ]
    )

    print(completion.choices[0].message.content)




# convertTXT() 



def txtToStr(file_path): # converts the .txt file to a string
    # Open the file and read its contents
    with open(file_path, 'r') as file:
        file_contents = file.read()

    # Now file_contents contains the text from the file as a string
    print(file_contents)

    return file_contents


def date_format(file_path):
    


txtToStr('outputs/input copy 2.txt')