import './Input.css';
import { useState } from 'react';
import Button from './Button';

function Input({ songs, setSongs, generateId }) {
    const songInitialState = {
        songName: '',
        songRelease: '',
        songAuthor: '',
        songAlbum: ''
    }

    const [song, setSong] = useState(songInitialState);

    function addNewSong(e) {
        e.preventDefault();
        if (song.songName && song.songAuthor && song.songRelease && song.songAlbum) {
            setSongs([...songs, {
                id: generateId(),
                songName: song.songName,
                releaseDate: song.songRelease,
                author: song.songAuthor,
                albumName: song.songAlbum
            }]);
            setSong(songInitialState)
        }
    }

    return (
        <form className="input__form">
            <input className='input' value={song.songName} type="text" placeholder='Song name' onChange={(e) => setSong({ ...song, songName: e.target.value })} />
            <input className='input' value={song.songAuthor} type="text" placeholder='Author' onChange={(e) => setSong({ ...song, songAuthor: e.target.value })} />
            <input className='input' value={song.songRelease} type="text" placeholder='Release date' onChange={(e) => setSong({ ...song, songRelease: e.target.value })} />
            <input className='input' value={song.songAlbum} type="text" placeholder='Album name' onChange={(e) => setSong({ ...song, songAlbum: e.target.value })} />
            <Button type='submit' className='input__btn' onClick={addNewSong}>Add new song</Button>
        </form>
    )
}

export default Input;