const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1c239680femsh8a095d671b7482ap16d681jsnbfeb31e51c47',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

const apicall = async (input,setartistname,setsongname,setalbumart)=>
{
	const url = `https://spotify23.p.rapidapi.com/search/?q=${input}&type=tracks&offset=0&limit=10&numberOfTopResults=5`;
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		setsongname(result.tracks.items[0].data.name);
		const artistNames = result.tracks.items[0].data.artists.items.map(artist => artist.profile.name).join(', ');
		setartistname(artistNames);
		setalbumart(result.tracks.items[0].data.albumOfTrack.coverArt.sources[0].url)
	} catch (error) {
		console.error(error);
	}
}

export default apicall;