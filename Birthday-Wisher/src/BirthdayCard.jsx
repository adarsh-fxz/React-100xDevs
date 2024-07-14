import React, { useState } from 'react';

const birthdayWishes = [
    "Dear [Name], on this special day, I wish you an abundance of happiness, a life filled with love, and countless moments of joy. May you be surrounded by those who cherish you and celebrate the incredible person you are. Here's to a fantastic year ahead, filled with new adventures and endless possibilities. Happy Birthday!",
    "Happy Birthday, [Name]! As you celebrate another year of life, may you reflect on all the wonderful memories you’ve created and look forward to the exciting times ahead. May your day be as bright and beautiful as your smile, and may all your dreams and aspirations come to fruition. Wishing you a day filled with love, laughter, and everything that makes you happiest.",
    "Wishing you a very Happy Birthday, [Name]! Today is all about you, and I hope it’s filled with all the things you love the most. May this year bring you closer to your goals and bless you with health, wealth, and happiness. Remember to cherish every moment, enjoy every day, and live life to the fullest. Cheers to a wonderful year ahead!",
    "Happy Birthday, [Name]! May your special day be filled with unforgettable moments and surrounded by loved ones who bring out the best in you. As you embark on another year, I wish you success in all your endeavors, strength to overcome any challenges, and joy in every aspect of your life. Celebrate yourself today, because you truly deserve it!"
];

const getRandomWishes = (count) => {
    const shuffled = [...birthdayWishes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const BirthdayCard = () => {
    const [name, setName] = useState('');
    const [wishes, setWishes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            const personalizedWishes = getRandomWishes(2).map(wish => wish.replace('[Name]', name));
            setWishes(personalizedWishes);
        }
    };

    return (
        <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-white mb-6">Birthday Wisher</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 space-y-4">
                <input 
                    type='text' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter the recipient's name" 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Generate Wishes
                </button>
            </form>
            {wishes.length > 0 && (
                <div className="mt-6 w-full max-w-lg bg-white rounded-lg shadow-md p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-700">Birthday Wishes for {name}</h2>
                    {wishes.map((wish, index) => (
                        <div key={index} className="bg-pink-100 p-4 rounded-lg">
                            <p className="text-gray-700">{wish}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BirthdayCard;