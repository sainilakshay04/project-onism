function PlayerControls(props) {
  
    let playText = props.isPlaying ? 'Pause':'Play';
    return (
        <div className="player-controls">
          <button className="nav-btn" onClick={() => props.SkipSong(false)}>Prev</button>
          <button className="play-btn" onClick={()=> props.setIsPlaying(!props.isPlaying)}>{playText}</button>
          <button className="nav-btn" onClick={() => props.SkipSong()}>Next</button>
        </div>
    );
  }
  
export default PlayerControls;