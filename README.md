# React + Vite

First create the file structure as listed in instructions

create the components and fill with dummy data

set up the react router

fetch all players from the API in the index.js file
import to your AllPlayers.jsx component
in AllPlayers.jsx import useState and useEffect
in use state , const [players, setPlayers] = useStete([])

        inboke useEffect and pass it an empty dependency array
            useEffect(() => {}, [])
    define an async function that calls the fetchPlayers function and uses the setPlayers function to set them into state, then invoke that function

map over data and render it
(see step 5 for code)

Add a button to single player component
needs to use the useNavigate hook from react-router-dom and navigate to SinglePlayer Component

fetch single player from API and render details onto the component
useParams

create a NewPlayerForm component
create a delete button that deletes a player

lastly, use some css to make it cute

https://app.netlify.com/sites/lovely-crumble-6553d9/deploys/661e77ea81320712b23bec6b
^^ here is the netlify link
