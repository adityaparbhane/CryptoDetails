// import React, { useEffect } from "react";
// import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

// const News = ({ simplify }) => {
//   const newsCategory = "Cryptocurrency";
//   const count = simplify ? 10 : 100;
//   const { data, error, isLoading } = useGetCryptoNewsQuery({
//     newsCategory,
//     count,
//   });
//   useEffect(() => {
//     console.log(data);
//   }, [data, error, isLoading]);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>News</h1>
//       {data?.articles?.map((article, index) => (
//         <div key={index}>
//           <h2>{article.title}</h2>
//           <p>{article.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default News;
