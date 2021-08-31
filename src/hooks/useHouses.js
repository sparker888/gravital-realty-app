import { useState, useEffect } from "react";

const useHouses = () => {
    const [allHouses, setAllHouses] = useState([]);

    useEffect(() => {
      const fetchHouses = async () => {
        const rsp = await fetch("/houses.json"); // This would normally call an API, but we have dummy JSON data to simulate.
        const houses = await rsp.json();
        setAllHouses(houses);
      };
      fetchHouses();
    }, []);

    return allHouses;
}

export default useHouses;