import React from 'react'
import { request } from 'graphql-request'
import useSWR from 'swr'

const fetcher = (query: any) => request('/api/graphql', query)
export const FetchDataGraph = () => {
    const { data, error } = useSWR(`
        {
            Movie(title: "Inception") {
            releaseDate
            actors {
                name
            }
            }
        }
    `, fetcher);
    if (!data) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    return (
        <div>
            <div>{data.Movie.title}</div>
            <div>{data.Movie.releaseDate}</div>
            <ul>
                {data.Movie.actors.map((actor: any) => (
                    <li key={actor.name}>{actor.name}</li>
                ))}
            </ul>
        </div>
    );
}
