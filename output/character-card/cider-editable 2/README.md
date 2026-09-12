# Halo Flashpoint RPG — editable Cider designs

Open this folder in Cider using **File → Open Project**. Select the `cider-editable` folder itself, not a CSV file.

Two decks are included:
- **Filled Character**: Spartan MK VII with equipped combat and seven RP attributes.
- **Blank Character**: white handwriting areas and empty values.

Expand a deck and select **Cards** to change its values. `Name` names the row; **Character Name** changes the printed name. Select **Filled Character** or **Blank Character** underneath the deck to edit its HTML and CSS with a live preview. Select the sample card in the preview dropdown if necessary. Save with **File → Save**.

All labels, stat values, fields, shapes, borders, colors and layouts are native HTML/CSS. They are not a full-card background image. The filled card uses the artwork region of the original generated PNG, clipped in CSS; the Spartan and faction emblem remain raster art. To replace it, import your image under Assets and enter its asset name (without extension) in **Portrait**. The replacement uses the full portrait box with contain sizing. The blank card also accepts a portrait this way.

The main color is the **Accent** card field. Layout measurements are in the template CSS. Both designs use a 1500 × 1040 px canvas; at 300 dpi that is 5 × 3.47 inches. Choose a larger export/print size if more handwriting room is needed. Check export dimensions in Cider before printing; physical dimensions are not stored in the CSV.

RP fields: STR, AGL, INT, AW, WIL, FEL, LCK. Values are deliberately text to preserve + signs, zero, dashes and starred notation. Filled values include functioning MJOLNIR bonuses; there is no automatic bonus calculation. Equipment and ability changes require updating the displayed stats yourself.

Each deck contains a template HTML file, matching CSS, cards.csv and attributes.csv. The Front Template columns are assigned. Templates can also be copied into another Cider project's deck directory with the corresponding attributes added there.

The generated raster concepts were rebuilt as editable layouts, so typography and minor border details differ slightly. Your earlier card project and its decks are separate.

Cider format reference: https://github.com/oatear/cider/blob/main/README.md
