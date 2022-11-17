import { useParams } from 'react-router-dom';

const Success = () => {
  const { transactionId } = useParams();

  return (
    <div>
      <h2 className="text-3xl text-center text-green-500">
        Transaction ID: {transactionId}
      </h2>
    </div>
  );
};

export default Success;
