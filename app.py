import os
from flask import Flask, render_template, request
from modules.tracking import track_request


# Tell flask to turn this file into a flask-app
app = Flask(__name__)

# Create data save folder if not exist
if not os.path.exists("/var/www/portfolio_website/data/"):
    os.mkdir("/var/www/portfolio_website/data/")

# Define a function that gets called if the website domain equals main page
# This function returns a html file and renders it to the screen
@app.route("/")
def index():
    # Track traffic
    try:
        track_request(request=request, data_save_path="/var/www/portfolio_website/data/tracking.jsonl")
    except:
        pass

    # Return site
    return render_template("index.html")

# Run app
if __name__ == '__main__':
    app.run()
