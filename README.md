# Standalone MCQ Frontend

This is a standalone React + Vite MCQ frontend with demo questions.

## What is included

- Start Test screen
- Demo MCQ questions
- Question navigation
- Previous / Next buttons
- Option selection
- Progress bar
- Submit Test
- Score/result screen
- Restart Test
- Responsive UI
- No backend
- No API
- No authentication
- No database

## Run locally

1. Install Node.js.
2. Open this folder in VS Code.
3. Open terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the localhost URL shown by Vite.

## Where to change demo questions

Open:

`src/main.jsx`

Find:

`const demoQuestions = [...]`

Replace the demo questions later with API/integration data.

## Integration handover

The senior/team can later connect:
- Login/authentication
- Backend API
- Real question data
- Candidate/user details
- Timer
- Result submission
- Database

The current application is intentionally frontend-only.
