import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <Spinner
        animation="border"
        role="status"
        style={{
            width: "100px",
            height: "100px",
            margin: "none",
            display: "block",
        }}
        />
    )
}

export default Loader;