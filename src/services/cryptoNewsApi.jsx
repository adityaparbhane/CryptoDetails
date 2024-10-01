// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsApiHeaders = {
//   "x-rapidapi-key": "75cd3ec86cmshf7e5170fd882720p19120djsn3b2438dab802",
//   "x-rapidapi-host": "google-news13.p.rapidapi.com",
// };

// const baseUrl = "https://google-news13.p.rapidapi.com";

// const createRequest = (url, params) => ({
//   url,
//   headers: cryptoNewsApiHeaders,
//   params,
// });

// export const cryptoNewsApi = createApi({
//   reducerPath: "cryptoNewsApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({ newsCategory, count }) => {
//         const params = {
//           keyword: newsCategory,
//           lr: "en-US",
//           count: count,
//         };
//         const url = `/search`;
//         return createRequest(url, params);
//       },
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;
