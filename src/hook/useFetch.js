import {useState, useCallback } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [movieData, setMovieData] = useState(null);

    const fetchMovieData = useCallback(async (fetchUrl) => {
        try {
            const response = await axios.get(fetchUrl);
            console.log("kkk ",response.data.results || response.data)
            setMovieData(response.data.results || response.data);
        } catch(err) {
            setMovieData(null);
        }
    }, []);

    return {
        movieData,
        fetchMovieData,
    };
}

export default useFetch;