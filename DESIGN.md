---
name: zeroth.me
description: A career archived as a slide box. Glass slides on a light box, an H&E stain, and marker yellow for anything that can be pressed.
colors:
  marker: "#f2b705"
  marker-hover: "#ffc61a"
  marker-ink: "#1d1600"
  eosin: "#c13b6b"
  eosin-pale: "#f6d6e2"
  eosin-bright: "#f27aa3"
  haem: "#3a2160"
  haem-deep: "#201530"
  haem-mid: "#2c1e42"
  haem-channel: "#160e22"
  on-haem: "#efe9f7"
  on-haem-2: "#bcaed3"
  lightbox: "#f3f1ea"
  frost: "#fcfbf8"
  card-stock: "#fdfdfb"
  ink: "#1d2a2f"
  ink-2: "#4a585e"
  pencil-graphite: "#5d6a70"
  rule: "#d8d3c6"
  glass-edge: "#8fae9f"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 3.15rem)"
    fontWeight: 760
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 4rem)"
    fontWeight: 740
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  thesis:
    fontFamily: "Source Serif 4 Variable, Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.7vw, 3.55rem)"
    fontWeight: 380
    lineHeight: 1.06
    letterSpacing: "-0.022em"
  specimen:
    fontFamily: "Source Serif 4 Variable, Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.35rem, 2.1vw, 2.05rem)"
    fontWeight: 450
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)"
    fontWeight: 740
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Source Serif 4 Variable, Source Serif 4, Georgia, serif"
    fontSize: "clamp(17px, 1.05vw + 12px, 19px)"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 650
    letterSpacing: "0.005em"
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.06em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 72"
  pencil:
    fontFamily: "Reenie Beanie, cursive"
    fontSize: "1.55rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  hairline: "1px"
  sm: "2px"
  slide: "3px"
  channel: "4px"
  tray: "6px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  max: "1240px"
  card-line: "1.75rem"
  action-gap: "14px 22px"
  section-tight: "clamp(28px, 4.4vw, 60px)"
  section: "clamp(64px, 9vw, 128px)"
  section-wide: "clamp(72px, 10vw, 140px)"
components:
  button-primary:
    backgroundColor: "{colors.marker}"
    textColor: "{colors.marker-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "0.78em 1.15em 0.8em"
  button-primary-hover:
    backgroundColor: "{colors.marker-hover}"
    textColor: "{colors.marker-ink}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
  stain-toggle:
    backgroundColor: "{colors.frost}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "6px 10px"
  stain-toggle-active:
    backgroundColor: "{colors.marker}"
    textColor: "{colors.marker-ink}"
  action-cue:
    backgroundColor: "{colors.marker}"
    textColor: "{colors.marker-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.hairline}"
    padding: "3px 7px 2px"
  slide-label:
    backgroundColor: "{colors.frost}"
    textColor: "{colors.ink}"
  index-card:
    backgroundColor: "{colors.card-stock}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "calc(1.75rem * 0.75) clamp(20px, 3vw, 36px) 1.75rem"
  record:
    backgroundColor: "{colors.frost}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "22px clamp(18px, 2.4vw, 32px) 24px"
  tray-channel:
    backgroundColor: "{colors.haem-channel}"
    rounded: "{rounded.channel}"
    padding: "5px"
---

# Design System: zeroth.me

## Overview

**Creative North Star: "The Slide Box"**

The whole system is a pathology lab's slide box seen on a light box. Every chapter of the work is a glass slide: a frosted label end on the left carrying an accession code, dates and a pencilled note, and a clear glass field on the right holding the specimen, which is the result itself. The ground is the warm white of a light box; the dark section is the inside of the box, where slides sit in recessed channels and can be pulled out to read their full record.

Colour comes from histology, not from a brand palette. Eosin pink and haematoxylin purple are the stain; they mark the specimen, the accession codes and the box interior. The portrait is not tinted, it is stained: a real SVG gradient-map filter (`#he-stain`) maps its luminance onto the H&E ramp, and a toggle shows it unstained. Marker yellow sits outside the stain entirely, because it means one thing: you can press this.

Type behaves like lab stationery. Archivo's width axis does three jobs: condensed for label-printer codes, normal for actions, wide and heavy for names and headings. Source Serif 4 carries reading text and the specimen results. Reenie Beanie is the pencil, kept to short annotations and index-card titles.

**Key Characteristics:**
- Two grounds only: the light box (#f3f1ea) and the box interior (haematoxylin dark).
- Glass slides at a 3:1 ratio with a frosted label end, a glass-edge stroke and a tight 3px corner.
- The H&E stain is a filter on real imagery, never a colour overlay.
- Accession codes on every slide and on the box label.
- Marker yellow appears only on interactive things.
- Index cards on ruled stock with a red header line, slightly rotated, on the lid.

## Colors

A stained-specimen palette on a warm light box: two histology dyes, graphite ink, and one action yellow standing outside the stain.

### Primary
- **Marker Yellow** (marker): the only colour of interaction. Primary buttons, the pressed stain toggle, the "Read record" action cue, the underline of every text link, the skip link and the outer halo of the focus ring. **Marker Hover** (marker-hover) is its brighter hover state; **Marker Ink** (marker-ink) is the near-black text set on it.

### Secondary
- **Eosin** (eosin): accession codes and small specimen labels on light surfaces (slide labels, index-card lead-ins, the footer box label, the record's organisation note), and the text-selection colour on the light ground.
- **Eosin Pale** (eosin-pale): the empty specimen field behind a pending or loading portrait.
- **Eosin Bright** (eosin-bright): specimen results inside the dark tray, and the lit cells of the empty slot's seven-segment number. The legible eosin for dark ground.

### Tertiary
- **Haematoxylin** (haem): the stain's purple on light ground: index-card titles, record bullets, the scrollbar thumb, pending-specimen pencil text.
- **Box Interior** (haem-deep): the tray section's ground.
- **Tray Floor** (haem-mid): the inset panel the slide channels are cut into.
- **Channel Shadow** (haem-channel): the recessed channel each closed slide sits in.
- **On-Haem** (on-haem) and **On-Haem Muted** (on-haem-2): primary and secondary text inside the tray; the muted tone also draws position numbers, roles, notes and the empty slot's dashed outline.

### Neutral
- **Light Box** (lightbox): the page ground and theme colour.
- **Frost** (frost): frosted label ends, the record sheet, the stain toggle's resting face; carries a fine fractal-noise grain.
- **Card Stock** (card-stock): index-card paper, a touch whiter than frost.
- **Graphite Ink** (ink): primary text, focus-ring stroke, stain-toggle borders.
- **Graphite Muted** (ink-2): secondary text: roles, intro paragraphs, years, footer copy.
- **Pencil Graphite** (pencil-graphite): handwritten annotations on light surfaces.
- **Rule** (rule): the footer box-label border.
- **Glass Edge** (glass-edge): the green-grey edge of every slide on light ground, the label/glass divider and the cover-slip outline.

### Named Rules
**The Marker Rule.** Marker yellow is reserved for things you can press: buttons, link underlines, pressed toggles, action cues, focus halos. If it cannot be clicked, focused or selected, it is not yellow.

**The Stain Rule.** Eosin and haematoxylin belong to specimens, accession codes, the index cards' printed ink (title, header line, rules) and the box interior. Imagery is stained through the `#he-stain` gradient-map filter (greyscale, gamma 0.55, then a table ramp from haematoxylin through eosin to near-white), never by tinting, blending or overlaying colour, and the unstained original stays one toggle away.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui)
**Body Font:** Source Serif 4 Variable (with Source Serif 4, Georgia)
**Label/Mono Font:** Archivo at 72% width for codes; Reenie Beanie for pencil notes

**Character:** A label printer and a lab notebook. Archivo's width axis separates labelling from naming; Source Serif 4, with optical sizing on, reads like the written record; Reenie Beanie is the scientist's pencil on frosted glass.

### Hierarchy
- **Display** (760, wdth 112, clamp(1.7rem, 3.4vw, 3.15rem), 0.95): the name on slide 01's label. Balanced wrapping.
- **Headline** (740, wdth 112, clamp(2rem, 4.4vw, 4rem), 0.98): the tray's heading. The same wide, heavy voice is used at 1.35rem for the footer name.
- **Thesis** (Source Serif 4, 380, clamp(1.9rem, 3.7vw, 3.55rem), 1.06): the one large serif statement under the hero slide.
- **Specimen** (Source Serif 4, 450, clamp(1.35rem, 2.1vw, 2.05rem), 1.02): the result each slide is remembered for, in eosin bright.
- **Title** (740, wdth 112, clamp(1.3rem, 1.9vw, 1.8rem), 1.05): the empty slot's heading.
- **Body** (Source Serif 4, 400, clamp(17px, 1.05vw + 12px, 19px), 1.55): reading text; intros capped at 60ch, tray notes at 46ch, records at 78ch.
- **Action** (Archivo 650, 1rem): button labels; text links use Archivo 560 at about 0.95rem.
- **Label** (Archivo 600, wdth 72, 0.8rem, 0.06em, uppercase, tabular figures): accession codes, the stain toggle, the scale bar, position numbers and the header's box mark. Shrinks to 0.74rem on tray slides.
- **Pencil** (Reenie Beanie 400, 1.55rem, line-height 1): short handwritten notes, rotated a few degrees; index-card titles at 2.3rem in haematoxylin.

### Named Rules
**The Width Axis Rule.** Archivo's width says what the text is: 72% for codes and numbers, 100% for actions, 112% for names and headings. Do not fake condensation or extension with letter-spacing or a second family.

**The Pencil Rule.** Reenie Beanie is for a few words at a time: annotations, places, index-card titles. Never body copy, data, or anything a visitor must read to act. Purely decorative notes are hidden from assistive technology.

## Layout

A single centred column, `min(100% - 2 × gutter, 1240px)`, with a fluid gutter (clamp(16px, 4vw, 56px)). The hero is one full-width slide at 3:1 with the label end taking 27%; below it the thesis sits in a 1.35fr / 1fr split, bottom-aligned. The lid is a 1.5fr / 1fr pair of index cards, the second dropped lower. The tray is a full-bleed dark band holding a two-column grid of slots, each a narrow position-number column plus the slide; an open slide spans both columns. Vertical rhythm is generous and fluid: section padding steps through clamp(28px, 4.4vw, 60px), clamp(64px, 9vw, 128px) and clamp(72px, 10vw, 140px). Index cards keep a strict 1.75rem baseline: their ruling, title height and list line-height all derive from it.

Responsive behaviour: at 1000px the tray drops to one column; at 860px the thesis, lid and tray head stack and the footer collapses to one column; at 640px the hero slide stands upright (label on top, a 5:4 cover-slip below), tray slides keep a 27% label end with a 150px minimum height, the primary action moves above the intro paragraph, and the action cue becomes an inline chip rather than a corner tag.

## Elevation & Depth

Depth is physical and follows the object. On the light box, glass lifts: slides combine an inset top highlight and inset green bottom edge with a tight contact shadow and a long soft drop. Paper lifts less (index cards, the footer label). Inside the tray, depth inverts: the floor and each channel are recessed with inset shadows, closed slides sit in them, and a pulled slide rises on hover. All shadows are soft and tinted by graphite or black; none are hard offsets.

### Shadow Vocabulary
- **Glass slide** (`inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(120,160,140,0.35), 0 1px 2px rgba(29,42,47,0.12), 0 18px 36px -24px rgba(29,42,47,0.45)`): slides on the light box.
- **Paper card** (`0 1px 1px rgba(29,42,47,0.1), 0 14px 30px -18px rgba(29,42,47,0.4)`): index cards.
- **Box label** (`0 10px 22px -18px rgba(29,42,47,0.5)`): the footer label.
- **Marker lift** (`0 1px 0 rgba(29,22,0,0.25), 0 6px 14px -8px rgba(29,22,0,0.45)`): primary buttons; deepens on hover.
- **Recessed floor** (`inset 0 2px 10px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)`): the tray floor.
- **Channel** (`inset 0 3px 8px rgba(0,0,0,0.75), inset 0 -1px 0 rgba(255,255,255,0.07)`): each closed slide's slot.
- **Tray glass** (`inset 0 1px 0 rgba(255,255,255,0.22), 0 1px 0 rgba(0,0,0,0.3), 0 12px 24px -16px rgba(0,0,0,0.7)`): slides inside the box.
- **Record sheet** (`0 16px 30px -18px rgba(0,0,0,0.7)`): the pulled record.

### Named Rules
**The Inverted Box Rule.** On the light box things lift; inside the box things are recessed. A surface's shadow follows where the object physically sits.

## Shapes

Lab glass and paper have nearly square corners, and the system stays there: 1px on the cover-slip and action cue, 2px on buttons, records and the footer label, 3px on slides and the empty slot, 4px on channels, 6px on the tray floor, the largest radius in use. Slides are defined by a 1px glass-edge stroke and a 1px divider between label and glass; the cover-slip adds an offset outline (1px, 3px offset). The empty slot is the one dashed form (1.5px dashed muted haematoxylin). Index cards and pencil notes carry small rotations (-0.6deg to 0.8deg for cards, -3deg to -4deg for notes). Record bullets are small haematoxylin dots.

## Components

### Buttons
Tactile marker, pressed with confidence.
- **Shape:** near-square (2px).
- **Primary:** marker yellow with marker ink, Archivo 650 at 1rem, padding 0.78em 1.15em 0.8em, a trailing 1.1em stroked SVG arrow (1.8 stroke, round caps).
- **Hover / Focus:** brightens to marker hover, lifts 1px, shadow deepens, arrow slides 3px right (220ms, ease-out cubic-bezier(0.16, 1, 0.3, 1)). Focus is the global ring: 2px graphite outline at 3px offset plus a 6px marker halo.
- **Text link:** graphite Archivo 560 with a 3px marker underline at 5px offset; on hover the underline swells to 0.5em and rises behind the text like a highlighter stroke.

### Stain Toggle
A segmented pair (Stained / Unstained) in condensed uppercase label type, 1px graphite borders, frost face; the pressed segment turns marker yellow. It appears only when JavaScript and a portrait are present, and swaps the cover-slip's `data-stain` between the H&E filter and none.

### Glass Slide (signature)
The repeating unit. A grid with a 27% frosted label end and a clear glass field, 1px glass-edge stroke, 3px radius. The label end carries the accession code (eosin, condensed caps), then a bold detail (name or years) and a pencil note pinned to the bottom. On the light box it is a 3:1 glass with the stained specimen under a cover-slip and a white 10 µm scale bar. In the tray it becomes translucent glass on dark: organisation and role in Archivo, the specimen result in eosin-bright serif, a muted note beneath.

### Tray Slot and Pull
Each slot pairs a condensed position number with a slide seated in a recessed channel. The slide is a `details` summary: hover lifts it 3px with a deeper shadow (380ms ease-out); a marker action cue ("Read record" / "Put back") appears in the corner on hover-capable devices and is shown as a quiet outlined chip on touch. Opening the slot spans it across the grid, slides the glass right, and unrolls a frost record sheet (clip-path reveal, 520ms) with an eosin organisation note and dotted list.

### Cards / Containers
- **Corner Style:** square.
- **Background:** card stock with a repeating faint haematoxylin rule every 1.75rem and a 2px eosin header line under the title.
- **Shadow Strategy:** Paper card (see Elevation).
- **Border:** none.
- **Internal Padding:** 0.75 line top, clamp(20px, 3vw, 36px) sides, one line bottom.
- Titles are pencil at 2.3rem in haematoxylin; list lead-ins are Archivo 650; inline lead-in labels ("Stack", "Languages") use the eosin label style.

### Empty Slot
The next slot in the box, designed as carefully as the filled ones: a dashed outline, a seven-segment slot number with lit cells in eosin bright and unlit cells at 10% muted haematoxylin, a wide Archivo title, muted body text, and the primary button. A pencil note points into it on wider screens.

### Navigation
A minimal header bar: the box mark (condensed uppercase label type, 0.08em tracking) left and the email as a marker-underlined link right, baseline aligned. The footer is the box's own label: a frosted, bordered card with the name in wide Archivo, the location and an accession-style count, beside a row of marker-underlined text links.

## Do's and Don'ts

### Do:
- **Do** put an accession code (AP-NN or AP-YYYY-XXX, eosin, condensed caps) on the frosted label end of every slide and on the box label.
- **Do** keep marker yellow (#f2b705) on interactive elements only, with marker ink text on it.
- **Do** stain imagery with the `#he-stain` SVG filter and keep an unstained view reachable.
- **Do** use Archivo's width axis to separate codes (72), actions (100) and names (112).
- **Do** lift objects on the light box and recess them inside the tray.
- **Do** keep radii between 1px and 6px; slides are 3px.
- **Do** hold index-card content to the 1.75rem rule.
- **Do** honour reduced motion: the focus-in blur, record unroll and hover lifts collapse to near-zero duration.

### Don't:
- **Don't** use marker yellow for decoration, emphasis, backgrounds or headings.
- **Don't** tint photographs with colour overlays, blend modes or CSS hue filters; the stain is the gradient map.
- **Don't** use eosin or haematoxylin as general UI accents away from specimens, codes, index-card ink or the box interior.
- **Don't** place accession codes or small caps labels above headings as section kickers; codes label slides, they do not introduce sections.
- **Don't** set body copy, data or calls to action in Reenie Beanie.
- **Don't** add a fourth typeface or substitute a system face for Archivo.
- **Don't** use hard offset shadows; depth is soft, tinted and physical.
- **Don't** introduce pill shapes or radii above 6px.
