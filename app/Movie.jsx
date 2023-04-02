import Link from "next/link"
import Image from "next/image"

export default function Movie({ id, title, poster_path, release_date }) {
    return (
        <div>
            <h1 className="font-bold">{title}</h1>
            <p>{release_date}</p>
            <Link href={`/movie/${id}`}>
                <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} width={500} height={750} alt="Movie Poster" />
            </Link>
        </div>
    )
}