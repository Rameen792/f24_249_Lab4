# Uniform Shop — Lab 04: Types in a File

A small three-page JavaScript project built for **Lab 04**. It shows how JavaScript types behave in real code: strings, numbers, `NaN`, `undefined` and `null`. The theme is a Uniform Shop with a steelblue header.

| | |
|---|---|
| **Name** | Rameen |
| **Roll Number** | F24A-249 |
| **Class** | BSCS-F24-A |
| **Shop / Colour** | Uniform Shop · steelblue |

---

## Pages

### 1. The Sheet (`index.html` + `script.js`) — Tasks 1–5
- Table is filled from an array of objects
- Add form with Item, Quantity and Price
- Each row has a **Line** (quantity × price) and a **Note** (price text + quantity)
- Bad price (for example `abc`) gives `NaN`; the row stays but is skipped in the total
- Empty item shows `undefined`
- Total and `typeof` checks, plus `==` vs `===`

### 2. The Till (`till.html` + `till.js`) — Tasks 6–8
- Bill and Paid boxes
- `getChange(bill, paid)` function (works above its declaration because of hoisting)
- Shows change and half of the change, or "Still owed" when the bill is bigger
- Empty Paid box becomes `null` (`typeof null` is `"object"`)

### 3. Who Is In (`who.html` + `who.js`) — Tasks 9–11
- Name box with **Here** and **Out** buttons
- List is drawn from an array of objects using destructuring
- Counts people in the shop with `inShop === true`
- One person starts with no answer (`undefined`) and is not counted

---

## Project Structure

```
F24A-249-LAB4/
├── Task1/ … Task11/     # progress saved per task
└── Task12/              # final version
    ├── index.html
    ├── script.js
    ├── till.html
    ├── till.js
    ├── who.html
    ├── who.js
    └── styles.css       # shared by all three pages
```

## Concepts Covered

| Concept | Where it appears |
|---|---|
| String + number joins text (`"150" + 3` → `"1503"`) | Sheet — Note |
| `NaN` and `Number.isNaN` | Sheet — Line and total |
| `undefined` (never set) | Sheet — empty item, Who is in — Unknown |
| `null` (set on purpose) | Till — empty Paid box |
| `==` vs `===` | Sheet — type checks, Who is in — count |
| Function hoisting | Till — `getChange` |
| Destructuring | Who is in — `let { name, inShop } = person` |

## Tech Used

- HTML5
- CSS3 (flexbox, shared stylesheet)
- Vanilla JavaScript (no libraries)

## Git

One commit per task (Task 1 to Task 12) with the required commit message.

