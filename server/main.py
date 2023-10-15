import pprint
import google.generativeai as palm
import os
from dotenv import load_dotenv
load_dotenv()
def main():
    
    PALMSECRET_KEY = os.getenv('PALM_KEY')

    palm.configure(api_key=PALMSECRET_KEY)

    #checks the available palm api models
    models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
    model = models[0].name
    print(model)

    prompt = '''
Imagine you're a verizon employee who's only knowledgeable on phones, service plans, 
repairing devices, and things closely related to networking and phones and you're answering a customer with a question. Heres the question: How do you harvest corn?

    '''
 #test comment
    completion = palm.generate_text(
        model=model,
        prompt=prompt,
        #controls the randomness of the response
        temperature=0,
        # The maximum length of the response, 1200 maximum
        max_output_tokens=800,
    )

    print(completion.result)



if __name__== "__main__":
    main()