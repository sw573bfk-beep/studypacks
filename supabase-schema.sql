-- StudyPacks: My Study + Class Game
-- Run this whole file once in Supabase Dashboard > SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.study_plans (
  user_id uuid not null references auth.users(id) on delete cascade,
  pack_id text not null,
  exam_date date not null,
  daily_minutes integer not null check (daily_minutes in (10, 20, 30, 45, 60)),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, pack_id)
);

create table if not exists public.study_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  pack_id text not null,
  topic text not null default 'General',
  activity_type text not null check (activity_type in ('card', 'quick', 'practice', 'exam')),
  content_key text,
  correct boolean not null,
  created_at timestamptz not null default now()
);

create index if not exists study_attempts_student_pack_date
  on public.study_attempts (user_id, pack_id, created_at desc);

create table if not exists public.class_games (
  id uuid primary key default gen_random_uuid(),
  code char(6) not null unique check (code ~ '^[0-9]{6}$'),
  pack_id text not null,
  host_user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'lobby' check (status in ('lobby', 'question', 'finished')),
  question_index integer not null default 0,
  question_started_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists class_games_code_pack
  on public.class_games (code, pack_id);

create table if not exists public.class_game_players (
  id uuid primary key default gen_random_uuid(),
  game_id uuid not null references public.class_games(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  nickname text not null check (char_length(nickname) between 1 and 24),
  score integer not null default 0 check (score >= 0),
  joined_at timestamptz not null default now(),
  unique (game_id, user_id)
);

create table if not exists public.class_game_answers (
  id uuid primary key default gen_random_uuid(),
  game_id uuid not null references public.class_games(id) on delete cascade,
  player_id uuid not null references public.class_game_players(id) on delete cascade,
  question_index integer not null check (question_index >= 0),
  answer_index integer not null check (answer_index >= 0),
  correct boolean not null,
  points integer not null default 0 check (points >= 0),
  answered_at timestamptz not null default now(),
  unique (game_id, player_id, question_index)
);

alter table public.study_plans enable row level security;
alter table public.study_attempts enable row level security;
alter table public.class_games enable row level security;
alter table public.class_game_players enable row level security;
alter table public.class_game_answers enable row level security;

create policy "Students manage their own plans" on public.study_plans
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Students manage their own attempts" on public.study_attempts
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Signed-in students can see games" on public.class_games
  for select to authenticated using (true);

create policy "A host can create games" on public.class_games
  for insert to authenticated with check (auth.uid() = host_user_id);

create policy "Only the host controls a game" on public.class_games
  for update to authenticated using (auth.uid() = host_user_id) with check (auth.uid() = host_user_id);

create policy "Signed-in students can see players" on public.class_game_players
  for select to authenticated using (true);

create policy "Students add themselves to games" on public.class_game_players
  for insert to authenticated with check (auth.uid() = user_id);

create policy "Students update only their score" on public.class_game_players
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Signed-in students can see game answers" on public.class_game_answers
  for select to authenticated using (true);

create policy "Students submit their own answers" on public.class_game_answers
  for insert to authenticated with check (
    exists (
      select 1 from public.class_game_players p
      where p.id = player_id and p.user_id = auth.uid() and p.game_id = class_game_answers.game_id
    )
  );

alter publication supabase_realtime add table public.class_games;
alter publication supabase_realtime add table public.class_game_players;
alter publication supabase_realtime add table public.class_game_answers;
