import BaseUrl from './../api/baseURL';

const useGetData = async(url, parmas) => {
    const res = await BaseUrl.get(url, parmas)
    return res.data
}

export default useGetData