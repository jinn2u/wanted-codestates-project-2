export interface MatchesState {
  data: FetchGetMatches | [];
  loading: boolean;
}

export interface Matches {
  accountNo: string;
  matchId: string;
  matchType: string;
  teamId: string;
  character: string;
  startTime: string;
  endTime: string;
  channelName: string;
  trackId: string;
  playerCount: number;
  matchResult: string;
  seasonType: string;
  player: Player;
}
export interface Player {
  accountNo: string;
  characterName: string;
  character: string;
  kart: string;
  license: string;
  pet: string;
  flyingPet: string;
  partsEngine: string;
  partsHandle: string;
  partsWheel: string;
  partsKit: string;
  rankinggrade2: string;
  matchRank: string;
  matchRetired: string;
  matchWin: string;
  matchTime: string;
}

export interface FetchGetMatches {
  matches: Matches[];
  nickName: string;
}
