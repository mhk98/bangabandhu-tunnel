import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Success = () => {
  const { tranId } = useParams();
  const [success, setSuccess] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/ssl-payment-success/${tranId}`)
      .then((res) => res.json())
      .then((data) => setSuccess(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center">Success Page</h2>
      <h3>{success.card_type}</h3>
    </div>
  );
};

export default Success;
