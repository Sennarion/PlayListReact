import './Counter.css';

function Counter({ songs }) {
    let likedSongs = songs.filter(song => song.isLiked === true);

    return (
        <div className="counter">
            <p>Count of songs: <strong>{songs.length}</strong></p>
            <p>Count of songs you liked: <strong>{likedSongs.length}</strong></p>
        </div>
    )
}

export default Counter;