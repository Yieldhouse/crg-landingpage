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
  token:  "pat6lHOncu73cjkNK.5cfc9d64d7a0177b77d99705281c84113f05b6f2f58850380efff3074e119c69",
  tables: {
    events:   "Events",
    contacts: "Contacts",
    tasks:    "Tasks"
  }
};
