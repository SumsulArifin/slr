// src/components/FileUpload.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let timer;
        if (isUploading) {
            const startTime = Date.now();
            timer = setInterval(() => {
                setElapsedTime((Date.now() - startTime) / 1000);
            }, 100);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isUploading]);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            setError("Please select a file to upload.");
            return;
        }

        setIsUploading(true);
        setError(null);
        setElapsedTime(0);

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://192.168.1.227:3333/get__excel_gloss_sentence_list', formData, {
                responseType: 'blob', // Important for downloading files
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Create a blob from the response
            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            // Use FileSaver to save the file
            FileSaver.saveAs(blob, 'natural_to_gloss.xlsx');
        } catch (error) {
            setError('Error uploading file. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            <h2>Bulk Natural to Gloss</h2>
            <form onSubmit={handleFileUpload}>
                <input type="file" accept=".xlsx" onChange={handleFileChange} />
                <button type="submit" disabled={isUploading}>Upload</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isUploading ? (
                <p>Uploading... Elapsed time: {formatTime(elapsedTime)}</p>
            ) : (
                elapsedTime > 0 && <p>Upload completed in {formatTime(elapsedTime)}.</p>
            )}
        </div>
    );
};

export default FileUpload;



//Counte in secende Start ////////////////////////////////////////////////

// // src/components/FileUpload.jsx

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FileSaver from 'file-saver';

// const FileUpload = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [isUploading, setIsUploading] = useState(false);
//     const [error, setError] = useState(null);
//     const [elapsedTime, setElapsedTime] = useState(0);

//     useEffect(() => {
//         let timer;
//         if (isUploading) {
//             const startTime = Date.now();
//             timer = setInterval(() => {
//                 setElapsedTime((Date.now() - startTime) / 1000);
//             }, 100);
//         } else {
//             clearInterval(timer);
//         }
//         return () => clearInterval(timer);
//     }, [isUploading]);

//     const handleFileChange = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };

//     const handleFileUpload = async (event) => {
//         event.preventDefault();
//         if (!selectedFile) {
//             setError("Please select a file to upload.");
//             return;
//         }

//         setIsUploading(true);
//         setError(null);
//         setElapsedTime(0);

//         const formData = new FormData();
//         formData.append('file', selectedFile);

//         try {
//             const response = await axios.post('http://192.168.1.227:3333/get__excel_gloss_sentence_list', formData, {
//                 responseType: 'blob', // Important for downloading files
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             // Create a blob from the response
//             const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

//             // Use FileSaver to save the file
//             FileSaver.saveAs(blob, 'processed_file.xlsx');
//         } catch (error) {
//             setError('Error uploading file. Please try again.');
//         } finally {
//             setIsUploading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Bulk Natural to Gloss</h2>
//             <form onSubmit={handleFileUpload}>
//                 <input type="file" accept=".xlsx" onChange={handleFileChange} />
//                 <button type="submit" disabled={isUploading}>Upload</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {isUploading ? (
//                 <p>Uploading... Elapsed time: {elapsedTime.toFixed(1)} seconds</p>
//             ) : (
//                 elapsedTime > 0 && <p>Upload completed in {elapsedTime.toFixed(1)} seconds.</p>
//             )}
//         </div>
//     );
// };

// export default FileUpload;






//Counte in secende End ///////////////////////////////////////////////////////////////////



// // src/components/FileUpload.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// import FileSaver from 'file-saver';

// const FileUpload = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [isUploading, setIsUploading] = useState(false);
//     const [error, setError] = useState(null);

//     const handleFileChange = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };

//     const handleFileUpload = async (event) => {
//         event.preventDefault();
//         if (!selectedFile) {
//             setError("Please select a file to upload.");
//             return;
//         }

//         setIsUploading(true);
//         setError(null);

//         const formData = new FormData();
//         formData.append('file', selectedFile);

//         try {
//             const response = await axios.post('http://192.168.1.227:3333/get__excel_gloss_sentence_list', formData, {
//                 responseType: 'blob', // Important for downloading files
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             // Create a blob from the response
//             const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

//             // Use FileSaver to save the file
//             FileSaver.saveAs(blob, 'processed_file.xlsx');
//         } catch (error) {
//             setError('Error uploading file. Please try again.');
//         } finally {
//             setIsUploading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Bulk Natural to Gloss</h2>
//             <form onSubmit={handleFileUpload}>
//                 <input type="file" accept=".xlsx" onChange={handleFileChange} />
//                 <button type="submit" disabled={isUploading}>Upload</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default FileUpload;
