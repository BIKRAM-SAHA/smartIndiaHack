import requests

url='http://localhost:5000/api'

r =requests.post(url,json={'exp':[98.5,24]})  
print(r.json())