# The solution

## In one sentence
A phone-friendly app where a new insurance rep talks through a quick debrief after each call, and then opens each morning to a list of today's callbacks, with everything from the last conversation on screen.

## What someone does with it
1. Open the app on the phone. The home screen shows today's callbacks.
2. Tap a person to open their contact card (details, last call, topics, life issues).
3. Make the call (outside the app).
4. Tap "Finish call." The app asks three questions, one at a time, and you answer each by voice:
   1. What topics did you cover?
   2. What companies were discussed?
   3. What are the next points of progress?
5. The app then asks for the callback date. You can say it by voice into a text box using the phone keyboard's dictation (for example "Thursday at 2") or tap a date picker with quick buttons ("Tomorrow," "In 3 days," "Next week"). The app shows the interpreted date and time and asks "Is that right?" before you save. Built in the early draft. It also asks for any objections and any life issues to follow up on, each answered by voice as free text (no tags in version 1).
6. Save. The note is added to the contact's history and the person appears on the right day.
7. If a callback was missed, the person rolls over to the next day, marked yellow at 1 day overdue and red at 2 or more days, with a text label such as "2 days overdue."

## The screens
TODO: confirm each screen. Draft:

**1. Today's callbacks (home)**
- Shows: people to call today, overdue ones first, with a yellow or red label and "N days overdue."
- Tap a person: opens their contact card.
- Tap "Add contact": opens the new contact screen.

**2. Contact card**
- Shows: name, phone, do-not-call flag, callback date, then a timeline of every call with the newest on top. Each call entry shows its topics covered, companies discussed, objections, life issues, and next points of progress.
- An "Open issues" box sits above the timeline, listing all unresolved life issues from every call. Tapping an issue marks it resolved.
- The newest call is at the top of the timeline, so last time's notes are visible without scrolling.
- Tap "Finish call": starts the debrief.
- Tap phone number: opens the phone's dialer with the number filled in. You tap "Finish call" yourself afterward, because the app can't tell when a call ends.
- Tap do-not-call: marks the person, removes them from the callback list, shows a clear "Do not call" banner on their card, and disables the call button. The card and history stay for the record. Only I can undo the flag, and only with a confirmation and a typed reason, which is saved on the card with the date.

**3. Debrief (one question at a time)**
- Shows: one question and a large text box.
- Tap the box and use the phone keyboard's dictation mic to speak. The text appears in the box and is saved as spoken in version 1.
- Tap Next: moves to the following question. Tap Back: returns to the previous one.
- Last step: Save.

**4. New contact**
- Shows: name (required), phone (required), first callback date (optional).
- Tap Save: creates the contact. If a callback date was set, they appear on that day's list.

## What it does not do
Proposed. Confirm each one, or tell me which to add.
- No AI auto-sorting of notes in version 1. The spoken text is saved as-is. (Planned for version 2.)
- No real client data. Testing and the demo use fake contacts only.
- No placing calls or texting from inside the app.
- No accounts, logins, or sharing between users. It is a single-user app, and I am the only one who makes changes. The GitHub repo stays private.
- No connection to a real CRM, calendar, or email.
- No compliance or legal advice about what to say on calls.
- No publishing online (running on my own computer is enough).
- No reports or charts inside the app. TODO: confirm.

## Where the information comes from
**What the person enters:**
- Name and phone number for each contact
- Spoken debrief answers (topics, companies, next points of progress)
- Callback date
- Objections and life issues
- The do-not-call flag

**What the app already knows:**
- Today's date
- Whether a callback is overdue, and by how many days
- The history of past calls for each contact
- Which contacts to show on the home screen today

## Where it runs
The app runs on my laptop and I open it on my phone over the same Wi-Fi. Data is stored on the laptop. It also has to work in a phone-sized window on the laptop.

## Open questions
- DECIDED: browsers usually block the microphone on pages opened over plain http from another device. So the debrief uses plain text boxes, and I speak into them with the phone keyboard's built-in dictation mic. The app has no mic button of its own on the phone. TODO: confirm whether to also add an in-app mic button that works on the laptop.
- Should version 2 send note text to an AI service? Decide before building it.
