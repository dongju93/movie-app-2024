// 컴포넌트 파일 내 function 을 import 하여 사용
import Button from "./Button";
import styles from "./App.module.css"

function App() {
    return (
        <div>
            <h1 className={styles.title}>Welcome back!!!!</h1>
            <Button text={"this is text"} />
        </div>
    );
}

export default App;
