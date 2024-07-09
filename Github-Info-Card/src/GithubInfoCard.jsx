import React, { useEffect, useState } from "react";
import axios from "axios";

const GithubInfoCard = ({ username }) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUserData(response.data);
            } catch (error) {
                setError('Error fetching user data');
            }
        }

        fetchUserData();
    }, [username]);

    if (error) {
        return <div className="text-2xl text-red-600">{error}</div>
    }

    if (!userData) {
        return <div className="text-2xl text-gray-600">Loading...</div>
    }

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={userData.avatar_url} alt={`${username}'s avatar`}
                className="w-44 rounded-full mx-auto mt-6 border-4 border-white shadow-lg"
            />
            <div className="text-center mt-4 p-4">
                <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
                <p className="text-gray-600">@{userData.login}</p>
                <p className="mt-2 text-gray-700">{userData.bio}</p>
                <div className="flex justify-center mt-4 space-x-4 text-gray-600">
                    <div>Followers: {userData.followers}</div>
                    <div>Following: {userData.following}</div>
                    <div>Repos: {userData.public_repos}</div>
                </div>
                <a href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full transition duration-300"
                >View Profile</a>
            </div>
        </div>
    );

};

export default GithubInfoCard;