import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            // response에서 json 데이터를 가져옴
            .then((response) => response.json())
            // 가져온 json 데이터를 setCoins로 설정
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The Coins!</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map((coin) => (
                    <li key={coin.id}>
                        {coin.name} ({coin.symbol}) - ${coin.quotes.USD.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
