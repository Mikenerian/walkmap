from flask import Flask, render_template
from dotenv import load_dotenv
import os

app = Flask(__name__, static_folder="./static/")

load_dotenv()
api_key = os.getenv("API_KEY")

@app.route('/')
def index():
  return render_template('index.html', api_key=api_key)

if __name__ == '__main__':
  app.run(debug=True)
