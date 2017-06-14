import React, { Component } from 'react';
import './App.css';
import config from './config.json';

const spotify_graphql = require('spotify-graphql');

const defaultData = {"artist":{"name":"Ed Sheeran","images":[{"height":640,"url":"https://i.scdn.co/image/f0370da3f52161b07a461b4be9a64d0adbfb498d","width":640},{"height":320,"url":"https://i.scdn.co/image/e21f791b600f04f9dd8ad2b6d9b3304a82e048ca","width":320},{"height":160,"url":"https://i.scdn.co/image/f39b705ba6b1070c77bce4e9c21dff5bac96f21c","width":160}],"top_tracks":[{"name":"Shape of You","album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c","width":640},{"height":300,"url":"https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f","width":300},{"height":64,"url":"https://i.scdn.co/image/72f9e56dae8188fc62fcdc9b081a9c11ad2d00ef","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/84462d8e1e4d0f9e5ccd06f0da390f65843774a2?cid=8897482848704f2a8f8d7c79726a70d4"},{"name":"Galway Girl","album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c","width":640},{"height":300,"url":"https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f","width":300},{"height":64,"url":"https://i.scdn.co/image/72f9e56dae8188fc62fcdc9b081a9c11ad2d00ef","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/cec1fc40a0220f20d3b91dd28d8e1141ad5e7e25?cid=8897482848704f2a8f8d7c79726a70d4"},{"name":"Perfect","album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c","width":640},{"height":300,"url":"https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f","width":300},{"height":64,"url":"https://i.scdn.co/image/72f9e56dae8188fc62fcdc9b081a9c11ad2d00ef","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/9779493d90a47f29e4257aa45bc6146d1ee9cb26?cid=8897482848704f2a8f8d7c79726a70d4"},{"name":"Castle on the Hill","album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c","width":640},{"height":300,"url":"https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f","width":300},{"height":64,"url":"https://i.scdn.co/image/72f9e56dae8188fc62fcdc9b081a9c11ad2d00ef","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/beb4ed48cca5d2a792e877c7efe92d54046eac67?cid=8897482848704f2a8f8d7c79726a70d4"},{"name":"Happier","album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c","width":640},{"height":300,"url":"https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f","width":300},{"height":64,"url":"https://i.scdn.co/image/72f9e56dae8188fc62fcdc9b081a9c11ad2d00ef","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/e2f5edb569c73916428ec0a2e0b56a9f777851dd?cid=8897482848704f2a8f8d7c79726a70d4"},{"name":"Dive","album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c","width":640},{"height":300,"url":"https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f","width":300},{"height":64,"url":"https://i.scdn.co/image/72f9e56dae8188fc62fcdc9b081a9c11ad2d00ef","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/14bdcdfb15edba50c56d07af3880aceb8bf831bc?cid=8897482848704f2a8f8d7c79726a70d4"},{"name":"Photograph","album":{"name":"x (Wembley Edition)","images":[{"height":640,"url":"https://i.scdn.co/image/02a6e0894c93909845e3815f7ac21ba5d62b0f0a","width":640},{"height":300,"url":"https://i.scdn.co/image/cb5aca6fe25d3917cb52f6f65e0ba68af60654d4","width":300},{"height":64,"url":"https://i.scdn.co/image/16631c30dffc465602037845e345a953386499da","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/097c7b735ceb410943cbd507a6e1dfda272fd8a8?cid=8897482848704f2a8f8d7c79726a70d4"},{"name":"Thinking Out Loud","album":{"name":"x (Wembley Edition)","images":[{"height":640,"url":"https://i.scdn.co/image/02a6e0894c93909845e3815f7ac21ba5d62b0f0a","width":640},{"height":300,"url":"https://i.scdn.co/image/cb5aca6fe25d3917cb52f6f65e0ba68af60654d4","width":300},{"height":64,"url":"https://i.scdn.co/image/16631c30dffc465602037845e345a953386499da","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/7fba47d0806142cb34ad2080a5f139eba915fe05?cid=8897482848704f2a8f8d7c79726a70d4"},{"name":"What Do I Know?","album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c","width":640},{"height":300,"url":"https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f","width":300},{"height":64,"url":"https://i.scdn.co/image/72f9e56dae8188fc62fcdc9b081a9c11ad2d00ef","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/bad41a580c7e5f886297528f7cf9003e5a316335?cid=8897482848704f2a8f8d7c79726a70d4"},{"name":"New Man","album":{"name":"÷ (Deluxe)","images":[{"height":640,"url":"https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c","width":640},{"height":300,"url":"https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f","width":300},{"height":64,"url":"https://i.scdn.co/image/72f9e56dae8188fc62fcdc9b081a9c11ad2d00ef","width":64}]},"preview_url":"https://p.scdn.co/mp3-preview/31b412a3beb5843fde6b7716388887f3dc556d1a?cid=8897482848704f2a8f8d7c79726a70d4"}]}}

class Song extends Component {
	constructor(props) {
		super(props)
		this.state = {
			time: 0,
			audio: ''
		}

		this.handleUpdate = this.handleUpdate.bind(this);
		this.mouseOut = this.mouseOut.bind(this);
	}

	handleUpdate() {
		this.setState({
			audio: new Audio(this.props.coverUrl)
		})
		this.state.audio.currentTime = this.state.time;
		this.state.audio.play();
	}

	mouseOut() {
		this.setState({
			time: audio.currentTime
		})
		this.state.audio.pause()
	}

	render() {
		return(
			<div className="song"
				onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
				<div className="song-cover">
					<img src={this.props.coverUrl} alt="Album Cover" />
				</div>
				<div className="song-data">
					<div className="songName">{this.props.songName}</div>
					<div className="autor">{this.props.autor}</div>
					<div className="album">{this.props.album}</div>
				</div>
			</div>
		)
	}
}

class SongsList extends Component {
  render() {
    return (
      <div className="SongsList">
				{this.props.data.artist.top_tracks.map((song, i) => {
					return (
						<Song key={i}
							coverUrl={song.album.images[0].url}
							songName={song.name}
							autor={this.props.data.artist.name}
							album={song.album.name}
							className="SongCard"
						/>
					)
				})}
			</div>
    );
  }
}

class Search extends Component {
	constructor(props) {
    super(props);
    this.state = {value: 'Ed Sheeran', data: defaultData}

    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange(event) {
		this.setState({value: event.target.value});
  }

	handleSubmit(event) {
    this.setState({value: event.target.value});
		spotify_graphql.SpotifyGraphQLClient(config).query(`
			{
				artist(name: "${this.state.value}") {
					name
					images {
						url
					}
					top_tracks {
						name
						album {
							name
							images {
								url
							}
						}
						preview_url
					}
				}
			}
		`).then(executionResult => {
			if (executionResult.errors) {
				console.log('error');
			} else {
				console.log('success');
				this.setState({
					data: executionResult.data
				})
			}
		})
    event.preventDefault();
  }

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
          Artist:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
				<input type="submit" value="Submit" />
        {this.state.data && <SongsList data={this.state.data}/>}
			</form>
		)
	}
}

export default Search;
