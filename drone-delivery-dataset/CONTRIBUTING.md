# Contributing flight videos

Thank you for helping! This guide explains how to record and submit drone delivery videos. The same content, plus a file checker and the upload link, is on the [project site](https://YOUR-ORG.github.io/drone-delivery-dataset/#submit).

## Part 1: The collection flight

Imagine you are flying a delivery drone bringing a package to a suburban house, a park, a townhouse, or an urban apartment rooftop.

1. **Start position.** Hover at **100–150 ft (30–45 m)**, almost directly above your landing spot (driveway, front yard, backyard, etc.). Point the camera straight down and **start recording**. Hold the hover for **10–30 seconds**.
2. **Descent.** Manually lower the drone to the delivery position, **25–30 ft (about 8–9 m)**. Descend smoothly and slowly.
3. **Delivery position.** Hover for **30–50 seconds**, as if lowering a package on a rope and then reeling the rope back in.
4. **Done.** Stop recording. That's one complete video.

## Part 2: Scene diversity

Please record **2–3 videos**, varying the scene each time:

- **Lighting:** dawn, morning, noon, dusk, overcast
- **Nearby objects:** cars, bikes, trees, pets, people (with consent)
- **Landing spot:** driveway, front yard, backyard, rooftop, or wherever you'd want to receive a drone delivery

## Part 3: Submission

Upload **both** the video and its flight log for every flight. For DJI drones, that's the `.MP4` and the `.SRT` with the same file name.

> **DJI users:** turn on **Camera settings → Video subtitles** (called *Video Caption* on some models) *before* flying, or no `.SRT` file will be created.

1. Go to the [submission page](https://YOUR-ORG.github.io/drone-delivery-dataset/#submit) and use the checker to confirm your files are paired.
2. Confirm the three consent statements.
3. On the upload page, enter your **name and email**, then upload all files with their original names.

### What happens next

1. **Upload:** your files go to a private folder that only the research team can access.
2. **Review:** we check each flight for safety, whether it follows the flight profile, and privacy (faces, license plates, GPS).
3. **Publish:** approved flights are added to the [dataset on Hugging Face](https://huggingface.co/datasets/YOUR-ORG/drone-delivery-dataset). We'll email you whether or not your flight is accepted.

## Tips for a safe, successful flight

- **Follow local regulations.** In the US, check [FAA B4UFLY](https://www.faa.gov/uas/getting_started/b4ufly). Airports and government sites are restricted, and Washington, DC has a 15-nautical-mile no-drone zone. Outside the US, check your national aviation authority.
- **Check the weather.** Clear or cloudy days are best. Most drones aren't rated for rain or mist.
- **Fly with a full battery.** Hovering drains power quickly.
- **Slow and steady.** Use gentle throttle to descend. Adjust yaw as needed; apply any pitch or roll gradually.
- **Safety first.** Keep the drone in line of sight. Watch for birds and branches, and watch your own footing: stay clear of traffic and tripping hazards.
- **Start recording at the top.** The climb doesn't matter. Record continuously from the start hover to the end of the delivery hover.
- **Camera straight down.** Set the gimbal to −90° if possible.
- **Follow your drone's manual.** Commercial drones (e.g. DJI) are preferred for their stable hover, but any drone you fly confidently is welcome.

## Privacy and consent

- `.SRT` logs contain GPS coordinates. We remove or coarsen them before public release; originals stay with the research team.
- Only film people who have agreed. Avoid neighbors' private spaces.
- Your name and email are used only to contact and credit you, and are never published.
- Submitted data is released under **CC BY 4.0**.
- To withdraw a submission, email YOUR-CONTACT@example.edu.

## Other ways to help

Code contributions (website fixes, tools for parsing `.SRT` logs, non-DJI log support) are welcome via pull request. Please open an issue first for larger changes.
