// import React, { useState } from 'react';

// const InputOutputComponent = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [apiResponse, setApiResponse] = useState('');
//   const [error, setError] = useState(null);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = async () => {
//     setError(null); // Reset error state before making the request
//     setApiResponse(''); // Clear previous response
//     console.log('Submitting input:', inputValue); // Debug log

//     try {
//       const response = await fetch('http://192.168.1.227:3333/get_gloss_sentence', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: inputValue }),
//       });
//       console.log('Fetch response:', response); // Debug log

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log('API response:', result); // Debug log

//       if (result && typeof result === 'object' && result.natural_sen) {
//         setApiResponse(result.natural_sen);
//       } else {
//         console.error('Invalid response format:', result);
//         throw new Error('Invalid response format');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Failed to fetch data from the server.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
//         placeholder="Type something..."
//       />
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//       <div style={{ 
//         marginTop: '10px', 
//         padding: '10px', 
//         border: '1px solid #ccc', 
//         width: '300px', 
//         wordWrap: 'break-word', 
//         whiteSpace: 'normal' 
//       }}>
//         <strong>Gloss Sentence:</strong> {apiResponse}
//       </div>
//       {error && (
//         <div style={{ 
//           marginTop: '10px', 
//           padding: '10px', 
//           border: '1px solid red', 
//           color: 'red', 
//           width: '300px', 
//           wordWrap: 'break-word', 
//           whiteSpace: 'normal' 
//         }}>
//           <strong>Error:</strong> {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InputOutputComponent;


// import React, { useState } from 'react';

// const InputOutputComponent = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [apiResponse, setApiResponse] = useState('');
//   const [error, setError] = useState(null);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = async () => {
//     setError(null); // Reset error state before making the request
//     setApiResponse(''); // Clear previous response
//     console.log('Submitting input:', inputValue); // Debug log

//     try {
//       const response = await fetch(`http://192.168.1.227:3333/?text=${inputValue}`);
//       console.log('Fetch response:', response); // Debug log

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log('API response:', result); // Debug log

 
//     setApiResponse(result);
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Failed to fetch data from the server.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
//         placeholder="Type something..."
//       />
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//       <div style={{ 
//         marginTop: '10px', 
//         padding: '10px', 
//         border: '1px solid #ccc', 
//         width: '300px', 
//         wordWrap: 'break-word', 
//         whiteSpace: 'normal' 
//       }}>
//         <strong>Gloss Sentence:</strong> {apiResponse.natural_sen
// }
//       </div>
//       {error && (
//         <div style={{ 
//           marginTop: '10px', 
//           padding: '10px', 
//           border: '1px solid red', 
//           color: 'red', 
//           width: '300px', 
//           wordWrap: 'break-word', 
//           whiteSpace: 'normal' 
//         }}>
//           <strong>Error:</strong> {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InputOutputComponent;




import React, { useState } from 'react';

const InputOutputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    setError(null); // Reset error state before making the request
    setApiResponse(''); // Clear previous response
    console.log('Submitting input:', inputValue); // Debug log

    try {
      const response = await fetch('http://192.168.1.227:3333/get_gloss_sentence', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputValue })
      });
      console.log('Fetch response:', response); // Debug log

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API response:', result); // Debug log

      setApiResponse(result.natural_sen);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch data from the server.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
        placeholder="Type something..."
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div style={{
        marginTop: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        width: '300px',
        wordWrap: 'break-word',
        whiteSpace: 'normal'
      }}>
        <strong>Gloss Sentence:</strong> {apiResponse}
      </div>
      {error && (
        <div style={{
          marginTop: '10px',
          padding: '10px',
          border: '1px solid red',
          color: 'red',
          width: '300px',
          wordWrap: 'break-word',
          whiteSpace: 'normal'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default InputOutputComponent;
