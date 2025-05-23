# Dehydration-detection


Hydration Status Prediction
This project predicts hydration status using a trained Artificial Neural Network (ANN) model. It features a Python backend (Flask or FastAPI) and a React-based frontend for user interaction.
Features
Predicts hydration status from user input data
Pre-trained ANN model (hydration_ann_model.h5)
Data normalization using a pre-fitted scaler (scaler.pkl)
REST API backend (app.py)
Modern React frontend (hydration-status folder)



.
├── app.py                      # Backend API (Flask or FastAPI)
├── hydration_ann_model.h5      # Trained ANN model
├── scaler.pkl                  # Pre-fitted scaler for input normalization
├── hydration-status/           # React frontend application
│   ├── public/
│   └── src/
└── README.md


Getting Started
1. Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Run the backend
python app.py

3. Frontend Setup
cd hydration-status
npm install
npm run dev
