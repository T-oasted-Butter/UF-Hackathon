import googletrans

from googletrans import Translator

translator = Translator()

text = input("Enter English Text: ")

translated_text = translator.translate(text, src="fr", dest = "en")

print(translated_text.text)