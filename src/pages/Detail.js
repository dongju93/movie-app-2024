// id를 parameter로 받아 오려면 useParams()를 사용해야 함
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    // 건네받은 object 내 id 를 추출
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const movieDetailFetch = async () => {
        const movieJson = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(movieJson);
        setMovieDetail(movieJson.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        movieDetailFetch();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
            <h2>
                {movieDetail.title} ({movieDetail.year})
            </h2>
            <img
                src={movieDetail.large_cover_image}
                alt={movieDetail.title}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>
                <strong>Rating:</strong> {movieDetail.rating}
            </p>
            <p>
                <strong>Runtime:</strong> {movieDetail.runtime} minutes
            </p>
            <p>
                <strong>Genres:</strong> {movieDetail.genres.join(", ")}
            </p>
            <p>
                <strong>Description:</strong> {movieDetail.description_full}
            </p>
            <p>
                <strong>Like Count:</strong> {movieDetail.like_count}
            </p>
            <p>
                <strong>Language:</strong> {movieDetail.language}
            </p>
            <p>
                <strong>MPA Rating:</strong> {movieDetail.mpa_rating}
            </p>
            <h3>Torrents:</h3>
            <ul>
                {movieDetail.torrents.map((torrent, index) => (
                    <li key={index}>
                        <a
                            href={torrent.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {torrent.quality} - {torrent.size}
                        </a>
                        <p>
                            Seeds: {torrent.seeds} | Peers: {torrent.peers}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Detail;
