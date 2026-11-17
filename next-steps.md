# Next steps (saved Nov 12, pick up next week)

## Ad fixes (from the second review: tutor 89/100, contrarian "close to solid")
- [x] Red "2 days overdue" badge spills past the card edge at ~22s
- [x] Darken the red badge (white on #E63946 is hard to read) to ~#C62F3B
- [x] Wall clock is half cut off at the right edge during the overload (~14-19s)
- [x] Add "Jane!" to the opening line: "...have a great day, Jane!"
- [x] Make "Open:" text navy so red only means overdue
- [x] Optional: Jane still says "Due today" while the other cards flip "a day later"

## Decide
- [x] Coworker's stack: KEEP the gag (decided Nov 17)
- [ ] Interface work: app screens, or a landing page?
- [ ] Add the ad (AI class\Call Back Log Ad.html) to the GitHub repo?

## Housekeeping
- [x] (Nov 17) After any ad fix, copy AI class\Call Back Log Ad.html to app/public/ad.html so the home page shows the new version
- [x] Update ad-script.md to the new 46.5-second version (Nov 17)
- [x] Push the Sunrise colors for the app to GitHub
- [x] App is live: https://dannymarsh333-gif.github.io/call-back-log/ (updates automatically on every push)

## Ads (Nov 17, from the class motion-graphics guide)
- [x] Square rebuild: media/ad/call-back-log-ad.mp4 (1080x1080, 60fps, music "Keep Smiling" from Mixkit). Source: media/ad/call-back-log-ad-square.html
- [x] Contrarian + professor-tutor reviews applied (tutor 87/100)
- [x] Watched (no sound) on Nov 17: looked great
- [x] On the live site Nov 17 (video player on the home page, tested desktop + phone, live)
- [ ] NEXT CLASS: 12-second loop -> media/ad-short/ (prompt 3 in the class guide; same look, loops)
- [ ] NEXT CLASS: listen to the ad with sound on
- [ ] Optional: showreel prompt, logo loop

## App fixes (Nov 17 reviews: tutor 171/200 B, contrarian "needs work")
Do these four BEFORE user testing:
- [ ] Edit and delete for contacts and calls (edit/resolve for issues)
- [ ] Stop vanishing callbacks: debrief must have a date or an explicit "No callback"; keep the old date if skipped; show a "No callback set" section on Today
- [ ] Do-not-call loophole: check for an existing phone number on Add contact; block re-adding a flagged number
- [ ] On phones, show Today's callbacks first; move the sticky notes below (or collapse them)

Next:
- [ ] One-tap outcomes on the contact card: "No answer, retry tomorrow" and "Voicemail, retry in 2 days"
- [ ] Save the debrief draft as you type (survives reloads / app switches)
- [ ] Export / Import a backup (JSON); make Reset require typing RESET
- [ ] "Test with made-up people only" banner on first launch and on Add contact
- [ ] Spoken dates: "8 tonight" = PM, spelled-out times ("at two"), "a week from Thursday", "next Friday" = following week, time-only = today; add a small test file
- [ ] Sticky notes: only add the sample to-dos to sample data; "This week" resets weekly; confirm before the × deletes; tighten the /job/ rule ("new job" is not a job search); match seasonal tips to the rep's insurance line
- [ ] Let a call's date be edited (log an earlier call later)
- [ ] Accessibility: move focus to the page heading on each screen (drop aria-live on main), hide the tree from screen readers, 44px tap targets, focus the debrief box automatically
- [ ] Search on the All contacts list; app title goes to Today instead of the home page
- [ ] Update solution.md: it now says "no publishing online" and a private repo, but the app is public with fake data, plus the new notes/tree features
