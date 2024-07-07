import { atom } from 'recoil';

export const profileState = atom({
    key: 'profileState',
    default: {
        name: 'Adarsh Gupta',
        age: 19,
        location: 'Nepal',
        followers: '7700',
        likes: '88800',
        photos: 78,
        backgroundImage: '../public/cover.jpeg',
        profileImage: '../public/adarsh.jpeg',
    },
});