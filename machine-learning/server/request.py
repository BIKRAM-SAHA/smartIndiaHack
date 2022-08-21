import requests

url='https://ml-sih.azurewebsites.net/api'

r =requests.post(url,json={'exp':[56.7,6]})