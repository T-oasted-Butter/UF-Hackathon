import pprint
import google.generativeai as palm
import os
import googletrans
from googletrans import Translator
from dotenv import load_dotenv
from datetime import date
load_dotenv()
def ask_bot(user_question, language = 'English'):
    translator = Translator()

    if language == "English":
        translated_text = translator.translate(user_question, src="en", dest='en')
        user_question = translated_text.text
    elif language == "French":
        translated_text = translator.translate(user_question, src="fr", dest='en')
        user_question = translated_text.text
    elif language == "Spanish":
        translated_text = translator.translate(user_question, src="es", dest='en')
        user_question = translated_text.text


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
    Don't answer questions or provide information/help that do not specfically relate to verizon and its products. 
    Here's the question: 
    """ + user_question

    completion = palm.generate_text(
        model=model,
        prompt=prompt,
        #controls the randomness of the response
        temperature=0,
        # The maximum length of the response, 1200 maximum
        max_output_tokens=800,
    )
    
    if language == "English":
        translated_text = translator.translate(completion.result, src="en", dest='en')
        completion.result = translated_text.text
    elif language == "French":
        translated_text = translator.translate(completion.result, src="en", dest='fr')
        completion.result = translated_text.text
    elif language == "Spanish":
        translated_text = translator.translate(completion.result, src="en", dest='es')
        completion.result = translated_text.text
    print(completion.result)
    return((completion.result))

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
