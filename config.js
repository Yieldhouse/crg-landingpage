/* ============================================================
   CAPITAL RESOURCE GROUP — SETTINGS FILE
   ============================================================

   This is the ONLY file you need to edit to connect everything
   to your Airtable. Follow the setup guide (SETUP-GUIDE.html) —
   it tells you exactly what to paste into each spot below.

   Replace the text inside the quote marks. Keep the quote marks.
   ============================================================ */

window.CRG_CONFIG = {

  // 1) Your Airtable Base ID — starts with "app..."
  baseId: "app6mvBUixINfO0IM",

  // 2) Your Airtable Access Token — starts with "pat..."
  token: "pat6lHOncu73cjkNK.5cfc9d64d7a0177b77d99705281c84113f05b6f2f58850380efff3074e119c69",

  // 3) Table names — leave these exactly as they are unless you
  //    renamed a table in Airtable.
  tables: {
    events:   "Events",
    contacts: "Contacts",
    tasks:    "Tasks"
  },

  // 4) The password to open the CRM dashboard.
  //    (This is a simple gate. Real security is handled by
  //    Cloudflare Access — see the guide.)
  crmUsername: "crg",
  crmPassword: "events2026"

};
