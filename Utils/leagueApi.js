export async function getLeagues(setLeagues) {
    try {
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`)

        if (!response.ok) {
            throw Error(`Error retrieving leagues`)
        }

        return response
    }

    catch {
        console.error(error);
        return [];
    }

}

export async function getLeague(leagueId) {
    try {
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_teams.php?id=${leagueId}`)

        if (!response.ok) {
            throw Error(`Error retrieving leagues`)
        }

        return response
    }

    catch {
        console.error(error);
        return [];
    }

}