# Call Back Log (early draft)

A phone-friendly call-tracking app for a new insurance rep. Single user, runs on your own computer.

## Run it
1. Install Node.js (version 18 or newer).
2. In this folder run: `node server.js`
3. Open the address it prints. On your computer use `http://localhost:3000`. On your phone (same Wi-Fi) use the "On your phone" address.

All data is saved in `data.json` next to `server.js`. That file is not committed to git. To reset to the fake sample contacts, stop the server and delete `data.json`.

## Use only fake data
This app has no logins and is not secure enough for real client information. Every contact shipped with it is fake.

## What this draft does
- Today's callbacks, with overdue ones rolled over: yellow at 1 day, red at 2 or more days, always labeled.
- Add contact (name and phone required).
- Contact card with phone dialer link, open life issues, and a call timeline (newest first).
- Guided "Finish call" debrief, one question at a time. Speak into the text boxes with your phone keyboard's dictation mic.
- Do-not-call flag. It blocks the call button, shows a banner, and removing it needs a typed reason.

## Spoken dates
On the callback step, say or type a phrase and the app shows the date it understood, asking "Is that right?" before you save. It understands things like "tomorrow", "Thursday at 2", "next Monday", "in 3 days", "Nov 19th at 9am", "the 19th", and "11/19". A bare weekday means its next occurrence, so on a Tuesday "Tuesday" means next Tuesday. A time with no am/pm is guessed (1 to 6 = PM, 7 to 11 = AM). If a phrase can't be understood you see a message and can use the date picker instead.

The parser is in `public/dateparse.js` and was tested against 32 phrases.

## Not built yet (from solution.md)
- Version 2: auto-sorting a spoken note into fields.
