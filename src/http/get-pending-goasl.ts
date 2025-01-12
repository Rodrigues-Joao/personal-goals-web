type PedingGoalsResponseType = {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completationCount: number;
}

export async function GetPendingGoals(): Promise<PedingGoalsResponseType[]>
{
    const response = await fetch( "http://localhost:3333/pending-goals" )
    const data = await response.json()
    return data
}