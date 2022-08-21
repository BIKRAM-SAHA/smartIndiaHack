import numpy as np
from flask import Flask,request,jsonify
import pickle
import requests
app = Flask(__name__)

#loading the model
model=pickle.load(open('tmodel.pkl','rb'))

@app.route('/api', methods=['POST'])
def predict():
    #get the data from the POST request
    data = request.get_json(force=True)
    prediction=model.predict([np.array(data['exp'])])
    output=prediction[0]
    return jsonify(output)

if __name__=='__main__':
    app.run(port=5000,debug=True)

url='http://localhost:5000/api'

