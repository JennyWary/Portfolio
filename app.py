# Basic Flask App
from flask import Flask, render_template, request

# Tell flask to turn this file into a flask-app
app = Flask(__name__)

# Define a function that gets called if the website domain equals main page
# This function returns a html file and renders it to the screen
@app.route("/")
def index():
    return render_template("index.html")

# Run app
if __name__ == '__main__':
    app.run()
