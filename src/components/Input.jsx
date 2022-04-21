import Button from './Button';
import buttonClasses from './Button.module.css';
import inputClasses from './Input.module.css';

function Input({ song, setSong, addNewSong }) {
    return (
        <form className={inputClasses.InputForm}>
            <input className={inputClasses.Input} value={song.songName} type="text" placeholder='Song name' empty={song.songName ? 'false' : 'true'} onChange={(e) => setSong({ ...song, songName: e.target.value })} />
            <input className={inputClasses.Input} value={song.songAuthor} type="text" placeholder='Author' empty={song.songName ? 'false' : 'true'} onChange={(e) => setSong({ ...song, songAuthor: e.target.value })} />
            <input className={inputClasses.Input} value={song.songRelease} type="text" placeholder='Release date' empty={song.songName ? 'false' : 'true'} onChange={(e) => setSong({ ...song, songRelease: e.target.value })} />
            <input className={inputClasses.Input} value={song.songAlbum} type="text" placeholder='Album name' empty={song.songName ? 'false' : 'true'} onChange={(e) => setSong({ ...song, songAlbum: e.target.value })} />
            <Button type='submit' className={buttonClasses.InputButton} onClick={addNewSong}>Add new song</Button>
        </form>
    )
}

export default Input;