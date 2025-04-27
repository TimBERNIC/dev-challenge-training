import { useParams, Link, useLocation } from "react-router-dom";

const ChallengeDetail = () => {

    const {challengeId}= useParams()
    const location = useLocation()
    const challenge = location.state;


    if (!challenge) {
        return <p>Challenge introuvable.</p>
    }

    return (
        <div>
            <h2>{challenge.title}</h2>
            <h3>{challenge.body}</h3>
            <Link to='/'>Retour à l'accueil</Link>
        </div>

    )
}

export default ChallengeDetail