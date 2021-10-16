import { useEffect, useState } from 'react';

const useProducts = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return {
        services
    }
};

export default useProducts;