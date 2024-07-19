import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// react-router-dom을 사용하면 페이지를 라우팅할 수 있음
// App.js는 더이상 페이지 자체를 render 하지 않고
// Router 를 사용하여 페이지를 이동할 수 있도록 함
function App() {
    return (
        // Router -> Routes -> Route
        // Route path 가 URI 임
        // element 가 해당 URI 에 매칭되는 페이지 컴포넌트
        <Router>
            <Routes>
                <Route path="/movie-app-2024" element={<Home />} />
                {/* URI에 변수를 할당하여 동적으로 생성할 수 있음, 상세페이지에 유용 */}
                {/* ex) movie/1, movie/2, movie/3, ... */}
                <Route path="/movie-app-2024/movie/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default App;
