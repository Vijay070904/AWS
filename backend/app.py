from flask import Flask, request

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    item_name = request.form.get('itemName')
    item_description = request.form.get('itemDescription')

    return f"Received: {item_name} - {item_description}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)