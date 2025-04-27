import { Link } from "react-router-dom"
import useFetchPosts from "../hooks/useFetchPosts"
import useAddChallenge, {Challenge} from "../hooks/useAddChallenge";
import './Home.css'
import ChallengeDetail from "./ChallengeDetail";


const Home = () => {

    const {challenge, isLoading, setChallenge, error} = useFetchPosts()
    const {Title, 
        setTitle, 
        description, 
        setDescription, 
        isLoadingNewChallenge, 
        handleSubmit, 
        formId,
             } = useAddChallenge((newChallenge: Challenge) => {
              setChallenge((prevChallenges) => [newChallenge,...prevChallenges])
         })
    
    return (
        <div>
        <h2>Liste de Challenge de Developpeurs</h2>
        <h2>Ajout de Défi</h2>
        <div className="form-box">
             <form id={formId()} onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Titre"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                placeholder="Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                />
                <button type="submit">Envoyer</button>
                {isLoadingNewChallenge && <p>Envoi de donnée...</p>}
            </form>
        </div>
        <div>
        {isLoading ? (
          <p>Chargement en cours...</p>
        ) : error ? (
          <p>Erreur : {error}</p>
        ) : (
          challenge.map((challenge) => (
            <div key={challenge.id}>
              <h3 className="title">{challenge.title}</h3>
              <p>{challenge.body}</p>
              <Link to={`/challenge/${challenge.id}`} state={challenge}>
                    Voir le challenge
              </Link>
            </div>
          ))
        )}
        </div>
        
        <Link to="/about">aller vers apropos</Link>
        
        </div>
    )
}

export default Home