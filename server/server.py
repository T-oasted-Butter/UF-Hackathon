from flask import Flask, request, jsonify
from ask_bot import ask_bot
app = Flask(__name__)
 
# sends user prompt to palmapi and returns response
@app.route("/askbot", methods=["POST"])
def askbot():
   data = request.get_json()
   response = ask_bot(data["data"])
   return jsonify(response), 200
   
 