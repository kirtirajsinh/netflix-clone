require('dotenv').config();

const api_key = "8f371b38b9c567a203d8905769bcc765"

const requests = {
    fetchTrending: `/trending/all/day?api_key=${api_key}`,
    fetchNetflixOrigionals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`

}
export default requests;