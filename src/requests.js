require('dotenv').config();

const api_key = process.env.API_KEY

const requests = {
    fetchTrending: `/trending/all/week/?api_key=${api_key}&language=en-US`,
    fetchNetflixOrigionals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`

}
export default requests;