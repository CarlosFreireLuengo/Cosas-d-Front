export type RankingTuple = [number, string, boolean];

export function printRankings(rankings: Array<RankingTuple>): void {
    for(let ranking of rankings) {
        console.log(ranking);
    }
}