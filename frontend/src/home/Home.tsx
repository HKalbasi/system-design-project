import { Link } from "react-router-dom";
import { useApi } from "../api/hooks";

export const Home = () => {
    const [loading, data] = useApi('/current_user');
    return <div>
        <h1>خانه</h1>
        {loading ? <p>در حال بارگیری</p> : <p>{JSON.stringify(data)}</p>}
        <br />
        <Link to='/users/login'>وارد شوید</Link>
    </div>;
};
