# Drone Delivery Dataset

An open, community-built dataset of drone **delivery descent videos** with synchronized flight logs, for research on autonomous drone delivery and landing-zone perception.

Volunteer pilots around the world fly a short, standardized "delivery" (hover high → slow descent → hover low) over homes, parks, townhouses, and rooftops, then upload the video and flight log.

**→ Contribute: https://github.com/AarifahUllah/Drop-Zone-Drone-Delivery-Dataset/**

## What's collected

| Item | Example | Notes |
|---|---|---|
| Video | `DJI_0042.MP4` | Camera pointing straight down, continuous recording |
| Flight log | `DJI_0042.SRT` | Per-frame altitude, GPS, camera settings (DJI "video subtitles") |

Each flight follows the same profile:

1. Hover at **100–150 ft (30–45 m)** for 10–30 s directly above the landing spot
2. Descend slowly to **25–30 ft (about 8–9 m)**
3. Hover for 30–50 s (simulated package drop)

The full pilot guide is in [CONTRIBUTING.md](CONTRIBUTING.md) and on the [project site](https://github.com/AarifahUllah/Drop-Zone-Drone-Delivery-Dataset/).

## Dataset access

The dataset, including sample flights, is on Hugging Face: https://huggingface.co/datasets/YOUR-ORG/drone-delivery-dataset

## How submissions become data

```
Contributor ──upload──▶ Private Dropbox folder ──team review──▶ Hugging Face dataset (public)
```

Each submission is reviewed for safety, flight-profile compliance, and privacy (faces, plates, GPS) before it is published. Rejected submissions are deleted.

## Privacy

Flight logs contain GPS coordinates. Exact locations are removed or coarsened before public release. Contributor names and emails are never published. See [CONTRIBUTING.md](CONTRIBUTING.md#privacy-and-consent).

## License

- **Data** (videos and logs): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Code** in this repository (website, tools): MIT

## Citation

<!-- EDIT: add BibTeX once you have a paper or DOI -->

## Contact

Open an [issue](https://github.com/AarifahUllah/Drop-Zone-Drone-Delivery-Dataset/issues) or email aarifahullah@gwu.edu.
