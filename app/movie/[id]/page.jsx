// this loads when the movie is clicked
// url is /movie/[id]
// id is retrieved from the url
// we call the api with the id
// we get the data
// we render the data

import Image from "next/image"

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    console.log(res)

    const params = res.results.map((movie) => {
        return {
            params: {
                id: movie.id.toString()
            }
        }
    })

    return {
        paths: params,
        fallback: false
    }
}

export default async function Page({ params }) {
    const { id } = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    console.log(res)

    return (
        <main>
            <Image className="my-12" src={`https://image.tmdb.org/t/p/original${res.backdrop_path}`} width={1920} height={1080} alt="Movie Poster" />
            <h2 className="font-bold">{res.title}</h2>
            <p>{res.release_date}</p>
            <p>{res.overview}</p>
            <p className={`${res.status === "Released" ? "bg-green-500" : "bg-red-500"} inline-block px-4 py-2 rounded text-sm my-2`}>{res.status}</p>
        </main >
    )
}