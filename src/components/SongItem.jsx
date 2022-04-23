import Button from './Button';
import buttonClasses from './Button.module.css';
import songItemClasses from './SongItem.module.css';

function SongItem({ song, deleteSong, likeSong }) {

    return (
        <div className={songItemClasses.SongItem}>
            <p>{song.songName}</p>
            <p>{song.author}</p>
            <p>{song.releaseDate}</p>
            <p>{song.albumName}</p>
            <div className={songItemClasses.Buttons}>
                <Button
                    liked={String(Boolean(song.isLiked))}
                    className={buttonClasses.LikeButton}
                    onClick={() => likeSong(song.id)}>
                    {song.isLiked ? 'Dislike' : 'Like'}
                </Button>
                <Button 
                    className={buttonClasses.DeleteButton}
                    onClick={() => deleteSong(song.id)}>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default SongItem;