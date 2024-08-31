export enum TrailDifficultyLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
  EXPERT = "expert",
}


export type Lift = {
  id: string;
  name: string;
  status?: LiftStatus | null;
  capacity: number;
  night: boolean;
  elevationGain: number;
  trailAccess: Array<Trail>;
};

export type Trail = {
  id: string;
  name: string;
  status?: TrailStatus | null;
  difficulty: string;
  groomed: boolean;
  trees: boolean;
  night: boolean;
  accessedByLifts: Array<Lift>;
};

export enum LiftStatus {
  Open = "OPEN",
  Closed = "CLOSED",
  Hold = "HOLD",
}

export enum TrailStatus {
  Open = "OPEN",
  Closed = "CLOSED",
}

export type SearchResult = Lift | Trail;

export type Query = {
  allLifts: Array<Lift>;
  allTrails: Array<Trail>;
  Lift: Lift;
  Trail: Trail;
  liftCount: number;
  trailCount: number;
  search: Array<SearchResult>;
};

export type QueryAllLiftsArgs = {
  status?: LiftStatus | null;
};

export type QueryAllTrailsArgs = {
  status?: TrailStatus | null;
};

export type QueryLiftArgs = {
  id: string;
};

export type QueryTrailArgs = {
  id: string;
};

export type QueryLiftCountArgs = {
  status?: LiftStatus | null;
};

export type QueryTrailCountArgs = {
  status?: TrailStatus | null;
};

export type QuerySearchArgs = {
  term?: string | null;
  status?: LiftStatus | null;
};

export type Mutation = {
  setLiftStatus: Lift;
  setTrailStatus: Trail;
};

export type MutationSetLiftStatusArgs = {
  id: string;
  status: LiftStatus;
};

export type MutationSetTrailStatusArgs = {
  id: string;
  status: TrailStatus;
};

export type Subscription = {
  liftStatusChange?: Lift | null;
  trailStatusChange?: Trail | null;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}
