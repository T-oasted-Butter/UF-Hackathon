from flask import Flask, request, jsonify
app = Flask(__name__)
 
 #sends "J"
@app.route('/', methods=['GET'])
def hello():
   return 'Hello World'

@app.route('/posttest', methods=['POST'])
def posttest():
   data = request.get_json()
   print(data['name'])
   response = 'received message'
   return jsonify(response), 200
   
 