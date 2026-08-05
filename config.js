/* ============================================================
   CRG — LANDING PAGE SETTINGS  (crg-educationevents.com)
   ============================================================
   This file connects the public landing page to Airtable so it
   can show upcoming events and write registrations.

   ⚠️  ROTATE THIS TOKEN. The value below was previously exposed.
       Generate a new Airtable personal access token, revoke the
       old one, and paste the new value in BOTH repos' config.js.
       Scope it to just this one base if you can.
   ============================================================ */

window.CRG_CONFIG = {
  baseId: "app6mvBUixINfO0IM",
  token:  "patasXzkQHwhAYJYX.844622df651e0f97e977c80d78b2163cb6d4e311ee7ec25144e6f1c4562a2ef4",
  tables: {
    events:   "Events",
    contacts: "Contacts",
    tasks:    "Tasks"
  }
};
