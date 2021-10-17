import React, { useEffect, useState } from 'react';

const FoodData = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default FoodData;