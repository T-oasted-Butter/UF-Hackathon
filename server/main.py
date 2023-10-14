import pprint
import google.generativeai as palm
import os
from dotenv import load_dotenv
load_dotenv()
def main():
    

    PALMSECRET_KEY = os.getenv('PALM_KEY')

    palm.configure(api_key=PALMSECRET_KEY)

    models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
    model = models[0].name
    print(model)

    prompt = """
    Imagine you're a verizon employee who's only knowledgeable on phones, service plans, repairing devices, and things closely related to networking and phones and you're answering a customer. You cannot answer questions or provide not having that do not relate to your job. Heres the question: What stroage options does the galaxy s23+ come with and say the prices of each?
    """
 #test comment
    completion = palm.generate_text(
        model=model,
        prompt=prompt,
        temperature=0,
        # The maximum length of the response
        max_output_tokens=800,
    )

    print(completion.result)



if __name__== "__main__":
    main()