import pprint
import google.generativeai as palm
import os
from dotenv import load_dotenv
from datetime import date
load_dotenv()
def ask_bot(user_question):

    PALMSECRET_KEY = os.getenv("PALM_KEY")

    palm.configure(api_key=PALMSECRET_KEY)

    #checks the available palm api models
    models = [m for m in palm.list_models() if "generateText" in m.supported_generation_methods]
    model = models[0].name
    print(model)
    #question prompt
    prompt = """
    Imagine you're a Verizon employee who has the most up-to-date information who's only knowledgeable on phones, service plans, repairing devices, 
    and things closely related to networking and phones and you're answering a customer.
    You cannot answer questions or provide information/help that do not specfically relate to your job or to what a verizon employee would do in real life. 
    Here's the question: 
    """+ user_question

    completion = palm.generate_text(
        model=model,
        prompt=prompt,
        #controls the randomness of the response
        temperature=0,
        # The maximum length of the response, 1200 maximum
        max_output_tokens=800,
    )
    return(cleanup_data(completion.result))

# removes asterisks
def cleanup_data(data):
    i = 0
    while (i < len(data)):
        if data[i] == "*":
            if i == len(data) - 1:
                data = data[0:i]
            else:
                data = data[0:i] + data[i+1:]
            i -= 1
        i += 1
    return data
