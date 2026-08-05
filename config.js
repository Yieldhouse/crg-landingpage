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
  token:  "patu404MEe4QdyzDk.d72836596d5b59ed3576755a49ac4c45f6821c032d5ee05818735bbf2cb8d466",
  tables: {
    events:   "Events",
    contacts: "Contacts",
    tasks:    "Tasks"
  }
};
