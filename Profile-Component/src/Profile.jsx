import React from 'react';
import { useRecoilValue } from 'recoil';
import { profileState } from './atoms';

const Profile = () => {
    const profile = useRecoilValue(profileState);

    const formatNumber = (num) => {
        return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num;
    };

    return (
        <div className='bg-white max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden mt-16'>
            <div className='relative'>
                <img className='w-full h-36 object-cover'
                    src={profile.backgroundImage}
                    alt='Background' />
                <img className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full'
                    src={profile.profileImage}
                    alt='Profile' />
            </div>

            <div className='pt-16 pb-8 text-center'>
                <h2 className='text-xl font-semibold text-gray-800'>{profile.name}<span className='font-normal text-gray-600 pl-1 text-lg'>{profile.age}</span></h2>
                <p className='text-md text-gray-600 mt-1'>{profile.location}</p>
            </div>

            <hr className='border-gray-300' />

            <div className='flex justify-around  pt-6 pb-6 text-lg'>
                <div className='text-center'>
                    <span className='font-semibold text-gray-800 block'>{formatNumber(profile.followers)}</span>
                    <span className='text-gray-600 text-sm'>Followers</span>
                </div>
                <div className='text-center'>
                    <span className='font-semibold text-gray-800 block'>{formatNumber(profile.likes)}</span>
                    <span className='text-gray-600 text-sm'>Likes</span>
                </div>
                <div className='text-center'>
                    <span className='font-semibold text-gray-800 block'>{formatNumber(profile.photos)}</span>
                    <span className='text-gray-600 text-sm'>Likes</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;