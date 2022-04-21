import counterClasses from './Counter.module.css';

function Counter({ songs }) {
    const likedSongs = songs.filter(song => song.isLiked);

    return (
        <div className={counterClasses.Counter}>
            <p>Count of songs: <strong>{songs.length}</strong></p>
            <p>Count of songs you liked: <strong>{likedSongs.length}</strong></p>
        </div>
    )
}

export default Counter;