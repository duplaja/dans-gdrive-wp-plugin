=== Dan's Viewer for Google Drive ===
Contributors: duplaja
Donate link: https://www.wptechguides.com/donate/
Tags: embed, Google Drive, share files, gdrive, drive, dan
Requires at least: 4.0.1
Tested up to: 4.6.1
Stable tag: trunk
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

Dan's Viewer for Google Drive was created when I was looking for a  way to share files via Google Drive on my sites, in a way that allowed downloading, viewing, exporting, and hardest to find, the ability drill down into subfolders without leaving the site. I couldn't find anything within my price range that fit what I needed, so I decided to create my own.

Dan's Viewer for Google Drive displays files in a way that is mobile friendly, customizable via shortcode, and easy to style. No need to import files or manage them directly in WordPress. All you need is a public Google Drive Folder (or multiple!) and a free, easy to get API key.

Features

* Displays public drive document listings in a mobile friendly format

* Offers both View and Download Options, where appropriate

* Offers Export Option for Google Docs / Sheets / Presentations

* All options are configured via shortcode

* Allows drill down / up within folders without leaving the page

* Ability to store and use unlimited Google Drive Folders

Shortcodes:

* Default Display `[dandrive]` (defaults to 1st drive)

* Optional Attributes Ex:`[dandrive drive=1 divid=mydrive height=400 width=300 rbutton=no]`

* drive= (number of the drive you want, defaults to 1 if not entered)

* divid= (id of the div your calendar is stored in, for custom theming. Defaults to random string to allow multiple per page)

* height= (maximum height in pixels, defaults to auto. If this is set, a scroll bar will appear if your div overflows. Enter a number only).

* width = (maximum width in pixels, defaults to 400. Enter a number only)

* rbutton = (no means don't display return to initial folder button. Omit to display (default behaviour))

For help creating an API key to use with this plugin, either check out the settings page in plugin, or the FAQ tab here.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/dans-gdrive-viewer` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress
1. Head over to the Dan's GDrive settings page, found on the Dashboard sidebar.

== Frequently Asked Questions ==

= How do I create my API key? =

To create API key, visit Google Developers Console. https://console.developers.google.com/ 
Then, follow bellow;

* Create new project (or use project you created before).

* Check "APIs & auth" -> "Credentials" on side menu.

* Hit "Create new Key" button on "Public API access" section.

* Choose "Browser key" and keep blank on referer limitation.

* Set this key on the plugin's setting page.

= How do I find the ID for the folder I want to share? =

Once you have set the folder as public, you can find the id with the following:

* Visit https:/drive.google.com/, while logged in to your account.

* Enter the folder that you have shared publically

* Find the folder ID from the url, after the /folders/. Example: https://drive.google.com/drive/u/0/folders/xxxxxxxxxxxxxxxx , where xxxxxxxxxxxxxxx is the key.


== Screenshots ==

1. View of Shared Folder with Drill Up / Drill Down

2. Settings Page

== Dependencies and Liscencing ==

Depends on Google Drive's JavaScript API v4

== Changelog ==

= 1.0 =
* Initial Plugin Release

== Upgrade Notice ==

= 1.0 =
* Initial Plugin Release
