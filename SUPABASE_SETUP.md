# Connect StudyPacks to Supabase

StudyPacks remains a static website. Supabase supplies student accounts, saved study progress and real-time class games—no AI service or API key is used.

## 1. Create a project

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard) and sign in.
2. Select **New project**, choose an organisation, name it **StudyPacks**, set a database password and select a region near your students.
3. Wait for the project to finish creating.

## 2. Create the tables and real-time game data

1. In the Supabase dashboard, open **SQL Editor**.
2. Select **New query**.
3. Open the repository file \`supabase-schema.sql\`, copy every line into the query, and select **Run**.
4. You should see a success message. This creates the student plans, attempts, games, players and answers tables, turns on Row Level Security, and enables Realtime for game tables.

## 3. Set up sign-in

1. Open **Authentication → Providers**.
2. Open **Email** and ensure **Enable Email provider** is on.
3. During testing, you may turn off **Confirm email** in **Authentication → Providers → Email**. For a real student site, leave it on.
4. Open **Authentication → URL Configuration**.
5. Add your site’s full address under **Redirect URLs**. Add both the GitHub Pages address and Vercel address if you use both, for example:
   - \`https://sw573bfk-beep.github.io/studypacks/\`
   - \`https://your-vercel-project.vercel.app/\`

## 4. Enable Google

1. In [Google Cloud Console](https://console.cloud.google.com/), create or choose a project.
2. Configure the OAuth consent screen. Choose **External** if students are not all in the same Google Workspace.
3. Create an **OAuth client ID** of type **Web application**.
4. In Supabase, open **Authentication → Providers → Google**, enable it, and copy the displayed **Callback URL**.
5. Paste that callback URL into Google Cloud Console’s **Authorized redirect URIs**.
6. Copy the Google client ID and client secret into Supabase’s Google provider form, then save.

## 5. Paste the Project URL and anon key

1. In Supabase, open **Project Settings → API**.
2. Copy **Project URL** and the **anon public** key (not \`service_role\`).
3. In this repository, open **supabase-config.js**.
4. Paste them exactly here:

\`\`\`js
window.STUDYPACKS_SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
window.STUDYPACKS_SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";
\`\`\`

5. Commit that file and deploy. The anon public key is safe to expose because the database rules in \`supabase-schema.sql\` limit each student to their own plan and attempts.

## 6. Deploy

GitHub Pages can host this website exactly as it does today. If you prefer Vercel, import the \`sw573bfk-beep/studypacks\` GitHub repository at [https://vercel.com/new](https://vercel.com/new), leave the framework preset as **Other**, and deploy. No server code or Vercel environment variables are required for this static version.

## Important

The game score is calculated in the browser to keep the setup free and simple. It is suitable for normal classroom play, but it is not tamper-proof against a technically determined participant. A future server-side scoring function can harden competitive use.
