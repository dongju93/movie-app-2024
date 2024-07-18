import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // 비동기 처리를 위한 async, await 사용
    const getMovies = async () => {
        // 1. 비동기로 데이터를 fetch 한 후
        // 2. 비동기로 불러온 데이터를 json() 메소드를 사용하여 json 형태로 변환
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h1>The Movies!</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    {/* map 사용 시 {()} 내부에 HTML 태그와 함께 JS 작성 */}
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img
                                src={movie.medium_cover_image}
                                alt={movie.title}
                            />
                            <h2>{movie.title}</h2>
                            <h3>{movie.year}</h3>
                            <p>Rating : {movie.rating}</p>
                            <p>{movie.summary}</p>
                            <ul>
                                {/* genre 에 대한 key는 index로 지정하여, 자동 증가 값을 고유 값으로 사용함 */}
                                {movie.genres.map((genre, index) => (
                                    <li key={index}>{genre}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
