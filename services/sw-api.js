// Get all Starships
// https://swapi.dev/api/starships/


export async function getAllStarships() 
{

        try 
            {
                const response = await fetch("https://swapi.dev/api/starships/");
                const data = await response.json();
                console.log(data);
                return data;
            
                
            } 
                
        catch (error) 
            {
                console.error("Error fetching starships:", error);
                throw error; // Re-throw the error for handling elsewhere
            }
    
}