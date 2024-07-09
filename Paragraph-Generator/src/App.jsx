import { useState } from 'react'

function App() {
  const [wordCount, setWordCount] = useState('');
  const [paragraph, setParagraph] = useState('');

  const generateParagraph = () => {
    const words = ['Adarsh', 'Khushi', 'Rahul', 'Rohit', 'Sachin', 'Ravi', 'Raj', 'Rahul', 'Rajesh', 'Rajiv', 'Rakesh', 'Ramesh', 'Ranjan', 'Ravi', 'Rohit', 'Rohan', 'Anjali', 'Anju', 'Ankita', 'Anshu', 'Anu', 'Anuradha', 'Aparna', 'Archana', 'Arpita', 'Arti', 'Aradhya', 'Asha', 'Ashwini', 'Babita', 'Bhavna', 'Bhawna', 'Bhawana'];
    let paragraph = '';
    for (let i = 0; i < wordCount; i++) {
      paragraph += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    setParagraph(paragraph.trim());
  };

  return (
    <>
      <div className='max-w-2xl mx-auto mt-10 p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Paragraph Generator</h1>
        <div className='flex mb-4'>
          <input
            type="number"
            value={wordCount}
            onChange={(e) => setWordCount(e.target.value)}
            placeholder='Enter Number of Words'
            className='flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            onClick={generateParagraph}
            className='px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
          >Generate</button>
        </div>
        {paragraph && <p className='mt-4 text-gray-700'>{paragraph}</p>}
      </div>
    </>
  )
}

export default App
