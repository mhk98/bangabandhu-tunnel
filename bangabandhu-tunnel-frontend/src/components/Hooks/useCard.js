import { useEffect, useState } from "react";
const useCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/cardtbl")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return [card, setCard];
};

export default useCard;
