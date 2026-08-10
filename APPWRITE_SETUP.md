# Set up StudyPacks with Appwrite Cloud

StudyPacks now uses Appwrite Cloud for student accounts, saved study progress and real-time class games. It does not use Supabase, Firebase, OpenAI, or any paid AI API.

## 1. Create a free Appwrite project

1. Open [Appwrite Cloud](https://cloud.appwrite.io/) and create a free account.
2. Select **Create project**, name it **StudyPacks**.
3. Under **Add platform**, choose **Web** and add your live domain. Add both, if you use both:
   - \`sw573bfk-beep.github.io\`
   - your Vercel production domain, for example \`studypacks.vercel.app\`

Appwrite Cloud’s Free plan includes two projects, and includes Auth, database and Realtime capabilities. See [Appwrite’s Free-plan documentation](https://appwrite.io/docs/advanced/billing/free).

## 2. Create the database

1. In the Appwrite Console, open **Databases**.
2. Create a database with ID **\`studypacks\`**.
3. Create each table below with **Row security enabled**.
4. For each table, add a **Create** permission for **Users**. Leave read/update access controlled by the rows; the website assigns the appropriate row permissions automatically.

Use these exact table IDs and columns:

### \`study_plans\`

| Column | Type | Required |
|---|---|---|
| \`user_id\` | String, size 36 | Yes |
| \`pack_id\` | String, size 100 | Yes |
| \`exam_date\` | String, size 10 | Yes |
| \`daily_minutes\` | Integer | Yes |

### \`study_attempts\`

| Column | Type | Required |
|---|---|---|
| \`user_id\` | String, size 36 | Yes |
| \`pack_id\` | String, size 100 | Yes |
| \`topic\` | String, size 120 | Yes |
| \`activity_type\` | String, size 20 | Yes |
| \`content_key\` | String, size 40 | No |
| \`correct\` | Boolean | Yes |

### \`class_games\`

| Column | Type | Required |
|---|---|---|
| \`code\` | String, size 6 | Yes |
| \`pack_id\` | String, size 100 | Yes |
| \`host_user_id\` | String, size 36 | Yes |
| \`status\` | String, size 12 | Yes |
| \`question_index\` | Integer | Yes |
| \`question_started_at\` | String, size 40 | No |

### \`class_game_players\`

| Column | Type | Required |
|---|---|---|
| \`game_id\` | String, size 36 | Yes |
| \`user_id\` | String, size 36 | Yes |
| \`nickname\` | String, size 24 | Yes |
| \`score\` | Integer | Yes |

### \`class_game_answers\`

| Column | Type | Required |
|---|---|---|
| \`game_id\` | String, size 36 | Yes |
| \`player_id\` | String, size 36 | Yes |
| \`question_index\` | Integer | Yes |
| \`answer_index\` | Integer | Yes |
| \`correct\` | Boolean | Yes |
| \`points\` | Integer | Yes |

## 3. Turn on authentication

1. Open **Auth → Settings** and enable **Email/Password**.
2. Open **Auth → OAuth 2 providers**, enable **Google**.
3. Appwrite displays a callback URL for Google. Copy it into the **Authorized redirect URIs** field of the Google OAuth client you create in [Google Cloud Console](https://console.cloud.google.com/).
4. Paste the Google client ID and client secret back into Appwrite, then save.

## 4. Paste your connection values

Open \`appwrite-config.js\` in this repository and replace:

\`\`\`js
window.STUDYPACKS_APPWRITE_ENDPOINT = "https://YOUR-REGION.cloud.appwrite.io/v1";
window.STUDYPACKS_APPWRITE_PROJECT_ID = "YOUR_PROJECT_ID";
window.STUDYPACKS_APPWRITE_DATABASE_ID = "studypacks";
\`\`\`

Find the endpoint and Project ID in **Appwrite Console → Overview**. The database ID is \`studypacks\` if you used the instructions above.

## 5. Deploy

Commit \`appwrite-config.js\` after entering those three values. Vercel automatically redeploys when \`main\` changes. No Vercel environment variables, API key, SQL script, or paid API is required.

## Notes

Appwrite permissions make each student’s plan and study attempts private. Games are readable by signed-in students so classmates can join a lobby and see the live leaderboard. Scores are calculated in the browser to keep this version free and simple, so they are suitable for normal classroom use rather than high-stakes competition.
