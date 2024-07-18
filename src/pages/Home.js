import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
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
                        // Movie 컴포넌트에 props로 데이터 전달
                        <Movie
                            movieImg={movie.medium_cover_image}
                            movieTitle={movie.title}
                            movieYears={movie.years}
                            movieRating={movie.rating}
                            movieSum={movie.summary}
                            movieGen={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
