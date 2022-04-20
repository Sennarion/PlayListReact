import './SongItem.css';
import Button from './Button';

function SongItem({ song, deleteSong, likeSong }) {

    return (
        <div className="song__item">
            <p>{song.songName}</p>
            <p>{song.author}</p>
            <p>{song.releaseDate}</p>
            <p>{song.albumName}</p>
            <div className="buttons__wrapper">
                <Button
                    className={song.isLiked ? 'LikeButton active' : 'LikeButton'}
                    onClick={() => likeSong(song.id)}>
                    {!song.isLiked ? 'Like' : 'Dislike'}
                </Button>
                <Button 
                    className='DeleteButton' 
                    onClick={() => deleteSong(song.id)}>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default SongItem;