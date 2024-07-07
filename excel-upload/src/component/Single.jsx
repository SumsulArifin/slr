import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Single = () => {
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

      setApiResponse(result);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch data from the server.');
    }
    console.log(apiResponse);
  };

  return (
    <div className="mx-auto max-w-md">
      <Helmet>
        <title>SLR| Singel</title>
      </Helmet>
      <div className="bg-white shadow-xl rounded-lg p-6">
        <h2 className="card-title mb-2">Single Sentece to Gloss</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input input-bordered input-primary w-full  mb-4"
          placeholder="Enter Natural Sentence..."
        />
        <button
          onClick={handleSubmit}
          className="btn btn-outline btn-primary text-white py-2 rounded hover:bg-blue-700 min-w-full"
        >
          Submit
        </button>
        <div className="mt-4 p-2 border rounded word-wrap border-indigo-700">
          <strong>Gloss Sentence :   </strong>
          {apiResponse}
        </div>
        {error && (
          <div className="mt-4 p-2 border border-red-500 text-red-500 rounded word-wrap">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </div>

  );
};

export default Single;
