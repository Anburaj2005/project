import React, { useState, useEffect } from 'react'

function Container() {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        fetch("https://krds-assignment.github.io/aoc/api-assets/data.json")
            .then((response) => {
                return response.json();
            }).then((data) => {
                let product = data.results

                // console.log(product);
                setUser(product)

            })
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>


        </div>
    )
}

export default Container;