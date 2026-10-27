# Website media

Put these files in this folder. Until a file exists, the site hides that image or shows "Video coming soon". The three scene images are shown only when all three exist.

Timestamps come from the altitude (`rel_alt`) in each flight's `.SRT` log.

## Homepage sample clips (7–10 s each)

| File | Source video | Clip | Size target |
|---|---|---|---|
| `sample-1.mp4` | `DJI_20260926120356_0023_D.MP4` (noon) | 1:35–1:45, ~10 m | 1280×720, no audio, under 3 MB |
| `sample-2.mp4` | `DJI_20260929132324_0030_D.MP4` | 1:25–1:35, mid-descent ~15 m | same |
| `sample-3.mp4` | `DJI_20260823174626_0020_D.MP4` (evening) | 4:05–4:15, ~10 m | same |

Update the one-line caption under each clip in `index.html` to match.

## Data collection page images

| File | Source video | Time | What it shows | Size target |
|---|---|---|---|---|
| `step-1.jpg` | `..._0030_D.MP4` | 0:10 | start hover, ~30 m | 800×450 JPG, under 200 KB |
| `step-2.jpg` | `..._0030_D.MP4` | 1:30 | mid-descent, ~15 m | same |
| `step-3.jpg` | `..._0030_D.MP4` | 2:55 | delivery hover, ~5 m | same |
| `scene-1.jpg` | `..._0023_D.MP4` (noon) | 1:40 | lighting example | 800×600 JPG, under 200 KB |
| `scene-2.jpg` | `..._0029_D.MP4` | 1:00 | delivery spot example | same |
| `scene-3.jpg` | `..._0020_D.MP4` (evening) | 4:10 | nearby objects example | same |

Keep every file small: GitHub rejects files over 100 MB, and full-quality videos belong on Hugging Face.

## If you use FFmpeg

Run these from the `delivery_dataset` folder:

```
ffmpeg -ss 95  -t 10 -i DJI_20260926120356_0023_D.MP4 -an -vf scale=1280:-2 -c:v libx264 -crf 28 -movflags +faststart sample-1.mp4
ffmpeg -ss 85  -t 10 -i DJI_20260929132324_0030_D.MP4 -an -vf scale=1280:-2 -c:v libx264 -crf 28 -movflags +faststart sample-2.mp4
ffmpeg -ss 245 -t 10 -i DJI_20260823174626_0020_D.MP4 -an -vf scale=1280:-2 -c:v libx264 -crf 28 -movflags +faststart sample-3.mp4
ffmpeg -ss 100 -i DJI_20260926120356_0023_D.MP4 -frames:v 1 -vf "crop=ih*4/3:ih,scale=800:-2" -q:v 5 scene-1.jpg
ffmpeg -ss 60  -i DJI_20260929131724_0029_D.MP4 -frames:v 1 -vf "crop=ih*4/3:ih,scale=800:-2" -q:v 5 scene-2.jpg
ffmpeg -ss 250 -i DJI_20260823174626_0020_D.MP4 -frames:v 1 -vf "crop=ih*4/3:ih,scale=800:-2" -q:v 5 scene-3.jpg
```

## Without FFmpeg

- **Clips:** in Clipchamp (built into Windows 11), import the video, trim to the 10 seconds above, remove audio, and export at 720p.
- **Screenshots:** pause the video at the time above and use Snipping Tool (Win+Shift+S). Save as JPG and resize to 800 px wide.

Before publishing, check frames for faces, license plates, and house numbers.
