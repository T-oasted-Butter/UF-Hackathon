from flask import Flask, request, jsonify
from flask_cors import CORS
from ask_bot import ask_bot
app = Flask(__name__)
CORS(app)

 
# sends user prompt to palmapi and returns response
@app.route("/askbot", methods=["POST"])
def askbot():
   data = request.get_json()
   response = ask_bot(data["data"], "English")
   return jsonify(response), 200
   
 