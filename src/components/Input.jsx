import { useEffect, useRef } from 'react';
import Button from './Button';
import buttonClasses from './Button.module.css';
import inputClasses from './Input.module.css';

function Input({ song, songs, setSong, addNewSong }) {
    const inputElement = useRef(null);

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, [songs])

    return (
        <form className={inputClasses.InputForm}>
            <input className={inputClasses.Input} value={song.songName} type="text" placeholder='Song name' empty={song.songName ? 'false' : 'true'} ref={inputElement} onChange={(e) => setSong({ ...song, songName: e.target.value })} />
            <input className={inputClasses.Input} value={song.songAuthor} type="text" placeholder='Author' empty={song.songAuthor ? 'false' : 'true'} onChange={(e) => setSong({ ...song, songAuthor: e.target.value })} />
            <input className={inputClasses.Input} value={song.songRelease} type="text" placeholder='Release date' empty={song.songRelease ? 'false' : 'true'} onChange={(e) => setSong({ ...song, songRelease: e.target.value })} />
            <input className={inputClasses.Input} value={song.songAlbum} type="text" placeholder='Album name' empty={song.songAlbum ? 'false' : 'true'} onChange={(e) => setSong({ ...song, songAlbum: e.target.value })} />
            <Button type='submit' className={buttonClasses.InputButton} active={(song.songName && song.songAuthor && song.songRelease && song.songAlbum) ? 'true' : 'false'} onClick={addNewSong}>Add new song</Button>
        </form>
    )
}

export default Input;