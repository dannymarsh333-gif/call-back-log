# Ad script

## Length and format
46.5 seconds. Square 1080x1080, 60fps, H.264 MP4 with music.
- Video: `media/ad/call-back-log-ad.mp4`
- Source: `media/ad/call-back-log-ad-square.html` (every frame is computed from time by `seek(t)`, then rendered frame by frame)
- One continuous take: the camera flies into the phone on the desk and back out. No cuts, no crossfades.
- No voiceover. Every line is on-screen text, six words or fewer.
- The older 16:9 version is `AI class\Call Back Log Ad.html` (copy at `app/public/ad.html`).

## The scenes
| Seconds | On screen | Voice or text | Sound |
|---|---|---|---|
| 0–4 | THE HOOK. Stick-figure rep on the desk phone. The wall clock runs from 2:00 to 3:00 while he talks. Calendar: NOV 12. His phone sits dark on the desk. | Bubble: "Ok, sounds good, FANTASTIC, bye, Jane!" | Music starts; words land on the beat. |
| 4–6.6 | He hangs up and goes still. | Thought bubble: "Wait. What did we say?" | Music. |
| 6.6–11.2 | THE GAG. A coworker walks in and drops a stack of papers at the end of the desk. | Coworker: "My call notes. Organize these." | The drop lands on a beat. |
| 11.2–14.1 | OVERLOAD. His own half-memories of the Jane call come out of his head, one per beat: "Jane or June?", "Acme? Harbor?", "Tues or Thurs?", "3 PM?", "Call back??", "quote??". Both hands on his head, shaking. | (Only the notes.) | Music. |
| 14.1–16.6 | THE DO-OVER. The notes go back into his head, the clock winds back to 2:00, and the stack rewinds off the desk. His phone wakes up. | Caption: "Same call. With Call Back Log." | Music. |
| 16.6–18.4 | The camera flies into the phone on the desk. | — | Music. |
| 18.4–20.6 | Today's callbacks, Thursday, Nov 12: Priya Shah (red, "3 days overdue"), Mark Rivera (yellow, "1 day overdue"), Jane Doe ("Due today"). The cursor points at each badge. | Caption: "Missed ones turn yellow, then red." | Music. |
| 20.6–27.8 | The real click path: tap Jane, then Finish call. Steps 1–6 fill in as dictation: topics, companies, next steps, "Thursday at 2" → "Callback: Thursday, Nov 19 at 2:00 PM. Is that right?", objections (skipped), life issues "Baby due in March". Tap Save call. | Captions: "After the call, just talk." / "Even the life stuff." | Every tap is on a beat. |
| 27.8–30.7 | Jane's contact page: Open issues "Baby due in March". The cursor drags the call history: Nov 12, Nov 5, Oct 29. | Caption: "Every call, newest first." | Music. |
| 30.7–34.6 | The camera pulls back to the office. The calendar tears off one page per beat, 12 → 19. Clock at 2:00. | Caption: "One week later." | Page flips on the beat. |
| 34.6–38.6 | Back into the phone: Today's callbacks, Thursday, Nov 19. The camera closes in on Jane's card and holds. | (In the app: "Open: Baby due in March") | Music. |
| 38.6–42.2 | Pull back. He picks up the desk phone. | Bubble: "Jane! How's the baby prep?" | Music. |
| 42.2–46.5 | The bubble grows to fill the frame and becomes the end card. | "Call Back Log" / "Remember every call." | Music fades out. |

## Music
"Keep Smiling" by Ahjay Stelino, from Mixkit: https://mixkit.co/free-stock-music/discover/keep-smiling-15/ (free under the Mixkit Stock Music Free License, no attribution required; credited here anyway). Measured at about 167 BPM. Scene changes, words and taps land on its beat.

## Jane Doe (made-up sample contact)
All made up. No real people or client data.
- **Thursday, Nov 12 (the call in the ad):** comparing term vs whole life. Already with Acme Mutual. Next: send a 20-year term quote. Life issue: baby due in March.
- **Thursday, Nov 5:** worried about the monthly cost. Next: send a cost comparison.
- **Thursday, Oct 29:** asked about disability coverage. Mentioned Harbor Life.
- **Open issues box:** "Baby due in March."
- **Next callback:** Thursday, Nov 19 at 2:00 PM.
- Other sample contacts on screen: Priya Shah, Mark Rivera.

## Look
- Canvas: off-white #FAF7F2. Ink: navy #1B2140. Accent: orange #F0522F.
- Yellow #FFC93C and red #C62F3B appear only as overdue status.
- Font: Inter only.
- Stick figures are simple ink lines with open round heads. The app screens copy the real app (same text, steps and layout).
- Banned and checked: crossfades, glows, particle bursts, bouncy easing, stock UI kits, text over six words.

## Tone
Funny. Dry and relatable, like one rep laughing at the thing every new rep dreads. The payoff is the callback a week later, where he remembers the baby.

## Rules
- **Only show what the app really does:** dictated debrief (through the phone keyboard's mic), the call history, the open issues box, today's callbacks, and the yellow/red overdue flags. No AI auto-sorting (that's version 2). The coworker's stack is a gag: the app never touches it, and it rewinds away in the do-over.
- **Fake only:** every name, number and fact is made up.
- **Not a pitch:** it shows a problem in my field and the app doing something about it.
- **Color is never the only signal:** every badge also has words ("1 day overdue").

## Reviews
- Contrarian (Nov 17, old 16:9 version): "needs work". Its must-fix items were rebuilt into the square version.
- Professor-tutor (Nov 17, square version): 87/100. All must-fix items resolved. Its follow-up fixes were applied (dark phone before the do-over, cursor kept off key text, stack rewinds, Jane alone in the close-up, real app colors, music credit).
- Known and accepted: the app text is small on a phone screen; the captions carry the meaning.
