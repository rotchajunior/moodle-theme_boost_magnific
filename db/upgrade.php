<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Upgrade file
 *
 * @package    theme_boost_magnific
 * @copyright  2024 Eduardo kraus (http://eduardokraus.com)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * function xmldb_supervideo_upgrade
 *
 * @param int $oldversion
 *
 * @return bool
 *
 * @throws Exception
 */
function xmldb_theme_boost_magnific_upgrade($oldversion) {
    if ($oldversion < 2024031007) {
        require_once(__DIR__ . "/install.php");
        boost_magnific_install_settings_icons();

        upgrade_plugin_savepoint(true, 2024031007, 'theme', 'boost_magnific');
    }

    if ($oldversion < 2024042301) {
        set_config("footer_type", 0, "theme_boost_magnific");
        set_config("home_type", 0, "theme_boost_magnific");

        upgrade_plugin_savepoint(true, 2024042301, 'theme', 'boost_magnific');
    }

    if ($oldversion < 2024042400) {
        $htmldata = get_config("theme_boost_magnific", "home_htmldata");
        $cssdata = get_config("theme_boost_magnific", "home_cssdata");
        $html = "{$htmldata}\n<style>{$cssdata}</style>";
        set_config("home_htmleditor_all", $html, "theme_boost_magnific");

        $htmldata = get_config("theme_boost_magnific", "footer_htmldata");
        $cssdata = get_config("theme_boost_magnific", "footer_cssdata");
        $html = "{$htmldata}\n<style>{$cssdata}</style>";
        set_config("footer_htmleditor_all", $html, "theme_boost_magnific");

        upgrade_plugin_savepoint(true, 2024042400, 'theme', 'boost_magnific');
    }

    return true;
}
