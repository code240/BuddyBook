import "../../AllCss/Face.css";
import { useHistory } from "react-router-dom";

const Face = () => {
    let history = useHistory();
    return (
        <>
            <div className="container-fluid face-main">
                <h1 className="main-face-heading">
                    What Your <span className="r">F</span>riends Think About <span className="r">Y</span>ou?
                </h1>
                <div className="container-fluid background-image"></div>
                <span className="text-create">
                    Create Your <span className="r">Q</span>uestion <span className="r">B</span>ook 
                </span>
                <span className="text-create text-infoo">
                    Your Friends Will Give Answers Of
                    Intersting Questions About You
                </span>
                <button className="create-btn btn btn-primary" onClick={()=>history.push('/create')}>Create Now</button>
            </div>
        </>
    );
}
export default Face;