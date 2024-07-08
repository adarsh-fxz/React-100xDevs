import { useState } from 'react'

function App() {
  const [color, setColor] = useState('bg-gray-600');

  const colors = [
    { name: 'Red', class: 'bg-red-600' },
    { name: 'Yellow', class: 'bg-yellow-600' },
    { name: 'Black', class: 'bg-black' },
    { name: 'Purple', class: 'bg-purple-600' },
    { name: 'Green', class: 'bg-green-600' },
    { name: 'Blue', class: 'bg-blue-600' },
    { name: 'Default', class: 'bg-gray-600' },
    { name: 'Pink', class: 'bg-pink-500' },
  ];

  return (
    <div className={`min-h-screen ${color} transition-colors duration-300`}>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-center mb-6 text-white drop-shadow-lg'>Background Changer</h1>
        <div className='flex justify-center gap-4 shadow-lg py-3'>
          {colors.map((color) => (
            <button
              key={color.name}
              className={`px-4 py-2 rounded-full text-white shadow-md ${color.class} hover:opacity-80`}
              onClick={() => setColor(color.class)}>
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
