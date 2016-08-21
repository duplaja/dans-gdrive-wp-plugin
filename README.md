# dans-gdrive-wp-plugin

Welcome! This is a basic Google Drive Viewer integration plugin, with the following features.

-Displays public drive document listings in a mobile friendly format

-Offers both View and Download Options, where appropriate

- All options are configured via shortcode

- Offers Export Option for Google Docs / Sheets / Presentations

- Allows Drill Down / Up without Leaving the Page

Shortcodes:

-Default Display `[dandrive]` (defaults to 1st drive)

-Optional Attributes Ex:`[dandrive drive=1 divid=mydrive height=400 width=300 rbutton=no]`

-drive= (number of the drive you want, defaults to 1 if not entered)

-divid= (id of the div your calendar is stored in, for custom theming. Defaults to random string to allow multiple per page)

-height= (maximum height in pixels, defaults to auto. If this is set, a scroll bar will appear if your div overflows. Enter a number only).

-width = (maximum width in pixels, defaults to 400. Enter a number only)

-rbutton = (no means don't display return to initial folder button. Omit to display (default behaviour))

To create API key, visit Google Developers Console Then, follow bellow;

-Create new project (or use project you created before).

-Check "APIs & auth" -> "Credentials" on side menu.

-Hit "Create new Key" button on "Public API access" section.

-Choose "Browser key" and keep blank on referer limitation.

** Liscencing**

All Files Released Under MIT Liscencing

Depends on Google Drive API, and jQuery
