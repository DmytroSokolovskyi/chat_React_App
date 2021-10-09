import {useState} from "react";

export const useFetch = (callback) => {
    let [error, setError] = useState('');
    let [loading, setLoading] = useState(false);

    const fetchJoke = async () => {
        try {
            setLoading(true);
            await callback()
        } catch (e) {
            setError(e.message);
            setLoading(false)
        }
    };
    return [fetchJoke, loading, error];
};
