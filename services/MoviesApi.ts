import { createApi, fetchBaseQuery, buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react';
import { API_URL, API_KEY } from '../settings/constants';
import { HYDRATE } from 'next-redux-wrapper'

interface FiltersMoviesInt {
    genre?: string, years?: string, rating?: string, movieType?: string, limit?: number
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    tagTypes: ['Movies'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

    endpoints: (builder) => ({
        filtersMovies: builder.query({
            query: ({ genre = '', years = 'year=2000-2023', rating = 'rating.kp=7-10', movieType = 'type=movie', limit = 24 }) =>
                `/v1.3/movie?${movieType}&${genre}&${years}&${rating}&limit=${limit}&sort=year&sort=rating.kp&page=1&token=${API_KEY}`,
            providesTags: (result: any) => result
                ? [
                    ...result.docs.map(({ id }: { id: number }) => ({ type: 'Movies', id })),
                    { type: 'Movies', id: 'LIST' }
                ]
                : [{ type: 'Movies', id: 'LIST' }]
        }),
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
});

export const { useFiltersMoviesQuery } = moviesApi;
export const { filtersMovies } = moviesApi.endpoints;
