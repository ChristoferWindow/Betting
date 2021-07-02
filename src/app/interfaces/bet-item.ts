export interface BetItem {
    _id: string;
    teams: {
        team1: {
            teamId: string,
            rate: number,
        },
        team2: {
            teamId: string,
            rate: number,
        },
    };
    draw: number;
}
