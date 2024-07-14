import { PropTypes } from "prop-types";
// React는 .module.css 파일을 JS Object 로 변환시킴
import styles from "./Button.module.css";

function Button({ text, cntFunc }) {
    // class에 styles.btn 을 추가하여 CSS를 적용함
    return (
        <button className={styles.btn} onClick={cntFunc}>
            {text}
        </button>
    );
}

// Practice 와 동일하게 propTypes 를 사용하여 Type 및 필수 여부를 설정
Button.propTypes = {
    text: PropTypes.string.isRequired,
    cntFunc: PropTypes.func.isRequired,
};

export default Button;
