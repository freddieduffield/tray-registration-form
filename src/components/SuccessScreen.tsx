import {useSelector} from "react-redux";
import './SuccessScreen.css';

export const SuccessScreen: React.FC = () => {
    const state = useSelector(state => state);
    console.log(JSON.stringify(state, null, 2));
    return (
        <div className="success-screen-container">
            <h1>✅</h1>
            <p>Please verify your email address, you should have received an email from us already!</p>
        </div>
    )
}
