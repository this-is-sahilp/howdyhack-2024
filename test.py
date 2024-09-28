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

        model="google/gemini-pro-1.5-exp",
        messages=[
            {
            "role": "user",
            "content": input_prompt
            }
        ]
    )

    return (completion.choices[0].message.content)


def txtToStr(file_path): # converts the .txt file to a string
    # Open the file and read its contents
    with open(file_path, 'r') as file:
        file_contents = file.read()

    # Now file_contents contains the text from the file as a string
    print(file_contents)

    return file_contents


def date_format(file_path, section, className):
    fileString = txtToStr(file_path)
    
    prompt = f"""FORMAT THE FOLLOWING SYLLABUS LIKE: (Category), (Day), (Time), (Location), (Section)   
    
    RULES:
    
    Make sure AM and PM is correct. HUMANITY DEPENDS ON IT

    
    
    
    THE SECTION IS       {section}      {fileString}     FORMAT THE FOLLOWING SYLLABUS LIKE: (Category), (Day), (Time), (Location), (Section). WITH SECTION     {section}       DO NOT INCLUDE ANYTHING ELSE. MAKE SURE THE DATES ARE 100% CORRECT. HUMANITY DEPENDS ON IT. MAKE SURE THE TIMES ARE EXACTLY CORRECT.      EXAMPLE OUTPUT: (Lecture), (Monday, Tuesday, Wednesday), (9:15 to 10:15 A.M.), (Building 283), ({section})"""
    
    
    cleaned = OR(prompt)
    
    print(cleaned)
    
    
    def parse_schedule_data(schedule_string):

        lines = schedule_string.strip().split('\n')
        schedule_entries = []

        for line in lines:
            parts = line[1:-1].split('), (') 
            entry = {}
            entry['Category'] = parts[0]
            entry['Day'] = parts[1]
            entry['Time'] = parts[2]
            entry['Location'] = parts[3]
            entry['Section'] = parts[4]
            schedule_entries.append(entry)

        return schedule_entries
    
    final = parse_schedule_data(cleaned)
    
    print(final)
    
    
    calPrompt = f"""ICS FILE FORMAT EXAMPLE:  
    
        BEGIN:VCALENDAR
        VERSION:2.0
        CALSCALE:GREGORIAN
        BEGIN:VEVENT
        SUMMARY:Access-A-Ride Pickup
        DTSTART;TZID=America/New_York:20130802T103400
        DTEND;TZID=America/New_York:20130802T110400
        LOCATION:1000 Broadway Ave.\, Brooklyn
        DESCRIPTION: Access-A-Ride to 900 Jay St.\, Brooklyn
        STATUS:CONFIRMED
        SEQUENCE:3
        BEGIN:VALARM
        TRIGGER:-PT10M
        DESCRIPTION:Pickup Reminder
        ACTION:DISPLAY
        END:VALARM
        END:VEVENT
        BEGIN:VEVENT
        SUMMARY:Access-A-Ride Pickup
        DTSTART;TZID=America/New_York:20130802T200000
        DTEND;TZID=America/New_York:20130802T203000
        LOCATION:900 Jay St.\, Brooklyn
        DESCRIPTION: Access-A-Ride to 1000 Broadway Ave.\, Brooklyn
        STATUS:CONFIRMED
        SEQUENCE:3
        BEGIN:VALARM
        TRIGGER:-PT10M
        DESCRIPTION:Pickup Reminder
        ACTION:DISPLAY
        END:VALARM
        END:VEVENT
        END:VCALENDAR
    
        FORMAT THE FOLLOWING IN AN ICS FILE FORMAT: 
        
        START: 08/19/2024
        END: 12/23/2024
        Time Zone: CST
        Make sure AM and PM is correct
        In the summary category, include the class name: {className}. For instance, '{className} - Lecture' should be the summary.
        
        Remove anything aside from the ical data. I should be able to put the exact output in an ics file.
        
        
        
        {final}"""
    
    cal = OR(calPrompt)    
    
    print(cal)
    
    return cal


def strToICS(file_path, className, section):
    # Open the file in write mode
    text = date_format(file_path, section, className)
    with open(f'cals/{className}.ics', 'w') as file:
        # Write the string to the file
        file.write(text)
        
    
    
def date(file, className, section):
    
    strToICS(file, className, section)
    





date("outputs/input.txt", "Math 151", 546)

# all outputs, all classes, all sections


# count pdfs in the pdf directory and create an array of them
# c



# on recieve 