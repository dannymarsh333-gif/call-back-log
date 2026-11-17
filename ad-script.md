# Ad script

## Length and format
46.5 seconds. 1920x1080 for now (the rebuild will be square 1080x1080, 60fps).
Built as an HTML motion graphic: `AI class\Call Back Log Ad.html` (copy at `app/public/ad.html`).
No voiceover. Every spoken line is on-screen text (speech bubbles or big captions).

## The scenes
| Seconds | On screen | Voice or text | Sound |
|---|---|---|---|
| 0–6 | THE HOOK. Stick-figure rep at his desk, phone to his ear, camera slowly pushing in. Words pop into a speech bubble one by one. He hangs up at ~5s. | Bubble: "Ok, alright, sounds good, FANTASTIC, great, have a great day, Jane!" ("FANTASTIC" big and orange) | Office hum. Phone click on the hang-up. |
| 6–9.4 | He goes still. Thought bubble on his left. The wall clock spins a full hour. | Thought bubble: "What did I just talk about for the past hour?" | Music drops out. Clock ticking, speeding up with the hands. |
| 9.4–13.8 | THE PROBLEM. Camera pulls back. A coworker walks in and drops a stack of papers on the desk (~11s). | Coworker bubble: "Here, some notes from my calls today. Organize this." ("Organize this." in orange) | Footsteps, a thud on the drop, paper rustle. |
| 13.8–19 | OVERLOAD. Hard cut in close. The sheets fly up and turn into 11 sticky notes and question marks: "555-0142", "Call back??", "Tues or Thurs?", "Jane or June?", "Acme? Harbor?", "3 PM?", "quote??". He grabs his head and shakes. At ~18s every note gets sucked into his head. | (No words beyond the notes.) | Rapid clicks and buzzing that build, then a whoosh as the notes vanish. |
| 19–21 | THE APP. The notes collapse into a phone that grows on screen: Today's callbacks (Jane Doe, Mark Rivera, Priya Shah). | Caption: "Meet Call Back Log." | Music comes in, light and upbeat. |
| 21–23 | A day passes on the list: Mark flips to yellow "1 day overdue", Priya flips to red "2 days overdue". | Caption: "Missed one? It turns yellow. Then red." (the words painted as yellow and red badges) | Two soft pops on the flips. |
| 23–27.4 | Finish-call steps. Step 1: "What topics did you cover?" fills in as if dictated. Chips pop in: Topics, Companies, Next steps, Callback date. Step 4: "Thursday at 2" → "Callback: Thursday, Nov 19 at 2:00 PM. Is that right?" | Caption: "After each call, just say what happened." | Soft taps on each screen change. |
| 27.4–29.5 | Jane Doe's contact card: new callback badge, open issue "Baby due in March". | Caption: "Here's Jane Doe." | Music continues. |
| 29.5–35.5 | Her call history scrolls; each call gets an orange outline as its caption plays: Nov 12, then Nov 5, then Oct 29. | Captions: "Today: term vs. whole life." / "Last week: baby due in March." / "Before that: disability." | Gentle whoosh on each scroll. |
| 35.5–36 | Phone shrinks away. | — | — |
| 36–43 | ONE WEEK LATER. Back at the desk. Phone slides in: Today's callbacks, Jane "Due today", "Open: Baby due in March" (her card highlighted). He points at it, picks up the handset, calls. | Caption: "One week later. Thursday, 2:00 PM." Then his bubble: "Jane! How's the baby prep going?" | Phone pickup click. Warm chime. |
| 43–46.5 | End card on the cream canvas. App name, tagline, three chips: Talk it in, See the timeline, See every missed callback. | "Call Back Log." / "Remember every call." | Music ends on a short button. |

## Jane Doe (made-up sample contact)
All made up. No real people or client data.
- **Thursday, Nov 12 (newest):** comparing term vs whole life. Already with Acme Mutual. Next step: send a 20-year term quote.
- **Thursday, Nov 5:** worried about the monthly cost. Baby due in March.
- **Thursday, Oct 29:** asked about disability coverage. Mentioned Harbor Life.
- **Open issues box:** "Baby due in March."
- **Next callback:** Thursday, Nov 19 at 2:00 PM.
- Other sample contacts on screen: Mark Rivera, Priya Shah, Sam Lee.

## Look
- Canvas: cream #FFF4EC. Ink: navy #1B2140. Accent: orange #F0522F. Mint #2EC4A0, sun yellow #FFC93C.
- Fonts: Inter Tight (bold) for everything, Instrument Serif italic for highlighted words.
- Stick figures are simple ink lines with open round heads. The app screens match the real app.

## Tone
Funny. Dry and relatable, like one rep laughing at the thing every new rep dreads. The payoff is the callback a week later, where he remembers the baby.

## Rules
- **Only show what the app really does:** dictated debrief (through the keyboard mic), the call timeline, the open issues box, today's callbacks, and the yellow/red overdue flags. No AI auto-sorting (that's version 2).
- **Fake only:** every name, number and fact is made up.
- **Not a pitch:** it shows a problem in my field and the app doing something about it.
- **Color is never the only signal:** every badge also has words ("1 day overdue").

## Open items
- The six visual fixes from next-steps.md were applied on Nov 17.
- The Sound column is the plan. The current HTML has no audio yet.
- Rebuild rule from class: no on-screen text longer than six words. The hook, the thought bubble and the coworker line are longer, so decide whether to trim them or keep them as the exception.
