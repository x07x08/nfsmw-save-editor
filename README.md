[The page](https://x07x08.github.io/nfsmw-save-editor/src)

## NFSMW Save Editor - Feature Specification & Implementation Guide

A web-based save file editor for **Need for Speed: Most Wanted (2005)**.

* **Tested Versions:** PC 1.3 English Version (`6,029,312` bytes) and PlayStation 2 (PS2) save files.
* **Core Mechanisms:** Real-time UI updates (`syncUI`), automated memory offset recalculations, and dynamic MD5 checksum regeneration.

---

## Overview & Core Features

The editor provides direct, browser-based inspection and modification of profile statistics, career progression, pursuit history, car garages, and raw binary markers.

### Base Editable Statistics
* **Money & Bounty:** Modify total cash reserves and profile bounty points.
* **Infractions:** Adjust accumulated career infractions and fine counters.
* **Pursuit Statistics:** Detailed global and per-car pursuit records (cost to state, police vehicles damaged/destroyed, spike strips avoided, roadblocks broken).
* **Profile / Case Name:** Update driver profile alias.

---

## Newly Integrated Features


### 1. Blacklist Rivals (`BLACKLIST RIVALS`)

Full management of all 15 Blacklist members, including vehicle assignments and progression status.

#### Blacklist Roster
1. **#15 SONNY** — *Volkswagen Golf GTI*
2. **#14 TAZ** — *Lexus IS300*
3. **#13 VIC** — *Toyota Supra*
4. **#12 IZZY** — *Mazda RX-8*
5. **#11 BIG LOU** — *Mitsubishi Eclipse*
6. **#10 BARON** — *Porsche Cayman S*
7. **#9 EARL** — *Mitsubishi Lancer Evolution VIII*
8. **#8 JEWELS** — *Ford Mustang GT*
9. **#7 KAZE** — *Mercedes-Benz CLK 500*
10. **#6 MING** — *Lamborghini Gallardo*
11. **#5 WEBSTER** — *Chevrolet Corvette C6*
12. **#4 JV** — *Dodge Viper SRT-10*
13. **#3 RONNIE** — *Aston Martin DB9*
14. **#2 BULL** — *Mercedes-Benz SLR McLaren*
15. **#1 RAZOR** — *BMW M3 GTR*

#### Interactive UI & Synchronization
* **Single-Click Status Selector (`<select>`):** Replaced legacy text input fields with a 3-option dropdown for each rival:
  * `DEFEATED`
  * `ACTIVE`
  * `LOCKED`
* **Automated Offset Handling:**
  * Selecting a status automatically updates the **Current Blacklist Target Offset** (`0x4038`) and the **Razor Final Flag** (`0x4040`).
* **Instant `syncUI()` Synchronization:**
  * Modifying any rival's state instantly synchronizes the remaining 14 rivals and the **CAREER SETTINGS** rival target in real time, without refreshing the page or closing dropdowns/accordions.
* **Automated Checksum:** Recalculates the save file's **MD5 checksum** on the fly after every change.

---

### 2. Career Progression Settings (`CAREER SETTINGS`)

Precision control over story flags, target milestones, and completion flags:

| Setting Field | Memory Offset / Bit | Description | Valid Range / Options |
| :--- | :--- | :--- | :--- |
| **Active Car Number** | `0x4034` | Index of the currently selected career garage car | Variable |
| **Current Blacklist Rival** | `0x4038` | Current active Blacklist target rival | `1` to `15` |
| **Razor Defeated (Endgame)** | `0x4040` (Bit `0x1000`) | Marks Razor as defeated and triggers the endgame pursuit sequence | `Enabled` / `Disabled` |
| **Career 100% Completed** | `0x4040` (Bit `0x0040`) | Global flag declaring 100% career completion status | `Enabled` / `Disabled` |
| **Career Races Completed** | `0x42C1` | Count of completed career races in the main event grid | `0` to `248` |

---

### 3. Junkman & Reward Tokens (`JUNKMAN & REWARD TOKENS`)

Direct inventory quantity management for **21 unique token types**, corresponding to the 63-slot inventory table mapped at offset `0x5739`.

#### Token Categories & Types
* **Performance Parts (Junkman / Unique):**
  * Unique Brakes
  * Unique Engine
  * Unique Nitrous
  * Unique Turbo / Supercharger
  * Unique Suspension
  * Unique Tires
  * Unique Transmission
* **Visual & Styling Upgrades:**
  * Unique Body Kit
  * Unique Hood
  * Unique Spoiler
  * Unique Rims
  * Unique Roof Scoop
* **Customization Details:**
  * Custom Gauges
  * Unique Vinyl
  * Unique Decal
  * Unique Paint
* **Career & Impound Tokens:**
  * Get Out Of Jail Free Card
  * Pink Slip To Rival Car
  * Extra Cash Reward
  * Extra Impound Strike
  * Release Vehicle From Impound

---

### 4. Per-Vehicle Attributes (`CAR #N`)

In addition to standard pursuit metrics, each vehicle in the user's career garage now features expanded attributes:

* **Heat Level (`0x0C`):** Current pursuit heat rating (Float scale: `1.0` to `5.0`).
* **Impound Strikes (`0x03`):** Current accumulated impound strike count on the vehicle.
* **Max Impound Strikes (`0x02`):** Maximum strike threshold allowed for the car before forfeiture.
* **Pursuits Evaded (`0x14`):** Count of successfully evaded police pursuits in this car.
* **Pursuits Busted (`0x16`):** Count of times caught/busted by police in this car.

---

### 5. Events & Time Trackers

* **Speed List Events:** Progression and completion tracking across all **25 Speed List / Activity events**.
* **Race Best Times:** Editing and verification of best record times for **29 Career Races**.

---

## Known Issues & Technical Limitations

* **Time Conversion:** Automatic conversion of raw race timestamps to human-readable time format remains under active development.

---

## Credits & Attributions

* **Base Save Editor Project:** Derived from [NFSMWSaveE](https://github.com/BilawalAhmed0900/NFSMWSaveE)
