import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_KEY } from '../settings/constants';

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    tagTypes: ['Movies'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        filtersMovies: builder.query({
            query: ({ genre, years, rating, movieType, limit }) =>
                `/v1.3/movie?${movieType}&${genre}&${years}&${rating}&limit=${limit}&sort=year&sort=rating.kp&page=1&token=${API_KEY}`,
            providesTags: (result) => result
                ? [
                    ...result.docs.map(({ id }: { id: number }) => ({ type: 'Movies', id })),
                    { type: 'Movies', id: 'LIST' }
                ]
                : [{ type: 'Movies', id: 'LIST' }]
        }),
    }),

});

export const { useFiltersMoviesQuery } = moviesApi;
