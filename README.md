<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js, PHP + MySQL (see [devnexus-backend](https://github.com/Splitkkiller/Devnexus-backend))

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

The AI assistant, login, and stats all call the PHP backend directly, so the backend needs to be running too. There's no `GEMINI_API_KEY` to set here anymore — the frontend never talks to Gemini directly. The key lives in the backend's `config.local.php` (see that repo's setup instructions), which keeps it out of the browser entirely.
