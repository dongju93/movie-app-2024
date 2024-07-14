// 컴포넌트 파일 내 function 을 import 하여 사용
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
    useEffect(() => {
        // 컴포넌트가 생성될 때 한 번만 실행, 왜냐하면 두번째 인자가 빈 배열이기 때문
        console.log("Created Hello component");
        // return 뒤 Function은 컴포넌트가 사라질 때(Destroy) 실행
        return () => {
            console.log("Destroyed Hello component");
        };
    }, []);
    return <h1>Hello World</h1>;
}

function App() {
    const [count, setCount] = useState(0);
    const [showing, setShowing] = useState(true);
    const [keyword, setKeyword] = useState("");

    const updateCount = () => {
        setCount((prev) => prev + 1);
    };
    const iRunOnlyOnce = () => {
        console.log("Call API");
    };
    // input 에서 값을 입력받아 keyword 에 저장
    const searchKeyword = (e) => {
        setKeyword(e.target.value);
    };
    const handleComponent = () => {
        setShowing(!showing);
    };

    // useEffect 를 사용하여 할당된 함수(console.log)를 한 번만 실행, 두 번째 인자가 빈 배열 일때
    // 두 번째 인자로 값을 넣어주면 해당 값이 변경될 때마다 해당 함수 실행
    useEffect(() => {
        // keyword 가 비어있지 않고 길이가 6보다 작을 때 검색 쿼리
        if (keyword !== "" && keyword.length < 6) {
            console.log("Search for short keyword:", keyword);
            // keyword 가 비어있지 않고 길이가 6보다 클 때 검색 쿼리
        } else {
            console.log("Search for long keyword:", keyword);
        }
    }, [keyword]);
    useEffect(iRunOnlyOnce, []);

    console.log("I run all the time");

    return (
        <div>
            <input
                onChange={searchKeyword}
                type="text"
                placeholder="Search for something"
            />
            <h1 className={styles.title}>{count}</h1>
            <Button text={"Update count"} cntFunc={updateCount} />
            <br />
            <button onClick={handleComponent}>
                {showing ? "Hide" : "Show"}
            </button>
            {showing ? <Hello /> : null}
        </div>
    );
}

export default App;
