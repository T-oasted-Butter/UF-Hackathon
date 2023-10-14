from flask import Flask, request, jsonify
app = Flask(__name__)
 
 #sends "Hello World on server startup"
@app.route('/', methods=['GET'])
def hello():
   return 'Hello World'

#tests server's ability to receive files
@app.route('/posttest', methods=['POST'])
def posttest():
   data = request.get_json()
   print(data['name'])
   response = 'received message'
   return jsonify(response), 200
   
 