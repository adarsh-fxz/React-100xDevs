import React, { useEffect, useState } from "react";
import axios from "axios";

const GithubInfoCard = ({ username }) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUserData(response.data);
            } catch (error) {
                setError('Error fetching user data');
            }
        }

        fetchUserData();
    }, [username]);

    if (error) {
        return <div>{error}</div>
    }

    if (!userData) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <img src={userData.avatar_url} alt={`${username}'s avatar`} />
            <div>
                <h2>{userData.name}</h2>
                <p>@{userData.login}</p>
                <p>{userData.bio}</p>
                <div>
                    <div>Followers: {userData.followers}</div>
                    <div>Followers: {userData.following}</div>
                    <div>Repos: {userData.public_repos}</div>
                </div>
                <a href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >View Profile</a>
            </div>
        </div>
    );

};

export default GithubInfoCard;