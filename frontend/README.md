# AYTORA Properties — upgraded from your original website code

This React + Vite project is a component-based rebuild of the HTML you supplied. It retains the original 12 sample property records, property categories, buy/rent filters, city and keyword search, price sorting, maximum-price slider, saved properties, property details modal, property-of-the-month section, services, EMI estimator and contact enquiry fields. The original embedded hero, featured-house, bedroom, services and logo images have been extracted into `public/images/`. The remaining property cards use local illustrative SVG thumbnails because the supplied HTML only contained one actual property-card photo; no missing property photos have been invented.

## Folder structure

```text
AYTORA-Properties/
├── public/
│   └── images/                 # Images extracted from your original HTML
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchPanel.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── PropertyModal.jsx
│   │   ├── EmiCalculator.jsx
│   │   └── ContactForm.jsx
│   ├── data/
│   │   └── properties.js       # Original 12 sample property records
│   ├── App.jsx                 # Main page and state
│   ├── main.jsx                # React entry point
│   └── styles.css              # Complete responsive styling
├── index.html
├── package.json
└── vite.config.js
```

## Run

```bash
npm install
npm run dev
```

Production build check:

```bash
npm run build
```

## Important before publishing

- The 12 listings are copied from the supplied website and are sample/demo records, not verified live inventory. Replace them with real owner-authorized listings, exact prices, correct photos, availability and documentation.
- The old counters and testimonials were not carried over as real claims because no evidence was provided for them. A transparent sample-content note is shown instead.
- The contact form validates fields and opens the visitor's email app with a prepared message. It does not store or send enquiries to a server. For actual lead management, connect a secure backend or form provider.
- Replace `info@aytoraproperties.com` with the official business email in `src/components/ContactForm.jsx` and `src/App.jsx`. Add the correct phone number and office address.
- The EMI tool is an estimate only; it is not a bank offer or financial advice.
- Property transactions require independent verification of title, approvals, taxes, possession and contract terms.
