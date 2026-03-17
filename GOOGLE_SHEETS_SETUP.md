# Google Sheets Lead Setup

1. Open your Google Sheet:
   `https://docs.google.com/spreadsheets/d/1Z_9k3ZaDt_kfOzDGxX77A79E817JIa7UQ3BtZGIjL1Y/edit?gid=0#gid=0`
2. Click `Extensions` -> `Apps Script`.
3. Replace the default code with the contents of [google-apps-script.gs](/c:/Users/aiden/henry-car-detailing/google-apps-script.gs).
4. Save the project.
5. Click `Deploy` -> `New deployment`.
6. Choose `Web app`.
7. Set:
   `Execute as`: `Me`
   `Who has access`: `Anyone`
8. Deploy and copy the web app URL that ends with `/exec`.
9. Create a local `.env` file in the project root based on [.env.example](/c:/Users/aiden/henry-car-detailing/.env.example).
10. Paste your web app URL into `VITE_BOOKING_WEBHOOK_URL`.
11. Add the same `VITE_BOOKING_WEBHOOK_URL` value to your Vercel project environment variables.
12. Redeploy the site to Vercel.

Notes:

- This script is already pointed at your provided Google Sheet ID.
- The sheet tab will be named `Leads`.
- New submissions will append one row per customer request.
- The website uses a direct browser post to Apps Script, so the page shows a sent confirmation once the request is submitted.
