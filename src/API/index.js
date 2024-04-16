const cohortName = "2401-ftb-et-web-am";
export const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(APIURL);
    const json = await response.json();

    return json;
  } catch (error) {
    console.log("trouble fetching players");
    throw error;
  }
}
export async function fetchSinglePlayer() {
  try {
    const response = await fetch(`${APIURL}/PLAYER-ID`);
    const json = await response.json();

    return json;
  } catch (error) {
    console.log("trouble fetching single player");
    throw error;
  }
}
