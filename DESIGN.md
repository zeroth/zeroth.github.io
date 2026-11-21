---
name: zeroth.me
description: A career set as a magazine feature. Paper white, ink black, photogravure greys, and one lipstick red for anything that can be pressed.
colors:
  red: "#c8102e"
  red-hover: "#a10b24"
  on-red: "#ffffff"
  paper: "#fbfaf7"
  paper-2: "#f1efe9"
  ink: "#141414"
  ink-2: "#4f4c47"
  ink-3: "#6e6a63"
  hairline: "#cfcac0"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 7.6vw, 7.5rem)"
    fontWeight: 720
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.75rem)"
    fontWeight: 680
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline-aside:
    fontFamily: "Literata Variable, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.02em"
  result:
    fontFamily: "Bricolage Grotesque Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 4rem)"
    fontWeight: 560
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontFeature: "'lnum' 1"
  deck:
    fontFamily: "Literata Variable, Georgia, serif"
    fontSize: "clamp(1.35rem, 2vw, 1.85rem)"
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(1.55rem, 2.3vw, 2.15rem)"
    fontWeight: 680
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Literata Variable, Georgia, serif"
    fontSize: "clamp(17px, 0.9vw + 12px, 19px)"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "Bricolage Grotesque Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    letterSpacing: "0.02em"
  caption:
    fontFamily: "Bricolage Grotesque Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Bricolage Grotesque Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    letterSpacing: "0.14em"
    fontFeature: "'tnum' 1"
rounded:
  none: "0"
spacing:
  gutter: "clamp(16px, 4vw, 64px)"
  seam-gap: "clamp(28px, 4.5vw, 72px)"
  max: "1320px"
  spread-block: "clamp(64px, 9vw, 136px)"
  feature-block: "clamp(40px, 6vw, 88px)"
  close-block: "clamp(80px, 11vw, 168px)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.85em 1.25em 0.9em"
  button-primary-hover:
    backgroundColor: "{colors.red-hover}"
    textColor: "{colors.on-red}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
  text-link-hover:
    textColor: "{colors.red}"
  record-toggle:
    textColor: "{colors.red}"
    typography: "{typography.action}"
    padding: "6px 0"
  plate-caption:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "10px 14px"
---

# Design System: zeroth.me

## Overview

**Creative North Star: "The Feature Spread"**

The site is set as a magazine feature in the Brodovitch Harper's Bazaar tradition. Every section is a spread: two facing pages divided by a vertical hairline gutter seam. One page poses (a photograph, a big title, or one large real result), the facing page answers (a name, a byline, a list, an invitation). The material is printed paper: warm paper white, ink black, the portrait reprinted as a grey photogravure with grain, and hairline rules. There are no cards, no shadows and no rounded corners.

Type carries almost everything, in two voices. Bricolage Grotesque, a variable grotesque set heavy (560 to 750) and tightly tracked (down to -0.04em), announces: the name, spread titles, results, organisation names, and the small apparatus of a magazine (folios, captions, dates, buttons, links). Literata, a variable text serif, is what you read: the intro, the deck, the standfirst, the role line, body copy, and every italic aside, including the italic word inside a spread title. Both faces size their optical axis automatically. The only colour is one lipstick red, which marks things you can press and nothing else.

The rhythm is generous and editorial: spreads breathe with large block padding, and the role spreads are all the same size, alternating result-left and result-right down the page. On narrow screens each spread stacks pose over answer and the seam turns into a horizontal rule.

**Key Characteristics:**
- Two-page spreads split by a 1px hairline seam, alternating left and right through the roles.
- Bricolage Grotesque, heavy and tight, for everything that announces; Literata for everything read and every italic.
- Paper, ink and greys, plus one red reserved for pressable things.
- Photography reprinted as greyscale photogravure with a multiplied grain layer.
- Square corners, flat surfaces, depth from rules and type scale only.

## Colors

A printed-paper palette: warm off-white stock, near-black ink in three strengths, a sand hairline, and a single lipstick red.

### Primary
- **Lipstick Red** (`red`): The fill of the email button, the underline colour of every text link, the hover colour of links, the "Read the full record" toggle, the focus outline, the caret and the form accent colour. It is the only chromatic colour in the system.
- **Pressed Red** (`red-hover`): The button fill on hover. Never used at rest.
- **On Red** (`on-red`): Button label and arrow on the red fill.

### Neutral
- **Paper White** (`paper`): The page stock behind everything; also the background of the caption tab on the photo plate and of text selection.
- **Plate Grey** (`paper-2`): The ground of the photo plate before the image loads, and the scrollbar track.
- **Ink** (`ink`): Headlines, names, results, byline organisations, the heavy rules under the masthead and opening spread and above the colophon, the dash markers in the record list, the skip link and the selection fill.
- **Second Ink** (`ink-2`): Reading text that sits beside a headline (intro, focus paragraphs, notes, standfirst), dates, folios and the colophon. 8.2:1 on paper.
- **Third Ink** (`ink-3`): The quietest text, currently only the "portrait pending" placeholder. 5.2:1 on paper; do not go lighter.
- **Hairline** (`hairline`): The gutter seam, the rules between spreads and between features, the caption-line rule and the contents-list rows.

### Named Rules
**The Pressable Red Rule.** Red marks only what can be pressed or is focused: buttons, link underlines, the record toggle, the focus ring, the caret. If it cannot be clicked, focused or typed into, it is ink, never red.

**The Two Rules Rule.** Rules come in two weights of colour, not thickness: ink rules (1px `ink`) frame the publication (masthead, end of the opening spread, top of the contents list, colophon); hairline rules (1px `hairline`) divide within it (seam, spreads, features, captions, list rows).

## Typography

**Display Font:** Bricolage Grotesque Variable (with Avenir Next, system-ui, sans-serif)
**Body Font:** Literata Variable (with Georgia, serif)
**Label Font:** Bricolage Grotesque Variable (the sans token aliases the display face)

**Character:** A friendly, slightly quirky grotesque set heavy and tight for headings, against a warm, bookish text serif whose italic does all the asides. The contrast is weight and voice, not two different sans faces.

### Hierarchy
- **Display** (720, clamp(3.4rem, 7.6vw, 7.5rem), 0.92, -0.04em): The name on the opening spread only. First name and surname both upright, the surname stepped in by 0.9em (0.6em on mobile). The closing title "This slot is open." uses the same voice at clamp(3rem, 7vw, 6rem).
- **Headline** (680, clamp(2.5rem, 5.4vw, 4.75rem), 0.98, -0.035em): Spread titles. On posing pages it scales to clamp(2.8rem, 6.4vw, 6rem). The operative word is an italic aside in Literata 400 at -0.02em, so the title mixes heavy grotesque with light serif italic.
- **Result** (560, clamp(2.1rem, 4.4vw, 4rem), 0.98, -0.035em, lining figures): The one real result printed on each role spread, upright. Arrows and signs sit in the same face and weight.
- **Deck** (Literata italic 400, clamp(1.35rem, 2vw, 1.85rem), 1.22, max 30ch): The headline under the name. The standfirst above it is Literata italic at clamp(1.1rem, 1.4vw, 1.3rem) in second ink.
- **Title** (680, clamp(1.55rem, 2.3vw, 2.15rem), 1.08, -0.015em): Organisation names in role bylines. Focus-list titles are Bricolage 600 at clamp(1.2rem, 1.5vw, 1.4rem). The role line under each organisation is Literata italic at 1.1rem.
- **Body** (Literata 400, clamp(17px, 0.9vw + 12px, 19px), 1.55): All reading text, 46 to 62ch measures.
- **Action** (Bricolage 500, 1rem, 0.02em): Buttons and the record toggle.
- **Caption** (Bricolage 400 to 450, 0.9 to 0.95rem): Text links, caption lines (with a 600 label in ink), contents years, the colophon.
- **Label** (Bricolage 400, 0.7 to 0.8rem, 0.14 to 0.22em tracking, uppercase, tabular figures): The masthead folio, role dates and places, and the plate caption.
- **Wordmarks** (Bricolage 750 at 1.5rem, -0.035em in the masthead; 700 at 1.3rem, -0.02em in the colophon): upright, never italic.

### Named Rules
**The Two Voices Rule.** Bricolage announces, Literata is read. Names, titles, results, organisations, labels and actions are Bricolage; intro, deck, standfirst, role lines, notes and lists are Literata.

**The Italic Belongs To Literata Rule.** Bricolage is never italic. Any italic on the page, including the operative word in a spread title, is Literata 400.

**The Tight Heavy Display Rule.** Display sizes run heavy (560 to 750) and tight (-0.035 to -0.04em); tracking loosens as size drops (-0.015em for titles, positive tracking only for uppercase labels and actions). Optical sizing is automatic; never set opsz by hand.

## Layout

The page is a single column of spreads inside a centred frame (`max` 1320px, `gutter` side margins). A spread is a three-column grid: two equal pages and a 1px seam column, separated by `seam-gap`. Text spreads use `spread-block` vertical padding; role features use `feature-block`, and the closing spread `close-block`. Spreads are divided by hairline rules.

The opening spread is the exception: it ignores the frame, sets the portrait plate full-height (up to the viewport minus the masthead, capped at 980px) bleeding off the left edge, and drops the column gap so the plate meets the seam. Below 1000px the plate page narrows to 0.9fr against a 1.1fr answer page.

Role features are all one size and alternate sides: the first puts the result on the left page and the byline on the right, the next swaps them (the right-hand result and its note align right), and so on. Posing pages (titles) are sticky at 32px from the top while the answer page scrolls.

At 820px and below every spread collapses to one column: pose, then answer, with a 28px row gap; the seam becomes a full-width horizontal hairline (hidden on the opening spread), the portrait becomes a square, every feature resets to result-then-byline aligned left, sticky posing is released, and the masthead folio is dropped.

## Elevation & Depth

The system is completely flat. There are no shadows anywhere. Depth comes from print devices only: rules, the scale and weight jump between display and body type, and the photogravure plate with its multiplied grain layer (22% opacity fractal noise). The plate caption sits on a paper-coloured tab rather than floating.

### Named Rules
**The Printed Page Rule.** Nothing lifts off the paper. If a surface needs separation, use a hairline rule or whitespace, never a shadow, blur or tint.

## Shapes

Every corner is square (0). Form is drawn with 1px lines: the vertical seam, horizontal rules, the 0.7em by 1px dash marking each record item, and link underlines offset 5px. Icons are hand-drawn inline SVG strokes (1.6 stroke width, round caps): an arrow on buttons that slides 4px right on hover, and a plus on the record toggle that rotates 45 degrees into a close mark when open.

## Components

### Buttons
Solid, square, quiet type on loud colour.
- **Shape:** Square corners (0).
- **Primary:** Red fill, white Bricolage 500 label at 1rem, padding 0.85em 1.25em 0.9em, with a trailing stroke arrow at 1.15em.
- **Hover / Focus:** Fill deepens to pressed red over 220ms on the house ease; the arrow travels 4px right. Focus is the global 2px red outline at 3px offset.
- There is one button per context: the email action on the opening and closing spreads.

### Text Links
- **Style:** Bricolage 450 at 0.95rem in ink, underlined in red at 1px, 5px offset.
- **Hover:** Text turns red and the underline thickens to 2px.
- Used for the masthead email, social links beside the button, and the colophon links.

### Record Toggle (signature)
Each role byline ends in a native details/summary "Read the full record". The summary is red Bricolage 500 with a plus icon; on hover a red 1px underline draws in from the left (320ms). Open, the icon turns 45 degrees, the label swaps to "Close the record", and a Literata list unfolds below a hairline rule, each item marked with a 0.7em ink dash. Works without JavaScript.

### Role Feature Spread (signature)
One role per spread: an upright Bricolage result with a short Literata note on one page, the byline (organisation title, Literata italic role line, uppercase dates and place, optional note, record toggle) on the facing page, the seam between, a hairline above. Every role uses the same size and padding; only the side alternates.

### Photo Plate (signature)
The portrait is reprinted as photogravure: grayscale(1), contrast(1.14), brightness(1.03), cropped to cover at 50% 28%, with a grain overlay. A small uppercase Bricolage caption sits on a paper tab at the lower left. On load (motion permitting) the image wipes open from the seam over 1300ms while scaling from 1.06 to 1, and the name settles in from the left, the surname 140ms later.

### Masthead and Colophon
The masthead is a three-part baseline grid: the upright heavy Bricolage wordmark "zeroth", a centred uppercase folio (city and year), and the email link at the right, closed by a 1px ink rule. The colophon mirrors it at the foot: the upright Bricolage name, place, links and copyright, opened by an ink rule.

### Contents List
Training is set as a table of contents: rows with the entry on the left (Literata 600 degree, Literata italic school) and the year in tabular Bricolage on the right, divided by hairlines and opened by an ink rule.

## Do's and Don'ts

### Do:
- **Do** compose every new section as a spread: one page poses, the facing page answers, a 1px hairline seam between them.
- **Do** set real results at display size in upright Bricolage (560, -0.035em, lining figures), one per role spread.
- **Do** keep every role spread the same size and alternate the result between left and right pages.
- **Do** reserve red for pressable and focused things only.
- **Do** set the operative word of a spread title as a Literata 400 italic aside.
- **Do** reprint photography as greyscale photogravure with the grain layer.
- **Do** keep motion on the house ease (cubic-bezier(0.16, 1, 0.3, 1)) and behind prefers-reduced-motion.

### Don't:
- **Don't** use shadows, rounded corners, cards or tinted panels; separation is rules and whitespace.
- **Don't** introduce a second accent colour or use red for decoration, emphasis or data.
- **Don't** italicise Bricolage, or set reading content (intro, deck, notes, lists) in it.
- **Don't** set explicit optical sizes; both faces size their optical axis automatically.
- **Don't** promote one role above the others with a larger or full-width spread.
- **Don't** show photography in full colour.
