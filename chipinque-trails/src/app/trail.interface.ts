export interface Trail {
  code: string;
  name: string;
  description: string;
  walk_up: TrailActivity;
  walk_down: TrailActivity;
  bike_up: TrailActivity;
  bike_down: TrailActivity;
}

export interface TrailActivity {
  difficulty: number; // 1-5
  banned: boolean;
  description: string;
}
