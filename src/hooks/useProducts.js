import { useEffect, useState } from 'react';

const useProducts = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://genius-car-mechanic.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return {
        services
    }
};

export default useProducts;