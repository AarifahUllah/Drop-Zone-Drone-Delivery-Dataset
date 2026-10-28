# OpenDV: Crowdsourced drone videos for open drone vision and reasoning

Crowdsourced drone videos, flight logs and descriptions, released to the public for building perception and reasoning AI models for drone applications such as package delivery, search and rescue, and first response.

**Website:** https://aarifahullah.github.io/OpenDV/ </br>
**Contribute:** https://aarifahullah.github.io/OpenDV/collect.html

## What's collected

Each sample has three files with the same name:

| File | Example | Contents |
|---|---|---|
| Video | `DJI_0042.MP4` | Downward-facing camera, continuous recording |
| Flight log | `DJI_0042.SRT` | Per-frame altitude, GPS, camera settings |
| Description | `DJI_0042.txt` | One paragraph: time, weather, delivery spot, nearby objects, anything blocking the spot |

Flight profile: hover at 100–150 ft (30–45 m) → slow descent → hover at 25–30 ft (about 8–9 m). Full guide: [CONTRIBUTING.md](CONTRIBUTING.md).

## How submissions become data

```
Contributor ──upload──▶ Private Dropbox folder ──team review──▶ Hugging Face dataset (public)
```

Reviews cover safety, the flight profile and privacy (faces, plates, GPS). Rejected submissions are deleted.

## Dataset access

Hugging Face: https://huggingface.co/datasets/aarifahullah/OpenDV. Each published sample, including the team's own samples, includes its one-paragraph description.

## Privacy

Exact GPS locations are removed before release. Contributor names and emails are never published.

## License

- **Data:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Contributors keep copyright of their own videos and license them under CC BY 4.0. See [LICENSE-DATA](LICENSE-DATA).
- **Code** (website, tools): MIT. See [LICENSE](LICENSE).

## Team

The George Washington University: Aarifah Ullah (aarifahullah@gwu.edu), Mahyar Ghazanfari (mahyar.ghazanfari@gwu.edu), Peng Wei (pwei@gwu.edu)

## Editing the site

- Pages: `docs/index.html` (home), `docs/collect.html` (data collection)
- Links (upload, Hugging Face, GitHub): top of `docs/site.js`
- Images and clips: `docs/assets/` (see `docs/assets/README.md`)
- Preview locally: `powershell -ExecutionPolicy Bypass -File tools\serve.ps1 -Root docs`, then open http://localhost:8123
