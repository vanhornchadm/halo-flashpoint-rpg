# Halo Flashpoint RPG

An Obsidian vault and Quartz 4 site for the campaign rules developed in this project.

## Edit in Obsidian

Open **the `content` folder** as an existing vault. Begin at `index.md`. Edit the individual notes; Quartz uses the same files. No Obsidian community plugins are required.

- `rules/`: RP, Skills, Talents, treatment, and Special Orders rules.
- `species/`: 18 starting profiles.
- `keywords/`: canonical ability and weapon definitions.
- `talents/`: character-creation choices, embedding canonical definitions.
- `disadvantages/`: selectable limitations.
- `special-orders/`: 28 individual orders.
- `examples/`: noncombat examples.
- `private/`: local GM/design notes, ignored by both Git and Quartz.

Keep private material in `content/private/`. Other content notes are intended for publication. The published rulebook PDFs and conversation history are not included.

## Preview locally

Install Node 22.12 or later (Node 22 LTS recommended) and npm 10.9.2 or later.

```sh
npm ci
npm run validate
npm run dev
```

Open the local address printed by Quartz. A production build is `npm run build`; output is `public/`.

## GitHub Pages

Repository: https://github.com/vanhornchadm/halo-flashpoint-rpg

In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source. Pushing to `main` runs the build and deployment workflow. Pull requests run a build without publishing.

The configured URL is https://vanhornchadm.github.io/halo-flashpoint-rpg/ . Changing the repository or domain requires updating `baseUrl` in `quartz.config.ts`.

## Content decisions

The latest rules take precedence: Traits are merged into Talents; Flood have Collective Will and Auto WIL; noncombat actions use ordinary RP without tokens or rest mechanics. On My Mark is represented by +1 Model rather than an order. Original movement and R1 values remain where no final conversion was agreed.

The vault is a campaign supplement, not a full reproduction of the published combat rulebook. Some starred stats and character-creation allocation rules still require a table decision. Local review notes live in `content/private/Design Decisions.md`.

## Quartz provenance

Quartz 4.5.2, upstream commit `d25a6eabf96751ffca56f8a8139272def7a65041` from https://github.com/jackyzha0/quartz (v4 branch). Its engine is checked into this repository and its MIT license is retained in LICENSE.txt. Dependencies are locked by package-lock.json. This uses Quartz 4 configuration and is not a Quartz 5 migration.

Unofficial fan campaign material. Halo and Flashpoint belong to their respective owners. The Quartz engine license does not grant rights in third-party game material.
