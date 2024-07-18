import PropTypes from "prop-types";

// props로 전달받은 object를 할당하여 데이터 사용 및 HTML 랜더링
function Movie({
    movieImg,
    movieTitle,
    movieYears,
    movieRating,
    movieSum,
    movieGen,
}) {
    return (
        <div>
            <img src={movieImg} alt={movieTitle} />
            <h2>{movieTitle}</h2>
            <h3>{movieYears}</h3>
            <p>Rating : {movieRating}</p>
            <p>{movieSum}</p>
            <ul>
                {/* genre 에 대한 key는 index로 지정하여, 자동 증가 값을 고유 값으로 사용함 */}
                {movieGen.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

// protoTypes 으로 필수여부와 타입을 정의
Movie.protoTypes = {
    movieImg: PropTypes.string.isRequired,
    movieTitle: PropTypes.string.isRequired,
    movieYears: PropTypes.number.isRequired,
    movieRating: PropTypes.number.isRequired,
    movieSum: PropTypes.string.isRequired,
    movieGen: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
