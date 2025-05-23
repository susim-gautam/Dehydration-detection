// // src/App.jsx
// import React, { useState } from "react";
// import {
//   Container,
//   Text,
//   Textarea,
//   Button,
//   Group,
//   Paper,
//   Title,
//   Notification,
// } from "@mantine/core";

// const App = () => {
//   const [inputValues, setInputValues] = useState("");
//   const [result, setResult] = useState("");
//   const [error, setError] = useState("");

//   const handleInputChange = (event) => {
//     setInputValues(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Convert input string to array of numbers
//       const inputs = inputValues
//         .split(",")
//         .map((val) => parseFloat(val.trim()));

//       if (inputs.length !== 14) {
//         setError("Please enter exactly 14 values separated by commas.");
//         setResult("");
//         return;
//       }

//       // Send data to backend
//       const response = await fetch("http://127.0.0.1:5000/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ input: inputs }),
//       });

//       const result = await response.json();
//       if (result.status === "success") {
//         setResult(`Predicted Hydration Status: ${result.prediction}`);
//         setError("");
//       } else {
//         setError(`Error: ${result.message}`);
//         setResult("");
//       }
//     } catch (err) {
//       setError("An error occurred while processing your request.");
//       setResult("");
//     }
//   };

//   return (
//     <Container size="sm" style={{ marginTop: "50px" }}>
//       <Title order={1} align="center" mb="lg">
//         Hydration Status Prediction
//       </Title>
//       <Paper withBorder shadow="md" p="lg">
//         <form onSubmit={handleSubmit}>
//           <Textarea
//             placeholder="Enter 14 values separated by commas (e.g., 1.6, 0.02, ...)"
//             label="Input Features"
//             value={inputValues}
//             onChange={handleInputChange}
//             required
//           />
//           <Group position="center" mt="lg">
//             <Button type="submit" color="teal" size="lg">
//               Predict
//             </Button>
//           </Group>
//         </form>
//       </Paper>
//       {result && (
//         <Notification color="teal" title="Prediction Result" mt="lg">
//           {result}
//         </Notification>
//       )}
//       {error && (
//         <Notification color="red" title="Error" mt="lg">
//           {error}
//         </Notification>
//       )}
//     </Container>
//   );
// };

// export default App;

// src/App.jsx

// import React, { useState } from "react";
// import {
//   Container,
//   Text,
//   Textarea,
//   Button,
//   Group,
//   Paper,
//   Title,
//   Notification,
//   rem,
// } from "@mantine/core";

// const App = () => {
//   const [inputValues, setInputValues] = useState("");
//   const [result, setResult] = useState("");
//   const [error, setError] = useState("");

//   const handleInputChange = (event) => {
//     setInputValues(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const inputs = inputValues
//         .split(",")
//         .map((val) => parseFloat(val.trim()));

//       if (inputs.length !== 14) {
//         setError("Please enter exactly 14 values separated by commas.");
//         setResult("");
//         return;
//       }

//       const response = await fetch("http://127.0.0.1:5000/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ input: inputs }),
//       });

//       const result = await response.json();
//       if (result.status === "success") {
//         setResult(`Predicted Hydration Status: ${result.prediction}`);
//         setError("");
//       } else {
//         setError(`Error: ${result.message}`);
//         setResult("");
//       }
//     } catch (err) {
//       setError("An error occurred while processing your request.");
//       setResult("");
//     }
//   };

//   return (
//     <Container
//       size="sm"
//       style={{
//         marginTop: "50px",
//         backgroundColor: "pink",
//         borderRadius: rem(8),
//         padding: rem(20),
//       }}
//     >
//       <Paper
//         padding="md"
//         style={{
//           marginBottom: rem(20),
//           backgroundColor: "#007bff",
//           color: "white",
//           textAlign: "center",
//         }}
//       >
//         <Title order={2} style={{ margin: 0 }}>
//           Hydration Status Predictor
//         </Title>
//       </Paper>
//       <Paper withBorder shadow="md" p="lg">
//         <form onSubmit={handleSubmit}>
//           <Textarea
//             placeholder="Enter 14 values separated by commas (e.g., 1.6, 0.02, ...)"
//             label="Input Features"
//             value={inputValues}
//             onChange={handleInputChange}
//             required
//             style={{ marginBottom: rem(20) }}
//           />
//           <Group position="center" mt="lg">
//             <Button type="submit" color="teal" size="lg">
//               Predict
//             </Button>
//           </Group>
//         </form>
//       </Paper>
//       {result && (
//         <Notification color="teal" title="Prediction Result" mt="lg">
//           {result}
//         </Notification>
//       )}
//       {error && (
//         <Notification color="red" title="Error" mt="lg">
//           {error}
//         </Notification>
//       )}
//       <Paper
//         style={{
//           marginTop: rem(20),
//           textAlign: "center",
//           padding: rem(10),
//           backgroundColor: "#007bff",
//           color: "white",
//         }}
//       >
//         <Text size="sm">
//           © 2023 Hydration Status Predictor. All rights reserved.
//         </Text>
//       </Paper>
//     </Container>
//   );
// };

// export default App;

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValues, setInputValues] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputValues(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const inputs = inputValues
        .split(',')
        .map((val) => parseFloat(val.trim()));

      if (inputs.length !== 14) {
        setError('Please enter exactly 14 values separated by commas and spaces.');
        setResult('');
        return;
      }

      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: inputs }),
      });

      const result = await response.json();
      if (result.status === 'success') {
        setResult(result.prediction);  // Set the raw prediction result
        setError('');
      } else {
        setError(`Error: ${result.message}`);
        setResult('');
      }
    } catch (err) {
      setError('An error occurred while processing your request.');
      setResult('');
    }
  };

  // Function to determine the background color based on the result
  const getBackgroundColor = () => {
    switch (result) {
      case 'Dehydrated':
        return 'red';
      case 'Mildly Dehydrated':
        return 'yellow';
      case 'Hydrated':
        return 'green';
      default:
        return 'transparent';
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Hydration Status Predictor</h1>
      </header>
      <main className="main">
        <form onSubmit={handleSubmit} className="form">
          <textarea
            placeholder="Enter 14 values separated by commas and spaces (e.g., 1.6, 0.02, ...)"
            value={inputValues}
            onChange={handleInputChange}
            required
            className="textarea"
          />
          <button type="submit" className="button">Predict</button>
        </form>
        {result && (
          <div className="notification" style={{ backgroundColor: getBackgroundColor(), color: result === 'Mildly Dehydrated' ? 'black' : 'white' }}>
            Predicted Hydration Status: {result}
          </div>
        )}
        {error && <div className="notification error">{error}</div>}
      </main>
      <footer className="footer">
        <p>© 2023 Hydration Status Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
