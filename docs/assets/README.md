# Website media

Put these files in this folder. Until a file exists, the site shows a gray placeholder with the file name.

Timestamps come from the altitude (`rel_alt`) in each flight's `.SRT` log.

| File | Source video | Time | What it shows | Size target |
|---|---|---|---|---|
| `hero.mp4` | `DJI_20260929132324_0030_D.MP4` | whole flight (0:00–3:17), sped up 8× | 30 m hover → descent → 5 m hover | 1280×720, no audio, under 5 MB |
| `hero-poster.jpg` | same | 0:05 | first frame shown while the clip loads | 1280×720 JPG |
| `step-1.jpg` | `..._0030_D.MP4` | 0:10 | start hover, ~30 m | 800×450 JPG |
| `step-2.jpg` | `..._0030_D.MP4` | 1:30 | mid-descent, ~15 m | 800×450 JPG |
| `step-3.jpg` | `..._0030_D.MP4` | 2:55 | delivery hover, ~5 m | 800×450 JPG |
| `scene-1.jpg` | `DJI_20260926120356_0023_D.MP4` (noon) | 1:40 | ~10 m | 800×600 JPG |
| `scene-2.jpg` | `DJI_20260929131724_0029_D.MP4` | 1:00 | ~10 m | 800×600 JPG |
| `scene-3.jpg` | `DJI_20260823174626_0020_D.MP4` (evening) | 4:10 | ~10 m | 800×600 JPG |

Keep every file small. GitHub Pages serves them to every visitor, and the full-quality videos belong on Hugging Face.

## If you use FFmpeg

Run these from the `delivery_dataset` folder:

```
ffmpeg -i DJI_20260929132324_0030_D.MP4 -an -vf "setpts=PTS/8,scale=1280:-2,fps=30" -c:v libx264 -crf 30 -preset slow -movflags +faststart hero.mp4
ffmpeg -ss 5   -i DJI_20260929132324_0030_D.MP4 -frames:v 1 -vf scale=1280:-2 -q:v 4 hero-poster.jpg
ffmpeg -ss 10  -i DJI_20260929132324_0030_D.MP4 -frames:v 1 -vf scale=800:-2  -q:v 4 step-1.jpg
ffmpeg -ss 90  -i DJI_20260929132324_0030_D.MP4 -frames:v 1 -vf scale=800:-2  -q:v 4 step-2.jpg
ffmpeg -ss 175 -i DJI_20260929132324_0030_D.MP4 -frames:v 1 -vf scale=800:-2  -q:v 4 step-3.jpg
ffmpeg -ss 100 -i DJI_20260926120356_0023_D.MP4 -frames:v 1 -vf "crop=ih*4/3:ih,scale=800:-2" -q:v 4 scene-1.jpg
ffmpeg -ss 60  -i DJI_20260929131724_0029_D.MP4 -frames:v 1 -vf "crop=ih*4/3:ih,scale=800:-2" -q:v 4 scene-2.jpg
ffmpeg -ss 250 -i DJI_20260823174626_0020_D.MP4 -frames:v 1 -vf "crop=ih*4/3:ih,scale=800:-2" -q:v 4 scene-3.jpg
```

## Without FFmpeg

- **Screenshots:** open the video in the Windows Media Player or Photos app, pause at the time above, and use Snipping Tool (Win+Shift+S). Save as JPG and resize to the size target.
- **Clip:** in Clipchamp (built into Windows 11), import the video, set speed to 8×, remove audio, and export at 720p.

Before publishing, check frames for faces, license plates, and house numbers.
