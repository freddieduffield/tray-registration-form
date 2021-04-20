import {useSelector} from "react-redux";

export const SuccessScreen: React.FC = () => {
    const state = useSelector(state => state);
    console.log(JSON.stringify(state, null, 2));
    return (
        <>✅</>
    )
}
