// import { useEffect, useState } from 'react';

// export function useLotteries() {
//   const [lotteries, setLotteries] = useState();

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setLotteries(data))
//   }, []);

//   return lotteries;
// }

// import { useEffect, useState } from 'react';

// export function useLotteries() {
//   const [lotteries, setLotteries] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => setLotteries(json));
//   }, []);

//   return lotteries;
// }

// export const getUser = async() => {
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     let response = await fetch(url)
//     return  response.json();
// }

