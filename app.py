from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
import joblib

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests (for frontend-backend communication)

# Load the model and scaler
model = load_model('hydration_ann_model.h5')
scaler = joblib.load('scaler.pkl')

# Mapping hydration status to readable format
reverse_mapping = {0: 'Hydrated', 1: 'Mildly Dehydrated', 2: 'Dehydrated'}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from request
        data = request.json
        input_data = np.array(data['input']).reshape(1, -1)

        # Scale the input data
        input_data_scaled = scaler.transform(input_data)

        # Make a prediction
        prediction = model.predict(input_data_scaled)
        predicted_class = np.argmax(prediction)

        # Get the hydration status
        hydration_status = reverse_mapping[predicted_class]

        return jsonify({'status': 'success', 'prediction': hydration_status})

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
