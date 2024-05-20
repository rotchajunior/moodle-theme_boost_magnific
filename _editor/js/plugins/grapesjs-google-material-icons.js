/*! grapesjs-google-material-icons - 1.0.9 */
!function(e, o) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = o() : 'function' == typeof define && define.amd ? define([], o) : 'object' == typeof exports ? exports["grapesjs-google-material-icons"] = o() : e["grapesjs-google-material-icons"] = o()
}('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : this, (() => (() => {
    "use strict";
    var e = {
        167    : (e, o, t) => {
            t.d(o, {Z : () => _});
            var n = t(537), a = t.n(n), r = t(645), i = t.n(r)()(a());
            i.push([e.id, `.googleIconPicker__content {
  margin: auto auto;
  padding: 0 0 40px;
  width: 90%; 
  height: 80%; 
  position: relative;
  overflow: hidden;
  max-width: none;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.googleIconPicker {
  background: #fcfcfc;
  padding: 20px;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  display: flex;
}

.googleIconPicker__iconWrapper {
  font-variation-settings: 'FILL' var(--fill), 'wght' var(--weight), 'GRAD' var(--grade), 'opsz' var(--opticalsize);
  background: transparent;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  height: 128px;
  position: relative;
  user-select: none;
  width: 96px;
}

.googleIconPicker__iconWrapper:hover {
  background-color: rgba(13, 25, 44, 10%);
}

.googleIconPicker__iconWrapper > span {
  pointer-events: none;
} 

.googleIconPicker__icon.googleIconPicker__icon {
  display: block;
  margin-bottom: 20px;
  font-size: 48px;
}

.googleIconPicker__icons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  align-content: flex-start;
  padding: 10px 8px;
}

.googleIconPicker__close {
  position: absolute;
  top: 8px;
  right: 20px;
  z-index: 10;
}

.googleIconPicker__search {
  display: flex;
  align-items: center;
  gap: 6px;
}

.googleIconPicker__iconName {
  font-size: 12px;
  font-family: Helvetica,sans-serif;
}

.googleIconPicker__overlay {
  background: rgba(0,0,0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.googleIconPicker__filterBar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 6px;
}

.googleIconPicker__customization{
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.googleIconPicker__customization > div{
  display: flex;
  /* flex-wrap: wrap; */
  gap: 6px;
  align-items: center;
}

.googleIconPicker__customization label {
  white-space: nowrap;
}

.googleIconPicker__customization .gjs-select {
  min-width: 75px;
}`, "", {
                version        : 3,
                sources        : ["webpack://./src/iconPicker.css"],
                names          : [],
                mappings       : "AAAA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,iHAAiH;EACjH,uBAAuB;EACvB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB",
                sourcesContent : [`.googleIconPicker__content {
  margin: auto auto;
  padding: 0 0 40px;
  width: 90%; 
  height: 80%; 
  position: relative;
  overflow: hidden;
  max-width: none;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.googleIconPicker {
  background: #fcfcfc;
  padding: 20px;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  display: flex;
}

.googleIconPicker__iconWrapper {
  font-variation-settings: 'FILL' var(--fill), 'wght' var(--weight), 'GRAD' var(--grade), 'opsz' var(--opticalsize);
  background: transparent;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  height: 128px;
  position: relative;
  user-select: none;
  width: 96px;
}

.googleIconPicker__iconWrapper:hover {
  background-color: rgba(13, 25, 44, 10%);
}

.googleIconPicker__iconWrapper > span {
  pointer-events: none;
} 

.googleIconPicker__icon.googleIconPicker__icon {
  display: block;
  margin-bottom: 20px;
  font-size: 48px;
}

.googleIconPicker__icons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  align-content: flex-start;
  padding: 10px 8px;
}

.googleIconPicker__close {
  position: absolute;
  top: 8px;
  right: 20px;
  z-index: 10;
}

.googleIconPicker__search {
  display: flex;
  align-items: center;
  gap: 6px;
}

.googleIconPicker__iconName {
  font-size: 12px;
  font-family: Helvetica,sans-serif;
}

.googleIconPicker__overlay {
  background: rgba(0,0,0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.googleIconPicker__filterBar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 6px;
}

.googleIconPicker__customization{
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.googleIconPicker__customization > div{
  display: flex;
  gap: 6px;
  align-items: center;
}

.googleIconPicker__customization label {
  white-space: nowrap;
}

.googleIconPicker__customization .gjs-select {
  min-width: 75px;
}`],
                sourceRoot     : ""
            }]);
            const _ = i
        }, 645 : e => {
            e.exports = function(e) {
                var o = [];
                return o.toString = function() {
                    return this.map((function(o) {
                        var t = "", n = void 0 !== o[5];
                        return o[4] && (t += "@supports (".concat(o[4], ") {")), o[2] && (t += "@media ".concat(o[2], " {")), n && (t += "@layer".concat(o[5].length > 0 ? " ".concat(o[5]) : "", " {")), t += e(o), n && (t += "}"), o[2] && (t += "}"), o[4] && (t += "}"), t
                    })).join("")
                }, o.i = function(e, t, n, a, r) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var i = {};
                    if (n) for (var _ = 0; _ < this.length; _++) {
                        var s = this[_][0];
                        null != s && (i[s] = !0)
                    }
                    for (var l = 0; l < e.length; l++) {
                        var c = [].concat(e[l]);
                        n && i[c[0]] || (void 0 !== r && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = r), t && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = t) : c[2] = t), a && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = a) : c[4] = "".concat(a)), o.push(c))
                    }
                }, o
            }
        }, 537 : e => {
            e.exports = function(e) {
                var o = e[1], t = e[3];
                if (!t) return o;
                if ("function" == typeof btoa) {
                    var n = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                        a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),
                        r = "/*# ".concat(a, " */");
                    return [o].concat([r]).join("\n")
                }
                return [o].join("\n")
            }
        }, 379 : e => {
            var o = [];

            function t(e) {
                for (var t = -1, n = 0; n < o.length; n++) if (o[n].identifier === e) {
                    t = n;
                    break
                }
                return t
            }

            function n(e, n) {
                for (var r = {}, i = [], _ = 0; _ < e.length; _++) {
                    var s = e[_], l = n.base ? s[0] + n.base : s[0], c = r[l] || 0, d = "".concat(l, " ").concat(c);
                    r[l] = c + 1;
                    var p = t(d), u = {css : s[1], media : s[2], sourceMap : s[3], supports : s[4], layer : s[5]};
                    if (-1 !== p) o[p].references++, o[p].updater(u); else {
                        var m = a(u, n);
                        n.byIndex = _, o.splice(_, 0, {identifier : d, updater : m, references : 1})
                    }
                    i.push(d)
                }
                return i
            }

            function a(e, o) {
                var t = o.domAPI(o);
                t.update(e);
                return function(o) {
                    if (o) {
                        if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap && o.supports === e.supports && o.layer === e.layer) return;
                        t.update(e = o)
                    } else t.remove()
                }
            }

            e.exports = function(e, a) {
                var r = n(e = e || [], a = a || {});
                return function(e) {
                    e = e || [];
                    for (var i = 0; i < r.length; i++) {
                        var _ = t(r[i]);
                        o[_].references--
                    }
                    for (var s = n(e, a), l = 0; l < r.length; l++) {
                        var c = t(r[l]);
                        0 === o[c].references && (o[c].updater(), o.splice(c, 1))
                    }
                    r = s
                }
            }
        }, 569 : e => {
            var o = {};
            e.exports = function(e, t) {
                var n = function(e) {
                    if (void 0 === o[e]) {
                        var t = document.querySelector(e);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                            t = t.contentDocument.head
                        } catch (e) {
                            t = null
                        }
                        o[e] = t
                    }
                    return o[e]
                }(e);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                n.appendChild(t)
            }
        }, 216 : e => {
            e.exports = function(e) {
                var o = document.createElement("style");
                return e.setAttributes(o, e.attributes), e.insert(o, e.options), o
            }
        }, 565 : (e, o, t) => {
            e.exports = function(e) {
                var o = 1 ? t.nc : 0;
                o && e.setAttribute("nonce", o)
            }
        }, 795 : e => {
            e.exports = function(e) {
                if ("undefined" == typeof document) return {
                    update    : function() {
                    }, remove : function() {
                    }
                };
                var o = e.insertStyleElement(e);
                return {
                    update    : function(t) {
                        !function(e, o, t) {
                            var n = "";
                            t.supports && (n += "@supports (".concat(t.supports, ") {")), t.media && (n += "@media ".concat(t.media, " {"));
                            var a = void 0 !== t.layer;
                            a && (n += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), n += t.css, a && (n += "}"), t.media && (n += "}"), t.supports && (n += "}");
                            var r = t.sourceMap;
                            r && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), o.styleTagTransform(n, e, o.options)
                        }(o, e, t)
                    }, remove : function() {
                        !function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(o)
                    }
                }
            }
        }, 589 : e => {
            e.exports = function(e, o) {
                if (o.styleSheet) o.styleSheet.cssText = e; else {
                    for (; o.firstChild;) o.removeChild(o.firstChild);
                    o.appendChild(document.createTextNode(e))
                }
            }
        }
    }, o  = {};

    function t(n) {
        var a = o[n];
        if (void 0 !== a) return a.exports;
        var r = o[n] = {id : n, exports : {}};
        return e[n](r, r.exports, t), r.exports
    }

    t.n = e => {
        var o = e && e.__esModule ? () => e['default'] : () => e;
        return t.d(o, {a : o}), o
    }, t.d = (e, o) => {
        for (var n in o) t.o(o, n) && !t.o(e, n) && Object.defineProperty(e, n, {enumerable : !0, get : o[n]})
    }, t.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o), t.r = e => {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value : 'Module'}), Object.defineProperty(e, '__esModule', {value : !0})
    }, t.nc = void 0;
    var n = {};
    return (() => {
        t.r(n), t.d(n, {default : () => w});
        const e = {
            "123"                                           : 1,
            "360"                                           : 14,
            "10k"                                           : 10,
            "10mp"                                          : 10,
            "11mp"                                          : 10,
            "12mp"                                          : 10,
            "13mp"                                          : 10,
            "14mp"                                          : 10,
            "15mp"                                          : 10,
            "16mp"                                          : 10,
            "17mp"                                          : 10,
            "18_up_rating"                                  : 1,
            "18mp"                                          : 10,
            "19mp"                                          : 10,
            "1k"                                            : 10,
            "1k_plus"                                       : 10,
            "1x_mobiledata"                                 : 9,
            "20mp"                                          : 10,
            "21mp"                                          : 10,
            "22mp"                                          : 10,
            "23mp"                                          : 10,
            "24mp"                                          : 10,
            "2k"                                            : 10,
            "2k_plus"                                       : 10,
            "2mp"                                           : 10,
            "30fps"                                         : 10,
            "30fps_select"                                  : 10,
            "3d_rotation"                                   : 18,
            "3g_mobiledata"                                 : 9,
            "3k"                                            : 10,
            "3k_plus"                                       : 10,
            "3mp"                                           : 10,
            "3p"                                            : 11,
            "4g_mobiledata"                                 : 9,
            "4g_plus_mobiledata"                            : 9,
            "4k"                                            : 11,
            "4k_plus"                                       : 10,
            "4mp"                                           : 10,
            "5g"                                            : 13,
            "5k"                                            : 10,
            "5k_plus"                                       : 10,
            "5mp"                                           : 10,
            "60fps"                                         : 10,
            "60fps_select"                                  : 10,
            "6_ft_apart"                                    : 9,
            "6k"                                            : 10,
            "6k_plus"                                       : 10,
            "6mp"                                           : 10,
            "7k"                                            : 10,
            "7k_plus"                                       : 10,
            "7mp"                                           : 10,
            "8k"                                            : 11,
            "8k_plus"                                       : 11,
            "8mp"                                           : 10,
            "9k"                                            : 10,
            "9k_plus"                                       : 10,
            "9mp"                                           : 10,
            "abc"                                           : 1,
            "ac_unit"                                       : 12,
            "access_alarm"                                  : 12,
            "access_alarms"                                 : 12,
            "access_time"                                   : 12,
            "access_time_filled"                            : 10,
            "accessibility"                                 : 13,
            "accessibility_new"                             : 13,
            "accessible"                                    : 13,
            "accessible_forward"                            : 13,
            "account_balance"                               : 19,
            "account_balance_wallet"                        : 12,
            "account_box"                                   : 14,
            "account_circle"                                : 20,
            "account_tree"                                  : 12,
            "ad_units"                                      : 13,
            "adb"                                           : 12,
            "add"                                           : 21,
            "add_a_photo"                                   : 14,
            "add_alarm"                                     : 13,
            "add_alert"                                     : 16,
            "add_box"                                       : 13,
            "add_business"                                  : 17,
            "add_card"                                      : 1,
            "add_chart"                                     : 11,
            "add_circle"                                    : 13,
            "add_circle_outline"                            : 16,
            "add_comment"                                   : 11,
            "add_home"                                      : 1,
            "add_home_work"                                 : 1,
            "add_ic_call"                                   : 12,
            "add_link"                                      : 11,
            "add_location"                                  : 16,
            "add_location_alt"                              : 13,
            "add_moderator"                                 : 12,
            "add_photo_alternate"                           : 12,
            "add_reaction"                                  : 9,
            "add_road"                                      : 12,
            "add_shopping_cart"                             : 15,
            "add_task"                                      : 6,
            "add_to_drive"                                  : 18,
            "add_to_home_screen"                            : 12,
            "add_to_photos"                                 : 12,
            "add_to_queue"                                  : 11,
            "addchart"                                      : 13,
            "adf_scanner"                                   : 2,
            "adjust"                                        : 12,
            "admin_panel_settings"                          : 13,
            "ads_click"                                     : 3,
            "agriculture"                                   : 11,
            "air"                                           : 10,
            "airline_seat_flat"                             : 12,
            "airline_seat_flat_angled"                      : 12,
            "airline_seat_individual_suite"                 : 11,
            "airline_seat_legroom_extra"                    : 12,
            "airline_seat_legroom_normal"                   : 12,
            "airline_seat_legroom_reduced"                  : 12,
            "airline_seat_recline_extra"                    : 12,
            "airline_seat_recline_normal"                   : 12,
            "airline_stops"                                 : 2,
            "airlines"                                      : 2,
            "airplane_ticket"                               : 11,
            "airplanemode_active"                           : 16,
            "airplanemode_inactive"                         : 17,
            "airplay"                                       : 13,
            "airport_shuttle"                               : 12,
            "alarm"                                         : 12,
            "alarm_add"                                     : 12,
            "alarm_off"                                     : 12,
            "alarm_on"                                      : 12,
            "album"                                         : 12,
            "align_horizontal_center"                       : 6,
            "align_horizontal_left"                         : 7,
            "align_horizontal_right"                        : 7,
            "align_vertical_bottom"                         : 6,
            "align_vertical_center"                         : 6,
            "align_vertical_top"                            : 6,
            "all_inbox"                                     : 11,
            "all_inclusive"                                 : 11,
            "all_out"                                       : 12,
            "alt_route"                                     : 9,
            "alternate_email"                               : 13,
            "analytics"                                     : 12,
            "anchor"                                        : 7,
            "android"                                       : 15,
            "animation"                                     : 14,
            "announcement"                                  : 18,
            "aod"                                           : 10,
            "apartment"                                     : 11,
            "api"                                           : 7,
            "app_blocking"                                  : 13,
            "app_registration"                              : 11,
            "app_settings_alt"                              : 17,
            "app_shortcut"                                  : 2,
            "approval"                                      : 11,
            "apps"                                          : 12,
            "apps_outage"                                   : 2,
            "architecture"                                  : 11,
            "archive"                                       : 16,
            "area_chart"                                    : 3,
            "arrow_back"                                    : 17,
            "arrow_back_ios"                                : 14,
            "arrow_back_ios_new"                            : 6,
            "arrow_circle_down"                             : 8,
            "arrow_circle_left"                             : 2,
            "arrow_circle_right"                            : 2,
            "arrow_circle_up"                               : 8,
            "arrow_downward"                                : 17,
            "arrow_drop_down"                               : 16,
            "arrow_drop_down_circle"                        : 12,
            "arrow_drop_up"                                 : 12,
            "arrow_forward"                                 : 13,
            "arrow_forward_ios"                             : 16,
            "arrow_left"                                    : 12,
            "arrow_outward"                                 : 1,
            "arrow_right"                                   : 12,
            "arrow_right_alt"                               : 13,
            "arrow_upward"                                  : 11,
            "art_track"                                     : 13,
            "article"                                       : 13,
            "aspect_ratio"                                  : 12,
            "assessment"                                    : 12,
            "assignment"                                    : 15,
            "assignment_ind"                                : 12,
            "assignment_late"                               : 15,
            "assignment_return"                             : 14,
            "assignment_returned"                           : 12,
            "assignment_turned_in"                          : 16,
            "assist_walker"                                 : 1,
            "assistant"                                     : 12,
            "assistant_direction"                           : 14,
            "assistant_photo"                               : 12,
            "assured_workload"                              : 1,
            "atm"                                           : 12,
            "attach_email"                                  : 16,
            "attach_file"                                   : 16,
            "attach_money"                                  : 17,
            "attachment"                                    : 15,
            "attractions"                                   : 10,
            "attribution"                                   : 11,
            "audio_file"                                    : 1,
            "audiotrack"                                    : 12,
            "auto_awesome"                                  : 14,
            "auto_awesome_mosaic"                           : 14,
            "auto_awesome_motion"                           : 14,
            "auto_delete"                                   : 11,
            "auto_fix_high"                                 : 14,
            "auto_fix_normal"                               : 14,
            "auto_fix_off"                                  : 13,
            "auto_graph"                                    : 4,
            "auto_mode"                                     : 1,
            "auto_stories"                                  : 13,
            "autofps_select"                                : 10,
            "autorenew"                                     : 12,
            "av_timer"                                      : 12,
            "baby_changing_station"                         : 8,
            "back_hand"                                     : 3,
            "backpack"                                      : 8,
            "backspace"                                     : 13,
            "backup"                                        : 15,
            "backup_table"                                  : 11,
            "badge"                                         : 11,
            "bakery_dining"                                 : 11,
            "balance"                                       : 1,
            "balcony"                                       : 4,
            "ballot"                                        : 14,
            "bar_chart"                                     : 13,
            "batch_prediction"                              : 12,
            "bathroom"                                      : 10,
            "bathtub"                                       : 11,
            "battery_0_bar"                                 : 1,
            "battery_1_bar"                                 : 1,
            "battery_2_bar"                                 : 1,
            "battery_3_bar"                                 : 1,
            "battery_4_bar"                                 : 1,
            "battery_5_bar"                                 : 1,
            "battery_6_bar"                                 : 1,
            "battery_alert"                                 : 12,
            "battery_charging_full"                         : 12,
            "battery_full"                                  : 12,
            "battery_saver"                                 : 9,
            "battery_std"                                   : 12,
            "battery_unknown"                               : 13,
            "beach_access"                                  : 12,
            "bed"                                           : 10,
            "bedroom_baby"                                  : 9,
            "bedroom_child"                                 : 9,
            "bedroom_parent"                                : 9,
            "bedtime"                                       : 15,
            "bedtime_off"                                   : 2,
            "beenhere"                                      : 12,
            "bento"                                         : 6,
            "bike_scooter"                                  : 11,
            "biotech"                                       : 11,
            "blender"                                       : 9,
            "blind"                                         : 1,
            "blinds"                                        : 3,
            "blinds_closed"                                 : 1,
            "block"                                         : 17,
            "bloodtype"                                     : 10,
            "bluetooth"                                     : 11,
            "bluetooth_audio"                               : 12,
            "bluetooth_connected"                           : 12,
            "bluetooth_disabled"                            : 17,
            "bluetooth_drive"                               : 9,
            "bluetooth_searching"                           : 13,
            "blur_circular"                                 : 12,
            "blur_linear"                                   : 12,
            "blur_off"                                      : 12,
            "blur_on"                                       : 12,
            "bolt"                                          : 10,
            "book"                                          : 16,
            "book_online"                                   : 10,
            "bookmark"                                      : 17,
            "bookmark_add"                                  : 3,
            "bookmark_added"                                : 3,
            "bookmark_border"                               : 12,
            "bookmark_remove"                               : 3,
            "bookmarks"                                     : 12,
            "border_all"                                    : 12,
            "border_bottom"                                 : 12,
            "border_clear"                                  : 12,
            "border_color"                                  : 15,
            "border_horizontal"                             : 12,
            "border_inner"                                  : 12,
            "border_left"                                   : 12,
            "border_outer"                                  : 12,
            "border_right"                                  : 12,
            "border_style"                                  : 12,
            "border_top"                                    : 12,
            "border_vertical"                               : 12,
            "boy"                                           : 1,
            "branding_watermark"                            : 13,
            "breakfast_dining"                              : 11,
            "brightness_1"                                  : 19,
            "brightness_2"                                  : 12,
            "brightness_3"                                  : 16,
            "brightness_4"                                  : 16,
            "brightness_5"                                  : 12,
            "brightness_6"                                  : 12,
            "brightness_7"                                  : 13,
            "brightness_auto"                               : 12,
            "brightness_high"                               : 13,
            "brightness_low"                                : 12,
            "brightness_medium"                             : 12,
            "broadcast_on_home"                             : 1,
            "broadcast_on_personal"                         : 1,
            "broken_image"                                  : 11,
            "browse_gallery"                                : 1,
            "browser_not_supported"                         : 12,
            "browser_updated"                               : 2,
            "brunch_dining"                                 : 11,
            "brush"                                         : 13,
            "bubble_chart"                                  : 12,
            "bug_report"                                    : 12,
            "build"                                         : 12,
            "build_circle"                                  : 14,
            "bungalow"                                      : 4,
            "burst_mode"                                    : 12,
            "bus_alert"                                     : 15,
            "business"                                      : 12,
            "business_center"                               : 15,
            "cabin"                                         : 4,
            "cable"                                         : 10,
            "cached"                                        : 13,
            "cake"                                          : 13,
            "calculate"                                     : 11,
            "calendar_month"                                : 1,
            "calendar_today"                                : 12,
            "calendar_view_day"                             : 15,
            "calendar_view_month"                           : 10,
            "calendar_view_week"                            : 10,
            "call"                                          : 17,
            "call_end"                                      : 16,
            "call_made"                                     : 13,
            "call_merge"                                    : 13,
            "call_missed"                                   : 13,
            "call_missed_outgoing"                          : 15,
            "call_received"                                 : 13,
            "call_split"                                    : 13,
            "call_to_action"                                : 11,
            "camera"                                        : 12,
            "camera_alt"                                    : 12,
            "camera_enhance"                                : 12,
            "camera_front"                                  : 12,
            "camera_indoor"                                 : 9,
            "camera_outdoor"                                : 9,
            "camera_rear"                                   : 13,
            "camera_roll"                                   : 12,
            "cameraswitch"                                  : 10,
            "campaign"                                      : 12,
            "cancel"                                        : 16,
            "cancel_presentation"                           : 14,
            "cancel_schedule_send"                          : 12,
            "candlestick_chart"                             : 2,
            "car_crash"                                     : 1,
            "car_rental"                                    : 10,
            "car_repair"                                    : 10,
            "card_giftcard"                                 : 14,
            "card_membership"                               : 14,
            "card_travel"                                   : 13,
            "carpenter"                                     : 6,
            "cases"                                         : 11,
            "casino"                                        : 13,
            "cast"                                          : 18,
            "cast_connected"                                : 13,
            "cast_for_education"                            : 14,
            "castle"                                        : 2,
            "catching_pokemon"                              : 4,
            "category"                                      : 12,
            "celebration"                                   : 11,
            "cell_tower"                                    : 1,
            "cell_wifi"                                     : 14,
            "center_focus_strong"                           : 12,
            "center_focus_weak"                             : 12,
            "chair"                                         : 10,
            "chair_alt"                                     : 9,
            "chalet"                                        : 4,
            "change_circle"                                 : 8,
            "change_history"                                : 11,
            "charging_station"                              : 8,
            "chat"                                          : 19,
            "chat_bubble"                                   : 15,
            "chat_bubble_outline"                           : 18,
            "check"                                         : 18,
            "check_box"                                     : 16,
            "check_box_outline_blank"                       : 16,
            "check_circle"                                  : 19,
            "check_circle_outline"                          : 12,
            "checklist"                                     : 3,
            "checklist_rtl"                                 : 3,
            "checkroom"                                     : 8,
            "chevron_left"                                  : 16,
            "chevron_right"                                 : 16,
            "child_care"                                    : 12,
            "child_friendly"                                : 12,
            "chrome_reader_mode"                            : 12,
            "church"                                        : 2,
            "circle"                                        : 11,
            "circle_notifications"                          : 11,
            "class"                                         : 11,
            "clean_hands"                                   : 8,
            "cleaning_services"                             : 12,
            "clear"                                         : 12,
            "clear_all"                                     : 12,
            "close"                                         : 19,
            "close_fullscreen"                              : 7,
            "closed_caption"                                : 12,
            "closed_caption_disabled"                       : 8,
            "closed_caption_off"                            : 11,
            "cloud"                                         : 12,
            "cloud_circle"                                  : 12,
            "cloud_done"                                    : 12,
            "cloud_download"                                : 12,
            "cloud_off"                                     : 16,
            "cloud_queue"                                   : 12,
            "cloud_sync"                                    : 1,
            "cloud_upload"                                  : 12,
            "co2"                                           : 3,
            "co_present"                                    : 1,
            "code"                                          : 11,
            "code_off"                                      : 4,
            "coffee"                                        : 9,
            "coffee_maker"                                  : 9,
            "collections"                                   : 12,
            "collections_bookmark"                          : 12,
            "color_lens"                                    : 16,
            "colorize"                                      : 12,
            "comment"                                       : 19,
            "comment_bank"                                  : 15,
            "comments_disabled"                             : 3,
            "commit"                                        : 1,
            "commute"                                       : 12,
            "compare"                                       : 12,
            "compare_arrows"                                : 14,
            "compass_calibration"                           : 12,
            "compost"                                       : 3,
            "compress"                                      : 10,
            "computer"                                      : 12,
            "confirmation_number"                           : 15,
            "connect_without_contact"                       : 7,
            "connected_tv"                                  : 11,
            "connecting_airports"                           : 2,
            "construction"                                  : 11,
            "contact_emergency"                             : 1,
            "contact_mail"                                  : 13,
            "contact_page"                                  : 6,
            "contact_phone"                                 : 13,
            "contact_support"                               : 13,
            "contactless"                                   : 11,
            "contacts"                                      : 11,
            "content_copy"                                  : 17,
            "content_cut"                                   : 17,
            "content_paste"                                 : 14,
            "content_paste_go"                              : 2,
            "content_paste_off"                             : 4,
            "content_paste_search"                          : 2,
            "contrast"                                      : 1,
            "control_camera"                                : 12,
            "control_point"                                 : 13,
            "control_point_duplicate"                       : 12,
            "cookie"                                        : 2,
            "copy_all"                                      : 8,
            "copyright"                                     : 17,
            "coronavirus"                                   : 7,
            "corporate_fare"                                : 7,
            "cottage"                                       : 4,
            "countertops"                                   : 6,
            "create"                                        : 16,
            "create_new_folder"                             : 11,
            "credit_card"                                   : 12,
            "credit_card_off"                               : 4,
            "credit_score"                                  : 10,
            "crib"                                          : 4,
            "crisis_alert"                                  : 1,
            "crop"                                          : 12,
            "crop_16_9"                                     : 13,
            "crop_3_2"                                      : 13,
            "crop_5_4"                                      : 13,
            "crop_7_5"                                      : 13,
            "crop_din"                                      : 12,
            "crop_free"                                     : 12,
            "crop_landscape"                                : 12,
            "crop_original"                                 : 13,
            "crop_portrait"                                 : 12,
            "crop_rotate"                                   : 12,
            "crop_square"                                   : 12,
            "cruelty_free"                                  : 3,
            "css"                                           : 1,
            "currency_bitcoin"                              : 1,
            "currency_exchange"                             : 1,
            "currency_franc"                                : 1,
            "currency_lira"                                 : 1,
            "currency_pound"                                : 1,
            "currency_ruble"                                : 1,
            "currency_rupee"                                : 1,
            "currency_yen"                                  : 1,
            "currency_yuan"                                 : 1,
            "curtains"                                      : 1,
            "curtains_closed"                               : 1,
            "cyclone"                                       : 1,
            "dangerous"                                     : 12,
            "dark_mode"                                     : 4,
            "dashboard"                                     : 13,
            "dashboard_customize"                           : 11,
            "data_array"                                    : 2,
            "data_exploration"                              : 3,
            "data_object"                                   : 2,
            "data_saver_off"                                : 10,
            "data_saver_on"                                 : 10,
            "data_thresholding"                             : 1,
            "data_usage"                                    : 12,
            "dataset"                                       : 1,
            "dataset_linked"                                : 1,
            "date_range"                                    : 12,
            "deblur"                                        : 1,
            "deck"                                          : 11,
            "dehaze"                                        : 12,
            "delete"                                        : 17,
            "delete_forever"                                : 15,
            "delete_outline"                                : 11,
            "delete_sweep"                                  : 12,
            "delivery_dining"                               : 15,
            "density_large"                                 : 1,
            "density_medium"                                : 1,
            "density_small"                                 : 1,
            "departure_board"                               : 11,
            "description"                                   : 12,
            "deselect"                                      : 1,
            "design_services"                               : 12,
            "desk"                                          : 1,
            "desktop_access_disabled"                       : 11,
            "desktop_mac"                                   : 17,
            "desktop_windows"                               : 13,
            "details"                                       : 16,
            "developer_board"                               : 13,
            "developer_board_off"                           : 4,
            "developer_mode"                                : 12,
            "device_hub"                                    : 12,
            "device_thermostat"                             : 11,
            "device_unknown"                                : 12,
            "devices"                                       : 17,
            "devices_fold"                                  : 1,
            "devices_other"                                 : 12,
            "dialer_sip"                                    : 12,
            "dialpad"                                       : 12,
            "diamond"                                       : 2,
            "difference"                                    : 1,
            "dining"                                        : 9,
            "dinner_dining"                                 : 10,
            "directions"                                    : 14,
            "directions_bike"                               : 13,
            "directions_boat"                               : 17,
            "directions_boat_filled"                        : 16,
            "directions_bus"                                : 12,
            "directions_bus_filled"                         : 10,
            "directions_car"                                : 18,
            "directions_car_filled"                         : 10,
            "directions_off"                                : 14,
            "directions_railway"                            : 13,
            "directions_railway_filled"                     : 10,
            "directions_run"                                : 13,
            "directions_subway"                             : 12,
            "directions_subway_filled"                      : 10,
            "directions_transit"                            : 12,
            "directions_transit_filled"                     : 10,
            "directions_walk"                               : 13,
            "dirty_lens"                                    : 15,
            "disabled_by_default"                           : 6,
            "disabled_visible"                              : 3,
            "disc_full"                                     : 12,
            "discount"                                      : 1,
            "display_settings"                              : 1,
            "diversity_1"                                   : 1,
            "diversity_2"                                   : 1,
            "diversity_3"                                   : 1,
            "dns"                                           : 12,
            "do_disturb"                                    : 10,
            "do_disturb_alt"                                : 11,
            "do_disturb_off"                                : 10,
            "do_disturb_on"                                 : 10,
            "do_not_disturb"                                : 11,
            "do_not_disturb_alt"                            : 12,
            "do_not_disturb_off"                            : 11,
            "do_not_disturb_on"                             : 11,
            "do_not_disturb_on_total_silence"               : 15,
            "do_not_step"                                   : 8,
            "do_not_touch"                                  : 8,
            "dock"                                          : 12,
            "document_scanner"                              : 3,
            "domain"                                        : 16,
            "domain_add"                                    : 1,
            "domain_disabled"                               : 12,
            "domain_verification"                           : 11,
            "done"                                          : 19,
            "done_all"                                      : 12,
            "done_outline"                                  : 12,
            "donut_large"                                   : 13,
            "donut_small"                                   : 12,
            "door_back"                                     : 10,
            "door_front"                                    : 10,
            "door_sliding"                                  : 10,
            "doorbell"                                      : 10,
            "double_arrow"                                  : 11,
            "downhill_skiing"                               : 4,
            "download"                                      : 10,
            "download_done"                                 : 10,
            "download_for_offline"                          : 9,
            "downloading"                                   : 9,
            "drafts"                                        : 17,
            "drag_handle"                                   : 14,
            "drag_indicator"                                : 15,
            "draw"                                          : 6,
            "drive_eta"                                     : 12,
            "drive_file_move"                               : 19,
            "drive_file_move_rtl"                           : 3,
            "drive_file_rename_outline"                     : 12,
            "drive_folder_upload"                           : 11,
            "dry"                                           : 8,
            "dry_cleaning"                                  : 10,
            "duo"                                           : 12,
            "dvr"                                           : 13,
            "dynamic_feed"                                  : 15,
            "dynamic_form"                                  : 7,
            "e_mobiledata"                                  : 9,
            "earbuds"                                       : 9,
            "earbuds_battery"                               : 9,
            "east"                                          : 7,
            "edgesensor_high"                               : 10,
            "edgesensor_low"                                : 10,
            "edit"                                          : 12,
            "edit_attributes"                               : 12,
            "edit_calendar"                                 : 5,
            "edit_location"                                 : 16,
            "edit_location_alt"                             : 8,
            "edit_note"                                     : 5,
            "edit_notifications"                            : 4,
            "edit_off"                                      : 15,
            "edit_road"                                     : 11,
            "egg"                                           : 2,
            "egg_alt"                                       : 2,
            "eject"                                         : 11,
            "elderly"                                       : 7,
            "elderly_woman"                                 : 1,
            "electric_bike"                                 : 14,
            "electric_bolt"                                 : 1,
            "electric_car"                                  : 14,
            "electric_meter"                                : 1,
            "electric_moped"                                : 14,
            "electric_rickshaw"                             : 15,
            "electric_scooter"                              : 14,
            "electrical_services"                           : 12,
            "elevator"                                      : 8,
            "email"                                         : 18,
            "emergency"                                     : 5,
            "emergency_recording"                           : 1,
            "emergency_share"                               : 1,
            "emoji_emotions"                                : 11,
            "emoji_events"                                  : 13,
            "emoji_food_beverage"                           : 11,
            "emoji_nature"                                  : 11,
            "emoji_objects"                                 : 11,
            "emoji_people"                                  : 11,
            "emoji_symbols"                                 : 11,
            "emoji_transportation"                          : 11,
            "energy_savings_leaf"                           : 1,
            "engineering"                                   : 11,
            "enhanced_encryption"                           : 19,
            "equalizer"                                     : 12,
            "error"                                         : 20,
            "error_outline"                                 : 16,
            "escalator"                                     : 8,
            "escalator_warning"                             : 8,
            "euro"                                          : 12,
            "euro_symbol"                                   : 13,
            "ev_station"                                    : 11,
            "event"                                         : 21,
            "event_available"                               : 17,
            "event_busy"                                    : 20,
            "event_note"                                    : 14,
            "event_repeat"                                  : 1,
            "event_seat"                                    : 19,
            "exit_to_app"                                   : 13,
            "expand"                                        : 11,
            "expand_circle_down"                            : 2,
            "expand_less"                                   : 12,
            "expand_more"                                   : 14,
            "explicit"                                      : 12,
            "explore"                                       : 12,
            "explore_off"                                   : 12,
            "exposure"                                      : 12,
            "exposure_neg_1"                                : 13,
            "exposure_neg_2"                                : 13,
            "exposure_plus_1"                               : 12,
            "exposure_plus_2"                               : 12,
            "exposure_zero"                                 : 12,
            "extension"                                     : 12,
            "extension_off"                                 : 4,
            "face"                                          : 15,
            "face_2"                                        : 1,
            "face_3"                                        : 1,
            "face_4"                                        : 1,
            "face_5"                                        : 1,
            "face_6"                                        : 1,
            "face_retouching_natural"                       : 16,
            "face_retouching_off"                           : 15,
            "fact_check"                                    : 14,
            "factory"                                       : 1,
            "family_restroom"                               : 9,
            "fast_forward"                                  : 18,
            "fast_rewind"                                   : 12,
            "fastfood"                                      : 12,
            "favorite"                                      : 17,
            "favorite_border"                               : 12,
            "fax"                                           : 2,
            "featured_play_list"                            : 12,
            "featured_video"                                : 12,
            "feed"                                          : 10,
            "feedback"                                      : 12,
            "female"                                        : 3,
            "fence"                                         : 6,
            "festival"                                      : 10,
            "fiber_dvr"                                     : 13,
            "fiber_manual_record"                           : 16,
            "fiber_new"                                     : 13,
            "fiber_pin"                                     : 12,
            "fiber_smart_record"                            : 12,
            "file_copy"                                     : 12,
            "file_download"                                 : 11,
            "file_download_done"                            : 11,
            "file_download_off"                             : 4,
            "file_open"                                     : 1,
            "file_present"                                  : 10,
            "file_upload"                                   : 11,
            "filter"                                        : 12,
            "filter_1"                                      : 12,
            "filter_2"                                      : 12,
            "filter_3"                                      : 12,
            "filter_4"                                      : 12,
            "filter_5"                                      : 12,
            "filter_6"                                      : 12,
            "filter_7"                                      : 12,
            "filter_8"                                      : 12,
            "filter_9"                                      : 12,
            "filter_9_plus"                                 : 13,
            "filter_alt"                                    : 11,
            "filter_alt_off"                                : 1,
            "filter_b_and_w"                                : 13,
            "filter_center_focus"                           : 12,
            "filter_drama"                                  : 12,
            "filter_frames"                                 : 13,
            "filter_hdr"                                    : 13,
            "filter_list"                                   : 13,
            "filter_list_off"                               : 1,
            "filter_none"                                   : 13,
            "filter_tilt_shift"                             : 14,
            "filter_vintage"                                : 13,
            "find_in_page"                                  : 12,
            "find_replace"                                  : 12,
            "fingerprint"                                   : 12,
            "fire_extinguisher"                             : 7,
            "fire_hydrant_alt"                              : 1,
            "fire_truck"                                    : 1,
            "fireplace"                                     : 11,
            "first_page"                                    : 11,
            "fit_screen"                                    : 15,
            "fitbit"                                        : 2,
            "fitness_center"                                : 12,
            "flag"                                          : 18,
            "flag_circle"                                   : 1,
            "flaky"                                         : 13,
            "flare"                                         : 12,
            "flash_auto"                                    : 12,
            "flash_off"                                     : 12,
            "flash_on"                                      : 12,
            "flashlight_off"                                : 10,
            "flashlight_on"                                 : 10,
            "flatware"                                      : 9,
            "flight"                                        : 18,
            "flight_class"                                  : 2,
            "flight_land"                                   : 13,
            "flight_takeoff"                                : 13,
            "flip"                                          : 12,
            "flip_camera_android"                           : 12,
            "flip_camera_ios"                               : 12,
            "flip_to_back"                                  : 12,
            "flip_to_front"                                 : 12,
            "flood"                                         : 1,
            "fluorescent"                                   : 1,
            "flutter_dash"                                  : 5,
            "fmd_bad"                                       : 15,
            "fmd_good"                                      : 15,
            "folder"                                        : 16,
            "folder_copy"                                   : 1,
            "folder_delete"                                 : 1,
            "folder_off"                                    : 1,
            "folder_open"                                   : 13,
            "folder_shared"                                 : 16,
            "folder_special"                                : 11,
            "folder_zip"                                    : 1,
            "follow_the_signs"                              : 7,
            "font_download"                                 : 11,
            "font_download_off"                             : 4,
            "food_bank"                                     : 7,
            "forest"                                        : 2,
            "fork_left"                                     : 1,
            "fork_right"                                    : 1,
            "format_align_center"                           : 12,
            "format_align_justify"                          : 12,
            "format_align_left"                             : 13,
            "format_align_right"                            : 13,
            "format_bold"                                   : 12,
            "format_clear"                                  : 12,
            "format_color_fill"                             : 14,
            "format_color_reset"                            : 11,
            "format_color_text"                             : 17,
            "format_indent_decrease"                        : 13,
            "format_indent_increase"                        : 13,
            "format_italic"                                 : 12,
            "format_line_spacing"                           : 12,
            "format_list_bulleted"                          : 13,
            "format_list_numbered"                          : 12,
            "format_list_numbered_rtl"                      : 12,
            "format_overline"                               : 1,
            "format_paint"                                  : 12,
            "format_quote"                                  : 12,
            "format_shapes"                                 : 12,
            "format_size"                                   : 12,
            "format_strikethrough"                          : 12,
            "format_textdirection_l_to_r"                   : 13,
            "format_textdirection_r_to_l"                   : 13,
            "format_underlined"                             : 13,
            "fort"                                          : 2,
            "forum"                                         : 19,
            "forward"                                       : 17,
            "forward_10"                                    : 13,
            "forward_30"                                    : 13,
            "forward_5"                                     : 13,
            "forward_to_inbox"                              : 9,
            "foundation"                                    : 6,
            "free_breakfast"                                : 11,
            "free_cancellation"                             : 5,
            "front_hand"                                    : 3,
            "fullscreen"                                    : 12,
            "fullscreen_exit"                               : 12,
            "functions"                                     : 12,
            "g_mobiledata"                                  : 9,
            "g_translate"                                   : 15,
            "gamepad"                                       : 12,
            "games"                                         : 12,
            "garage"                                        : 10,
            "gas_meter"                                     : 1,
            "gavel"                                         : 14,
            "generating_tokens"                             : 5,
            "gesture"                                       : 12,
            "get_app"                                       : 12,
            "gif"                                           : 14,
            "gif_box"                                       : 3,
            "girl"                                          : 1,
            "gite"                                          : 4,
            "golf_course"                                   : 11,
            "gpp_bad"                                       : 10,
            "gpp_good"                                      : 9,
            "gpp_maybe"                                     : 10,
            "gps_fixed"                                     : 12,
            "gps_not_fixed"                                 : 12,
            "gps_off"                                       : 12,
            "grade"                                         : 16,
            "gradient"                                      : 12,
            "grading"                                       : 12,
            "grain"                                         : 12,
            "graphic_eq"                                    : 13,
            "grass"                                         : 7,
            "grid_3x3"                                      : 10,
            "grid_4x4"                                      : 10,
            "grid_goldenratio"                              : 10,
            "grid_off"                                      : 12,
            "grid_on"                                       : 12,
            "grid_view"                                     : 12,
            "group"                                         : 19,
            "group_add"                                     : 18,
            "group_off"                                     : 5,
            "group_remove"                                  : 3,
            "group_work"                                    : 12,
            "groups"                                        : 6,
            "groups_2"                                      : 1,
            "groups_3"                                      : 1,
            "h_mobiledata"                                  : 9,
            "h_plus_mobiledata"                             : 9,
            "hail"                                          : 11,
            "handshake"                                     : 1,
            "handyman"                                      : 12,
            "hardware"                                      : 10,
            "hd"                                            : 12,
            "hdr_auto"                                      : 10,
            "hdr_auto_select"                               : 10,
            "hdr_enhanced_select"                           : 11,
            "hdr_off"                                       : 11,
            "hdr_off_select"                                : 10,
            "hdr_on"                                        : 11,
            "hdr_on_select"                                 : 10,
            "hdr_plus"                                      : 10,
            "hdr_strong"                                    : 12,
            "hdr_weak"                                      : 12,
            "headphones"                                    : 9,
            "headphones_battery"                            : 9,
            "headset"                                       : 12,
            "headset_mic"                                   : 12,
            "headset_off"                                   : 12,
            "healing"                                       : 12,
            "health_and_safety"                             : 7,
            "hearing"                                       : 12,
            "hearing_disabled"                              : 14,
            "heart_broken"                                  : 2,
            "heat_pump"                                     : 1,
            "height"                                        : 11,
            "help"                                          : 13,
            "help_center"                                   : 9,
            "help_outline"                                  : 12,
            "hevc"                                          : 10,
            "hexagon"                                       : 1,
            "hide_image"                                    : 10,
            "hide_source"                                   : 9,
            "high_quality"                                  : 12,
            "highlight"                                     : 14,
            "highlight_alt"                                 : 12,
            "highlight_off"                                 : 17,
            "hiking"                                        : 4,
            "history"                                       : 12,
            "history_edu"                                   : 11,
            "history_toggle_off"                            : 9,
            "hive"                                          : 2,
            "hls"                                           : 1,
            "hls_off"                                       : 1,
            "holiday_village"                               : 4,
            "home"                                          : 16,
            "home_max"                                      : 10,
            "home_mini"                                     : 10,
            "home_repair_service"                           : 12,
            "home_work"                                     : 13,
            "horizontal_distribute"                         : 6,
            "horizontal_rule"                               : 13,
            "horizontal_split"                              : 15,
            "hot_tub"                                       : 12,
            "hotel"                                         : 19,
            "hotel_class"                                   : 6,
            "hourglass_bottom"                              : 11,
            "hourglass_disabled"                            : 12,
            "hourglass_empty"                               : 15,
            "hourglass_full"                                : 15,
            "hourglass_top"                                 : 11,
            "house"                                         : 11,
            "house_siding"                                  : 6,
            "houseboat"                                     : 4,
            "how_to_reg"                                    : 14,
            "how_to_vote"                                   : 15,
            "html"                                          : 1,
            "http"                                          : 11,
            "https"                                         : 16,
            "hub"                                           : 2,
            "hvac"                                          : 12,
            "ice_skating"                                   : 4,
            "icecream"                                      : 11,
            "image"                                         : 16,
            "image_aspect_ratio"                            : 12,
            "image_not_supported"                           : 13,
            "image_search"                                  : 12,
            "imagesearch_roller"                            : 11,
            "import_contacts"                               : 14,
            "import_export"                                 : 12,
            "important_devices"                             : 11,
            "inbox"                                         : 18,
            "incomplete_circle"                             : 3,
            "indeterminate_check_box"                       : 18,
            "info"                                          : 21,
            "input"                                         : 13,
            "insert_chart"                                  : 12,
            "insert_chart_outlined"                         : 12,
            "insert_comment"                                : 13,
            "insert_drive_file"                             : 17,
            "insert_emoticon"                               : 15,
            "insert_invitation"                             : 12,
            "insert_link"                                   : 12,
            "insert_page_break"                             : 2,
            "insert_photo"                                  : 12,
            "insights"                                      : 12,
            "install_desktop"                               : 1,
            "install_mobile"                                : 1,
            "integration_instructions"                      : 11,
            "interests"                                     : 2,
            "interpreter_mode"                              : 2,
            "inventory"                                     : 13,
            "inventory_2"                                   : 9,
            "invert_colors"                                 : 13,
            "invert_colors_off"                             : 12,
            "ios_share"                                     : 13,
            "iron"                                          : 4,
            "iso"                                           : 11,
            "javascript"                                    : 1,
            "join_full"                                     : 1,
            "join_inner"                                    : 1,
            "join_left"                                     : 1,
            "join_right"                                    : 1,
            "kayaking"                                      : 4,
            "kebab_dining"                                  : 2,
            "key"                                           : 2,
            "key_off"                                       : 1,
            "keyboard"                                      : 13,
            "keyboard_alt"                                  : 15,
            "keyboard_arrow_down"                           : 18,
            "keyboard_arrow_left"                           : 17,
            "keyboard_arrow_right"                          : 17,
            "keyboard_arrow_up"                             : 19,
            "keyboard_backspace"                            : 13,
            "keyboard_capslock"                             : 13,
            "keyboard_command_key"                          : 1,
            "keyboard_control_key"                          : 1,
            "keyboard_double_arrow_down"                    : 2,
            "keyboard_double_arrow_left"                    : 2,
            "keyboard_double_arrow_right"                   : 2,
            "keyboard_double_arrow_up"                      : 2,
            "keyboard_hide"                                 : 13,
            "keyboard_option_key"                           : 1,
            "keyboard_return"                               : 13,
            "keyboard_tab"                                  : 13,
            "keyboard_voice"                                : 17,
            "king_bed"                                      : 12,
            "kitchen"                                       : 12,
            "kitesurfing"                                   : 4,
            "label"                                         : 17,
            "label_important"                               : 20,
            "label_off"                                     : 13,
            "lan"                                           : 1,
            "landscape"                                     : 12,
            "landslide"                                     : 1,
            "language"                                      : 12,
            "laptop"                                        : 13,
            "laptop_chromebook"                             : 12,
            "laptop_mac"                                    : 12,
            "laptop_windows"                                : 12,
            "last_page"                                     : 13,
            "launch"                                        : 17,
            "layers"                                        : 12,
            "layers_clear"                                  : 12,
            "leaderboard"                                   : 6,
            "leak_add"                                      : 12,
            "leak_remove"                                   : 12,
            "legend_toggle"                                 : 8,
            "lens"                                          : 12,
            "lens_blur"                                     : 10,
            "library_add"                                   : 13,
            "library_add_check"                             : 17,
            "library_books"                                 : 14,
            "library_music"                                 : 13,
            "light"                                         : 9,
            "light_mode"                                    : 4,
            "lightbulb"                                     : 18,
            "lightbulb_circle"                              : 1,
            "line_axis"                                     : 2,
            "line_style"                                    : 14,
            "line_weight"                                   : 14,
            "linear_scale"                                  : 17,
            "link"                                          : 21,
            "link_off"                                      : 11,
            "linked_camera"                                 : 15,
            "liquor"                                        : 10,
            "list"                                          : 18,
            "list_alt"                                      : 13,
            "live_help"                                     : 15,
            "live_tv"                                       : 11,
            "living"                                        : 9,
            "local_activity"                                : 19,
            "local_airport"                                 : 14,
            "local_atm"                                     : 12,
            "local_bar"                                     : 12,
            "local_cafe"                                    : 11,
            "local_car_wash"                                : 12,
            "local_convenience_store"                       : 16,
            "local_dining"                                  : 21,
            "local_drink"                                   : 12,
            "local_fire_department"                         : 15,
            "local_florist"                                 : 12,
            "local_gas_station"                             : 13,
            "local_grocery_store"                           : 12,
            "local_hospital"                                : 12,
            "local_hotel"                                   : 13,
            "local_laundry_service"                         : 16,
            "local_library"                                 : 12,
            "local_mall"                                    : 12,
            "local_movies"                                  : 12,
            "local_offer"                                   : 20,
            "local_parking"                                 : 12,
            "local_pharmacy"                                : 12,
            "local_phone"                                   : 17,
            "local_pizza"                                   : 12,
            "local_play"                                    : 12,
            "local_police"                                  : 13,
            "local_post_office"                             : 12,
            "local_printshop"                               : 17,
            "local_see"                                     : 16,
            "local_shipping"                                : 12,
            "local_taxi"                                    : 12,
            "location_city"                                 : 12,
            "location_disabled"                             : 12,
            "location_off"                                  : 11,
            "location_on"                                   : 15,
            "location_searching"                            : 12,
            "lock"                                          : 18,
            "lock_clock"                                    : 11,
            "lock_open"                                     : 16,
            "lock_person"                                   : 1,
            "lock_reset"                                    : 1,
            "login"                                         : 12,
            "logo_dev"                                      : 2,
            "logout"                                        : 12,
            "looks"                                         : 13,
            "looks_3"                                       : 12,
            "looks_4"                                       : 12,
            "looks_5"                                       : 12,
            "looks_6"                                       : 13,
            "looks_one"                                     : 12,
            "looks_two"                                     : 12,
            "loop"                                          : 12,
            "loupe"                                         : 12,
            "low_priority"                                  : 18,
            "loyalty"                                       : 12,
            "lte_mobiledata"                                : 9,
            "lte_plus_mobiledata"                           : 9,
            "luggage"                                       : 7,
            "lunch_dining"                                  : 11,
            "lyrics"                                        : 3,
            "macro_off"                                     : 1,
            "mail"                                          : 16,
            "mail_lock"                                     : 1,
            "mail_outline"                                  : 12,
            "male"                                          : 3,
            "man"                                           : 2,
            "man_2"                                         : 1,
            "man_3"                                         : 1,
            "man_4"                                         : 1,
            "manage_accounts"                               : 10,
            "manage_history"                                : 1,
            "manage_search"                                 : 10,
            "map"                                           : 16,
            "maps_home_work"                                : 10,
            "maps_ugc"                                      : 13,
            "margin"                                        : 11,
            "mark_as_unread"                                : 10,
            "mark_chat_read"                                : 8,
            "mark_chat_unread"                              : 8,
            "mark_email_read"                               : 8,
            "mark_email_unread"                             : 8,
            "mark_unread_chat_alt"                          : 1,
            "markunread"                                    : 12,
            "markunread_mailbox"                            : 12,
            "masks"                                         : 7,
            "maximize"                                      : 11,
            "media_bluetooth_off"                           : 10,
            "media_bluetooth_on"                            : 10,
            "mediation"                                     : 15,
            "medical_information"                           : 1,
            "medical_services"                              : 12,
            "medication"                                    : 10,
            "medication_liquid"                             : 2,
            "meeting_room"                                  : 17,
            "memory"                                        : 12,
            "menu"                                          : 13,
            "menu_book"                                     : 12,
            "menu_open"                                     : 13,
            "merge"                                         : 1,
            "merge_type"                                    : 13,
            "message"                                       : 13,
            "mic"                                           : 13,
            "mic_external_off"                              : 11,
            "mic_external_on"                               : 11,
            "mic_none"                                      : 12,
            "mic_off"                                       : 14,
            "microwave"                                     : 6,
            "military_tech"                                 : 11,
            "minimize"                                      : 11,
            "minor_crash"                                   : 1,
            "miscellaneous_services"                        : 12,
            "missed_video_call"                             : 13,
            "mms"                                           : 12,
            "mobile_friendly"                               : 12,
            "mobile_off"                                    : 12,
            "mobile_screen_share"                           : 12,
            "mobiledata_off"                                : 10,
            "mode"                                          : 10,
            "mode_comment"                                  : 12,
            "mode_edit"                                     : 11,
            "mode_edit_outline"                             : 10,
            "mode_fan_off"                                  : 1,
            "mode_night"                                    : 10,
            "mode_of_travel"                                : 2,
            "mode_standby"                                  : 9,
            "model_training"                                : 13,
            "monetization_on"                               : 12,
            "money"                                         : 11,
            "money_off"                                     : 12,
            "money_off_csred"                               : 11,
            "monitor"                                       : 11,
            "monitor_heart"                                 : 2,
            "monitor_weight"                                : 10,
            "monochrome_photos"                             : 11,
            "mood"                                          : 16,
            "mood_bad"                                      : 12,
            "moped"                                         : 14,
            "more"                                          : 13,
            "more_horiz"                                    : 13,
            "more_time"                                     : 11,
            "more_vert"                                     : 19,
            "mosque"                                        : 2,
            "motion_photos_auto"                            : 15,
            "motion_photos_off"                             : 14,
            "motion_photos_on"                              : 18,
            "motion_photos_pause"                           : 8,
            "motion_photos_paused"                          : 17,
            "mouse"                                         : 12,
            "move_down"                                     : 2,
            "move_to_inbox"                                 : 15,
            "move_up"                                       : 2,
            "movie"                                         : 12,
            "movie_creation"                                : 12,
            "movie_filter"                                  : 13,
            "moving"                                        : 4,
            "mp"                                            : 15,
            "multiline_chart"                               : 13,
            "multiple_stop"                                 : 7,
            "museum"                                        : 11,
            "music_note"                                    : 12,
            "music_off"                                     : 12,
            "music_video"                                   : 15,
            "my_location"                                   : 12,
            "nat"                                           : 11,
            "nature"                                        : 12,
            "nature_people"                                 : 12,
            "navigate_before"                               : 13,
            "navigate_next"                                 : 13,
            "navigation"                                    : 12,
            "near_me"                                       : 12,
            "near_me_disabled"                              : 6,
            "nearby_error"                                  : 10,
            "nearby_off"                                    : 10,
            "nest_cam_wired_stand"                          : 1,
            "network_cell"                                  : 16,
            "network_check"                                 : 12,
            "network_locked"                                : 17,
            "network_ping"                                  : 1,
            "network_wifi"                                  : 16,
            "network_wifi_1_bar"                            : 1,
            "network_wifi_2_bar"                            : 1,
            "network_wifi_3_bar"                            : 1,
            "new_label"                                     : 3,
            "new_releases"                                  : 13,
            "newspaper"                                     : 1,
            "next_plan"                                     : 16,
            "next_week"                                     : 14,
            "nfc"                                           : 12,
            "night_shelter"                                 : 6,
            "nightlife"                                     : 10,
            "nightlight"                                    : 10,
            "nightlight_round"                              : 10,
            "nights_stay"                                   : 12,
            "no_accounts"                                   : 10,
            "no_adult_content"                              : 1,
            "no_backpack"                                   : 6,
            "no_cell"                                       : 8,
            "no_crash"                                      : 1,
            "no_drinks"                                     : 8,
            "no_encryption"                                 : 17,
            "no_encryption_gmailerrorred"                   : 10,
            "no_flash"                                      : 8,
            "no_food"                                       : 8,
            "no_luggage"                                    : 7,
            "no_meals"                                      : 7,
            "no_meeting_room"                               : 11,
            "no_photography"                                : 8,
            "no_sim"                                        : 12,
            "no_stroller"                                   : 9,
            "no_transfer"                                   : 7,
            "noise_aware"                                   : 2,
            "noise_control_off"                             : 2,
            "nordic_walking"                                : 4,
            "north"                                         : 7,
            "north_east"                                    : 7,
            "north_west"                                    : 7,
            "not_accessible"                                : 13,
            "not_interested"                                : 12,
            "not_listed_location"                           : 18,
            "not_started"                                   : 13,
            "note"                                          : 12,
            "note_add"                                      : 13,
            "note_alt"                                      : 10,
            "notes"                                         : 12,
            "notification_add"                              : 5,
            "notification_important"                        : 12,
            "notifications"                                 : 18,
            "notifications_active"                          : 13,
            "notifications_none"                            : 12,
            "notifications_off"                             : 12,
            "notifications_paused"                          : 12,
            "numbers"                                       : 2,
            "offline_bolt"                                  : 18,
            "offline_pin"                                   : 18,
            "offline_share"                                 : 12,
            "oil_barrel"                                    : 1,
            "on_device_training"                            : 1,
            "ondemand_video"                                : 11,
            "online_prediction"                             : 12,
            "opacity"                                       : 15,
            "open_in_browser"                               : 12,
            "open_in_full"                                  : 7,
            "open_in_new"                                   : 21,
            "open_in_new_off"                               : 4,
            "open_with"                                     : 12,
            "other_houses"                                  : 4,
            "outbound"                                      : 8,
            "outbox"                                        : 10,
            "outdoor_grill"                                 : 11,
            "outlet"                                        : 7,
            "outlined_flag"                                 : 12,
            "output"                                        : 1,
            "padding"                                       : 11,
            "pages"                                         : 11,
            "pageview"                                      : 12,
            "paid"                                          : 9,
            "palette"                                       : 16,
            "pan_tool"                                      : 14,
            "pan_tool_alt"                                  : 1,
            "panorama"                                      : 17,
            "panorama_fish_eye"                             : 13,
            "panorama_horizontal"                           : 12,
            "panorama_horizontal_select"                    : 11,
            "panorama_photosphere"                          : 11,
            "panorama_photosphere_select"                   : 12,
            "panorama_vertical"                             : 13,
            "panorama_vertical_select"                      : 12,
            "panorama_wide_angle"                           : 14,
            "panorama_wide_angle_select"                    : 12,
            "paragliding"                                   : 4,
            "park"                                          : 10,
            "party_mode"                                    : 12,
            "password"                                      : 10,
            "pattern"                                       : 11,
            "pause"                                         : 16,
            "pause_circle"                                  : 10,
            "pause_circle_filled"                           : 15,
            "pause_circle_outline"                          : 19,
            "pause_presentation"                            : 12,
            "payment"                                       : 12,
            "payments"                                      : 13,
            "pedal_bike"                                    : 14,
            "pending"                                       : 17,
            "pending_actions"                               : 7,
            "pentagon"                                      : 1,
            "people"                                        : 23,
            "people_alt"                                    : 21,
            "people_outline"                                : 12,
            "percent"                                       : 1,
            "perm_camera_mic"                               : 12,
            "perm_contact_calendar"                         : 13,
            "perm_data_setting"                             : 12,
            "perm_device_information"                       : 13,
            "perm_identity"                                 : 12,
            "perm_media"                                    : 15,
            "perm_phone_msg"                                : 12,
            "perm_scan_wifi"                                : 12,
            "person"                                        : 17,
            "person_2"                                      : 1,
            "person_3"                                      : 1,
            "person_4"                                      : 1,
            "person_add"                                    : 16,
            "person_add_alt"                                : 11,
            "person_add_alt_1"                              : 13,
            "person_add_disabled"                           : 11,
            "person_off"                                    : 4,
            "person_outline"                                : 19,
            "person_pin"                                    : 13,
            "person_pin_circle"                             : 18,
            "person_remove"                                 : 12,
            "person_remove_alt_1"                           : 13,
            "person_search"                                 : 12,
            "personal_injury"                               : 3,
            "personal_video"                                : 13,
            "pest_control"                                  : 12,
            "pest_control_rodent"                           : 12,
            "pets"                                          : 12,
            "phishing"                                      : 2,
            "phone"                                         : 12,
            "phone_android"                                 : 12,
            "phone_bluetooth_speaker"                       : 12,
            "phone_callback"                                : 13,
            "phone_disabled"                                : 12,
            "phone_enabled"                                 : 16,
            "phone_forwarded"                               : 13,
            "phone_iphone"                                  : 12,
            "phone_locked"                                  : 19,
            "phone_missed"                                  : 13,
            "phone_paused"                                  : 13,
            "phonelink"                                     : 12,
            "phonelink_erase"                               : 12,
            "phonelink_lock"                                : 15,
            "phonelink_off"                                 : 12,
            "phonelink_ring"                                : 12,
            "phonelink_setup"                               : 13,
            "photo"                                         : 12,
            "photo_album"                                   : 14,
            "photo_camera"                                  : 18,
            "photo_camera_back"                             : 11,
            "photo_camera_front"                            : 11,
            "photo_filter"                                  : 12,
            "photo_library"                                 : 12,
            "photo_size_select_actual"                      : 12,
            "photo_size_select_large"                       : 12,
            "photo_size_select_small"                       : 12,
            "php"                                           : 1,
            "piano"                                         : 4,
            "piano_off"                                     : 4,
            "picture_as_pdf"                                : 12,
            "picture_in_picture"                            : 12,
            "picture_in_picture_alt"                        : 12,
            "pie_chart"                                     : 11,
            "pie_chart_outline"                             : 10,
            "pin"                                           : 10,
            "pin_drop"                                      : 18,
            "pin_end"                                       : 3,
            "pin_invoke"                                    : 3,
            "pinch"                                         : 1,
            "pivot_table_chart"                             : 11,
            "pix"                                           : 2,
            "place"                                         : 19,
            "plagiarism"                                    : 11,
            "play_arrow"                                    : 16,
            "play_circle"                                   : 9,
            "play_circle_filled"                            : 14,
            "play_circle_outline"                           : 19,
            "play_disabled"                                 : 10,
            "play_for_work"                                 : 12,
            "play_lesson"                                   : 10,
            "playlist_add"                                  : 16,
            "playlist_add_check"                            : 17,
            "playlist_add_check_circle"                     : 2,
            "playlist_add_circle"                           : 2,
            "playlist_play"                                 : 14,
            "playlist_remove"                               : 1,
            "plumbing"                                      : 12,
            "plus_one"                                      : 17,
            "podcasts"                                      : 9,
            "point_of_sale"                                 : 8,
            "policy"                                        : 12,
            "poll"                                          : 13,
            "polyline"                                      : 1,
            "polymer"                                       : 12,
            "pool"                                          : 12,
            "portable_wifi_off"                             : 12,
            "portrait"                                      : 12,
            "post_add"                                      : 11,
            "power"                                         : 12,
            "power_input"                                   : 12,
            "power_off"                                     : 12,
            "power_settings_new"                            : 12,
            "precision_manufacturing"                       : 10,
            "pregnant_woman"                                : 14,
            "present_to_all"                                : 11,
            "preview"                                       : 7,
            "price_change"                                  : 10,
            "price_check"                                   : 10,
            "print"                                         : 16,
            "print_disabled"                                : 12,
            "priority_high"                                 : 19,
            "privacy_tip"                                   : 12,
            "private_connectivity"                          : 5,
            "production_quantity_limits"                    : 7,
            "propane"                                       : 1,
            "propane_tank"                                  : 1,
            "psychology"                                    : 11,
            "psychology_alt"                                : 1,
            "public"                                        : 13,
            "public_off"                                    : 8,
            "publish"                                       : 12,
            "published_with_changes"                        : 6,
            "punch_clock"                                   : 2,
            "push_pin"                                      : 13,
            "qr_code"                                       : 12,
            "qr_code_2"                                     : 6,
            "qr_code_scanner"                               : 7,
            "query_builder"                                 : 13,
            "query_stats"                                   : 4,
            "question_answer"                               : 12,
            "question_mark"                                 : 1,
            "queue"                                         : 12,
            "queue_music"                                   : 18,
            "queue_play_next"                               : 14,
            "quickreply"                                    : 12,
            "quiz"                                          : 10,
            "r_mobiledata"                                  : 9,
            "radar"                                         : 10,
            "radio"                                         : 12,
            "radio_button_checked"                          : 13,
            "radio_button_unchecked"                        : 13,
            "railway_alert"                                 : 10,
            "ramen_dining"                                  : 10,
            "ramp_left"                                     : 1,
            "ramp_right"                                    : 1,
            "rate_review"                                   : 11,
            "raw_off"                                       : 10,
            "raw_on"                                        : 10,
            "read_more"                                     : 13,
            "real_estate_agent"                             : 3,
            "receipt"                                       : 12,
            "receipt_long"                                  : 12,
            "recent_actors"                                 : 12,
            "recommend"                                     : 14,
            "record_voice_over"                             : 12,
            "rectangle"                                     : 1,
            "recycling"                                     : 4,
            "redeem"                                        : 12,
            "redo"                                          : 13,
            "reduce_capacity"                               : 6,
            "refresh"                                       : 16,
            "remember_me"                                   : 10,
            "remove"                                        : 16,
            "remove_circle"                                 : 19,
            "remove_circle_outline"                         : 12,
            "remove_done"                                   : 10,
            "remove_from_queue"                             : 13,
            "remove_moderator"                              : 11,
            "remove_red_eye"                                : 12,
            "remove_road"                                   : 1,
            "remove_shopping_cart"                          : 12,
            "reorder"                                       : 16,
            "repartition"                                   : 1,
            "repeat"                                        : 12,
            "repeat_on"                                     : 12,
            "repeat_one"                                    : 12,
            "repeat_one_on"                                 : 12,
            "replay"                                        : 13,
            "replay_10"                                     : 14,
            "replay_30"                                     : 14,
            "replay_5"                                      : 14,
            "replay_circle_filled"                          : 12,
            "reply"                                         : 20,
            "reply_all"                                     : 17,
            "report"                                        : 18,
            "report_gmailerrorred"                          : 11,
            "report_off"                                    : 12,
            "report_problem"                                : 18,
            "request_page"                                  : 7,
            "request_quote"                                 : 7,
            "reset_tv"                                      : 10,
            "restart_alt"                                   : 10,
            "restaurant"                                    : 16,
            "restaurant_menu"                               : 12,
            "restore"                                       : 12,
            "restore_from_trash"                            : 12,
            "restore_page"                                  : 12,
            "reviews"                                       : 10,
            "rice_bowl"                                     : 6,
            "ring_volume"                                   : 13,
            "rocket"                                        : 1,
            "rocket_launch"                                 : 1,
            "roller_shades"                                 : 1,
            "roller_shades_closed"                          : 1,
            "roller_skating"                                : 1,
            "roofing"                                       : 6,
            "room"                                          : 19,
            "room_preferences"                              : 7,
            "room_service"                                  : 11,
            "rotate_90_degrees_ccw"                         : 12,
            "rotate_90_degrees_cw"                          : 2,
            "rotate_left"                                   : 13,
            "rotate_right"                                  : 13,
            "roundabout_left"                               : 1,
            "roundabout_right"                              : 1,
            "rounded_corner"                                : 15,
            "route"                                         : 2,
            "router"                                        : 13,
            "rowing"                                        : 14,
            "rss_feed"                                      : 12,
            "rsvp"                                          : 10,
            "rtt"                                           : 15,
            "rule"                                          : 8,
            "rule_folder"                                   : 7,
            "run_circle"                                    : 11,
            "running_with_errors"                           : 4,
            "rv_hookup"                                     : 12,
            "safety_check"                                  : 1,
            "safety_divider"                                : 7,
            "sailing"                                       : 4,
            "sanitizer"                                     : 6,
            "satellite"                                     : 12,
            "satellite_alt"                                 : 1,
            "save"                                          : 12,
            "save_alt"                                      : 12,
            "save_as"                                       : 2,
            "saved_search"                                  : 11,
            "savings"                                       : 5,
            "scale"                                         : 1,
            "scanner"                                       : 12,
            "scatter_plot"                                  : 12,
            "schedule"                                      : 17,
            "schedule_send"                                 : 14,
            "schema"                                        : 4,
            "school"                                        : 13,
            "science"                                       : 17,
            "score"                                         : 12,
            "scoreboard"                                    : 1,
            "screen_lock_landscape"                         : 16,
            "screen_lock_portrait"                          : 17,
            "screen_lock_rotation"                          : 16,
            "screen_rotation"                               : 12,
            "screen_rotation_alt"                           : 1,
            "screen_search_desktop"                         : 10,
            "screen_share"                                  : 12,
            "screenshot"                                    : 10,
            "screenshot_monitor"                            : 1,
            "scuba_diving"                                  : 1,
            "sd"                                            : 10,
            "sd_card"                                       : 12,
            "sd_card_alert"                                 : 11,
            "sd_storage"                                    : 12,
            "search"                                        : 17,
            "search_off"                                    : 12,
            "security"                                      : 12,
            "security_update"                               : 11,
            "security_update_good"                          : 10,
            "security_update_warning"                       : 10,
            "segment"                                       : 11,
            "select_all"                                    : 12,
            "self_improvement"                              : 11,
            "sell"                                          : 10,
            "send"                                          : 20,
            "send_and_archive"                              : 11,
            "send_time_extension"                           : 2,
            "send_to_mobile"                                : 11,
            "sensor_door"                                   : 8,
            "sensor_occupied"                               : 1,
            "sensor_window"                                 : 8,
            "sensors"                                       : 4,
            "sensors_off"                                   : 5,
            "sentiment_dissatisfied"                        : 11,
            "sentiment_neutral"                             : 11,
            "sentiment_satisfied"                           : 11,
            "sentiment_satisfied_alt"                       : 11,
            "sentiment_very_dissatisfied"                   : 11,
            "sentiment_very_satisfied"                      : 11,
            "set_meal"                                      : 6,
            "settings"                                      : 19,
            "settings_accessibility"                        : 10,
            "settings_applications"                         : 11,
            "settings_backup_restore"                       : 11,
            "settings_bluetooth"                            : 11,
            "settings_brightness"                           : 12,
            "settings_cell"                                 : 11,
            "settings_ethernet"                             : 11,
            "settings_input_antenna"                        : 11,
            "settings_input_component"                      : 11,
            "settings_input_composite"                      : 11,
            "settings_input_hdmi"                           : 11,
            "settings_input_svideo"                         : 11,
            "settings_overscan"                             : 11,
            "settings_phone"                                : 15,
            "settings_power"                                : 11,
            "settings_remote"                               : 11,
            "settings_suggest"                              : 20,
            "settings_system_daydream"                      : 12,
            "settings_voice"                                : 11,
            "severe_cold"                                   : 1,
            "shape_line"                                    : 1,
            "share"                                         : 18,
            "share_location"                                : 17,
            "shield"                                        : 11,
            "shield_moon"                                   : 2,
            "shop"                                          : 12,
            "shop_2"                                        : 9,
            "shop_two"                                      : 11,
            "shopping_bag"                                  : 9,
            "shopping_basket"                               : 12,
            "shopping_cart"                                 : 18,
            "shopping_cart_checkout"                        : 1,
            "short_text"                                    : 15,
            "shortcut"                                      : 10,
            "show_chart"                                    : 13,
            "shower"                                        : 9,
            "shuffle"                                       : 14,
            "shuffle_on"                                    : 12,
            "shutter_speed"                                 : 11,
            "sick"                                          : 6,
            "sign_language"                                 : 1,
            "signal_cellular_0_bar"                         : 15,
            "signal_cellular_4_bar"                         : 12,
            "signal_cellular_alt"                           : 12,
            "signal_cellular_alt_1_bar"                     : 1,
            "signal_cellular_alt_2_bar"                     : 1,
            "signal_cellular_connected_no_internet_0_bar"   : 13,
            "signal_cellular_connected_no_internet_4_bar"   : 13,
            "signal_cellular_no_sim"                        : 11,
            "signal_cellular_nodata"                        : 10,
            "signal_cellular_null"                          : 12,
            "signal_cellular_off"                           : 12,
            "signal_wifi_0_bar"                             : 15,
            "signal_wifi_4_bar"                             : 12,
            "signal_wifi_4_bar_lock"                        : 13,
            "signal_wifi_bad"                               : 10,
            "signal_wifi_connected_no_internet_4"           : 10,
            "signal_wifi_off"                               : 17,
            "signal_wifi_statusbar_4_bar"                   : 9,
            "signal_wifi_statusbar_connected_no_internet_4" : 11,
            "signal_wifi_statusbar_null"                    : 9,
            "signpost"                                      : 1,
            "sim_card"                                      : 12,
            "sim_card_alert"                                : 11,
            "sim_card_download"                             : 9,
            "single_bed"                                    : 11,
            "sip"                                           : 10,
            "skateboarding"                                 : 4,
            "skip_next"                                     : 16,
            "skip_previous"                                 : 16,
            "sledding"                                      : 5,
            "slideshow"                                     : 12,
            "slow_motion_video"                             : 11,
            "smart_button"                                  : 7,
            "smart_display"                                 : 9,
            "smart_screen"                                  : 9,
            "smart_toy"                                     : 9,
            "smartphone"                                    : 16,
            "smoke_free"                                    : 12,
            "smoking_rooms"                                 : 12,
            "sms"                                           : 12,
            "sms_failed"                                    : 13,
            "snippet_folder"                                : 7,
            "snooze"                                        : 12,
            "snowboarding"                                  : 4,
            "snowmobile"                                    : 4,
            "snowshoeing"                                   : 4,
            "soap"                                          : 8,
            "social_distance"                               : 7,
            "solar_power"                                   : 1,
            "sort"                                          : 13,
            "sort_by_alpha"                                 : 11,
            "sos"                                           : 1,
            "soup_kitchen"                                  : 2,
            "source"                                        : 7,
            "south"                                         : 7,
            "south_america"                                 : 2,
            "south_east"                                    : 7,
            "south_west"                                    : 7,
            "spa"                                           : 12,
            "space_bar"                                     : 11,
            "space_dashboard"                               : 3,
            "spatial_audio"                                 : 1,
            "spatial_audio_off"                             : 1,
            "spatial_tracking"                              : 1,
            "speaker"                                       : 16,
            "speaker_group"                                 : 12,
            "speaker_notes"                                 : 13,
            "speaker_notes_off"                             : 13,
            "speaker_phone"                                 : 15,
            "speed"                                         : 12,
            "spellcheck"                                    : 12,
            "splitscreen"                                   : 11,
            "spoke"                                         : 2,
            "sports"                                        : 11,
            "sports_bar"                                    : 7,
            "sports_baseball"                               : 11,
            "sports_basketball"                             : 11,
            "sports_cricket"                                : 11,
            "sports_esports"                                : 11,
            "sports_football"                               : 12,
            "sports_golf"                                   : 11,
            "sports_gymnastics"                             : 1,
            "sports_handball"                               : 11,
            "sports_hockey"                                 : 11,
            "sports_kabaddi"                                : 11,
            "sports_martial_arts"                           : 1,
            "sports_mma"                                    : 11,
            "sports_motorsports"                            : 11,
            "sports_rugby"                                  : 11,
            "sports_score"                                  : 10,
            "sports_soccer"                                 : 11,
            "sports_tennis"                                 : 11,
            "sports_volleyball"                             : 11,
            "square"                                        : 1,
            "square_foot"                                   : 11,
            "ssid_chart"                                    : 1,
            "stacked_bar_chart"                             : 12,
            "stacked_line_chart"                            : 6,
            "stadium"                                       : 1,
            "stairs"                                        : 8,
            "star"                                          : 22,
            "star_border"                                   : 19,
            "star_border_purple500"                         : 10,
            "star_half"                                     : 22,
            "star_outline"                                  : 11,
            "star_purple500"                                : 10,
            "star_rate"                                     : 12,
            "stars"                                         : 12,
            "start"                                         : 1,
            "stay_current_landscape"                        : 12,
            "stay_current_portrait"                         : 12,
            "stay_primary_landscape"                        : 12,
            "stay_primary_portrait"                         : 12,
            "sticky_note_2"                                 : 7,
            "stop"                                          : 12,
            "stop_circle"                                   : 15,
            "stop_screen_share"                             : 13,
            "storage"                                       : 13,
            "store"                                         : 11,
            "store_mall_directory"                          : 12,
            "storefront"                                    : 17,
            "storm"                                         : 10,
            "straight"                                      : 1,
            "straighten"                                    : 12,
            "stream"                                        : 11,
            "streetview"                                    : 12,
            "strikethrough_s"                               : 14,
            "stroller"                                      : 8,
            "style"                                         : 12,
            "subdirectory_arrow_left"                       : 11,
            "subdirectory_arrow_right"                      : 11,
            "subject"                                       : 13,
            "subscript"                                     : 13,
            "subscriptions"                                 : 11,
            "subtitles"                                     : 12,
            "subtitles_off"                                 : 11,
            "subway"                                        : 11,
            "summarize"                                     : 10,
            "superscript"                                   : 12,
            "supervised_user_circle"                        : 12,
            "supervisor_account"                            : 13,
            "support"                                       : 11,
            "support_agent"                                 : 12,
            "surfing"                                       : 4,
            "surround_sound"                                : 13,
            "swap_calls"                                    : 12,
            "swap_horiz"                                    : 12,
            "swap_horizontal_circle"                        : 12,
            "swap_vert"                                     : 12,
            "swap_vertical_circle"                          : 13,
            "swipe"                                         : 12,
            "swipe_down"                                    : 1,
            "swipe_down_alt"                                : 1,
            "swipe_left"                                    : 1,
            "swipe_left_alt"                                : 1,
            "swipe_right"                                   : 1,
            "swipe_right_alt"                               : 1,
            "swipe_up"                                      : 1,
            "swipe_up_alt"                                  : 1,
            "swipe_vertical"                                : 1,
            "switch_access_shortcut"                        : 3,
            "switch_access_shortcut_add"                    : 3,
            "switch_account"                                : 11,
            "switch_camera"                                 : 12,
            "switch_left"                                   : 8,
            "switch_right"                                  : 9,
            "switch_video"                                  : 12,
            "synagogue"                                     : 2,
            "sync"                                          : 17,
            "sync_alt"                                      : 12,
            "sync_disabled"                                 : 16,
            "sync_lock"                                     : 1,
            "sync_problem"                                  : 21,
            "system_security_update"                        : 10,
            "system_security_update_good"                   : 10,
            "system_security_update_warning"                : 10,
            "system_update"                                 : 12,
            "system_update_alt"                             : 13,
            "tab"                                           : 12,
            "tab_unselected"                                : 12,
            "table_bar"                                     : 2,
            "table_chart"                                   : 12,
            "table_restaurant"                              : 2,
            "table_rows"                                    : 17,
            "table_view"                                    : 8,
            "tablet"                                        : 12,
            "tablet_android"                                : 14,
            "tablet_mac"                                    : 12,
            "tag"                                           : 10,
            "tag_faces"                                     : 19,
            "takeout_dining"                                : 16,
            "tap_and_play"                                  : 12,
            "tapas"                                         : 6,
            "task"                                          : 10,
            "task_alt"                                      : 6,
            "taxi_alert"                                    : 11,
            "temple_buddhist"                               : 2,
            "temple_hindu"                                  : 3,
            "terminal"                                      : 1,
            "terrain"                                       : 12,
            "text_decrease"                                 : 1,
            "text_fields"                                   : 14,
            "text_format"                                   : 12,
            "text_increase"                                 : 1,
            "text_rotate_up"                                : 12,
            "text_rotate_vertical"                          : 12,
            "text_rotation_angledown"                       : 12,
            "text_rotation_angleup"                         : 12,
            "text_rotation_down"                            : 12,
            "text_rotation_none"                            : 12,
            "text_snippet"                                  : 8,
            "textsms"                                       : 12,
            "texture"                                       : 12,
            "theater_comedy"                                : 11,
            "theaters"                                      : 12,
            "thermostat"                                    : 11,
            "thermostat_auto"                               : 10,
            "thumb_down"                                    : 19,
            "thumb_down_alt"                                : 11,
            "thumb_down_off_alt"                            : 13,
            "thumb_up"                                      : 19,
            "thumb_up_alt"                                  : 11,
            "thumb_up_off_alt"                              : 13,
            "thumbs_up_down"                                : 12,
            "thunderstorm"                                  : 1,
            "time_to_leave"                                 : 12,
            "timelapse"                                     : 12,
            "timeline"                                      : 13,
            "timer"                                         : 13,
            "timer_10"                                      : 12,
            "timer_10_select"                               : 15,
            "timer_3"                                       : 12,
            "timer_3_select"                                : 15,
            "timer_off"                                     : 13,
            "tips_and_updates"                              : 3,
            "tire_repair"                                   : 1,
            "title"                                         : 11,
            "toc"                                           : 13,
            "today"                                         : 17,
            "toggle_off"                                    : 12,
            "toggle_on"                                     : 12,
            "token"                                         : 2,
            "toll"                                          : 12,
            "tonality"                                      : 12,
            "topic"                                         : 7,
            "tornado"                                       : 1,
            "touch_app"                                     : 13,
            "tour"                                          : 12,
            "toys"                                          : 14,
            "track_changes"                                 : 11,
            "traffic"                                       : 12,
            "train"                                         : 11,
            "tram"                                          : 11,
            "transcribe"                                    : 1,
            "transfer_within_a_station"                     : 12,
            "transform"                                     : 12,
            "transgender"                                   : 3,
            "transit_enterexit"                             : 12,
            "translate"                                     : 16,
            "travel_explore"                                : 8,
            "trending_down"                                 : 18,
            "trending_flat"                                 : 19,
            "trending_up"                                   : 19,
            "trip_origin"                                   : 12,
            "troubleshoot"                                  : 10,
            "try"                                           : 9,
            "tsunami"                                       : 1,
            "tty"                                           : 8,
            "tune"                                          : 12,
            "tungsten"                                      : 10,
            "turn_left"                                     : 1,
            "turn_right"                                    : 1,
            "turn_sharp_left"                               : 1,
            "turn_sharp_right"                              : 1,
            "turn_slight_left"                              : 1,
            "turn_slight_right"                             : 1,
            "turned_in"                                     : 11,
            "turned_in_not"                                 : 11,
            "tv"                                            : 16,
            "tv_off"                                        : 11,
            "two_wheeler"                                   : 14,
            "type_specimen"                                 : 1,
            "u_turn_left"                                   : 1,
            "u_turn_right"                                  : 1,
            "umbrella"                                      : 8,
            "unarchive"                                     : 13,
            "undo"                                          : 13,
            "unfold_less"                                   : 12,
            "unfold_less_double"                            : 1,
            "unfold_more"                                   : 12,
            "unfold_more_double"                            : 1,
            "unpublished"                                   : 7,
            "unsubscribe"                                   : 12,
            "upcoming"                                      : 9,
            "update"                                        : 13,
            "update_disabled"                               : 8,
            "upgrade"                                       : 12,
            "upload"                                        : 10,
            "upload_file"                                   : 10,
            "usb"                                           : 12,
            "usb_off"                                       : 4,
            "vaccines"                                      : 2,
            "vape_free"                                     : 1,
            "vaping_rooms"                                  : 1,
            "verified"                                      : 11,
            "verified_user"                                 : 18,
            "vertical_align_bottom"                         : 12,
            "vertical_align_center"                         : 12,
            "vertical_align_top"                            : 12,
            "vertical_distribute"                           : 6,
            "vertical_shades"                               : 1,
            "vertical_shades_closed"                        : 1,
            "vertical_split"                                : 15,
            "vibration"                                     : 12,
            "video_call"                                    : 11,
            "video_camera_back"                             : 10,
            "video_camera_front"                            : 10,
            "video_chat"                                    : 1,
            "video_file"                                    : 1,
            "video_label"                                   : 11,
            "video_library"                                 : 13,
            "video_settings"                                : 12,
            "video_stable"                                  : 10,
            "videocam"                                      : 16,
            "videocam_off"                                  : 12,
            "videogame_asset"                               : 11,
            "videogame_asset_off"                           : 4,
            "view_agenda"                                   : 14,
            "view_array"                                    : 13,
            "view_carousel"                                 : 13,
            "view_column"                                   : 13,
            "view_comfy"                                    : 14,
            "view_comfy_alt"                                : 1,
            "view_compact"                                  : 13,
            "view_compact_alt"                              : 1,
            "view_cozy"                                     : 1,
            "view_day"                                      : 13,
            "view_headline"                                 : 11,
            "view_in_ar"                                    : 11,
            "view_kanban"                                   : 1,
            "view_list"                                     : 14,
            "view_module"                                   : 13,
            "view_quilt"                                    : 14,
            "view_sidebar"                                  : 13,
            "view_stream"                                   : 13,
            "view_timeline"                                 : 1,
            "view_week"                                     : 13,
            "vignette"                                      : 12,
            "villa"                                         : 4,
            "visibility"                                    : 16,
            "visibility_off"                                : 12,
            "voice_chat"                                    : 13,
            "voice_over_off"                                : 11,
            "voicemail"                                     : 12,
            "volcano"                                       : 1,
            "volume_down"                                   : 13,
            "volume_mute"                                   : 13,
            "volume_off"                                    : 17,
            "volume_up"                                     : 14,
            "volunteer_activism"                            : 10,
            "vpn_key"                                       : 12,
            "vpn_key_off"                                   : 1,
            "vpn_lock"                                      : 17,
            "vrpano"                                        : 10,
            "wallet"                                        : 1,
            "wallpaper"                                     : 13,
            "warehouse"                                     : 1,
            "warning"                                       : 17,
            "warning_amber"                                 : 16,
            "wash"                                          : 8,
            "watch"                                         : 12,
            "watch_later"                                   : 17,
            "watch_off"                                     : 1,
            "water"                                         : 11,
            "water_damage"                                  : 6,
            "water_drop"                                    : 3,
            "waterfall_chart"                               : 11,
            "waves"                                         : 11,
            "waving_hand"                                   : 3,
            "wb_auto"                                       : 12,
            "wb_cloudy"                                     : 12,
            "wb_incandescent"                               : 12,
            "wb_iridescent"                                 : 11,
            "wb_shade"                                      : 10,
            "wb_sunny"                                      : 12,
            "wb_twilight"                                   : 9,
            "wc"                                            : 11,
            "web"                                           : 13,
            "web_asset"                                     : 12,
            "web_asset_off"                                 : 4,
            "web_stories"                                   : 4,
            "webhook"                                       : 1,
            "weekend"                                       : 12,
            "west"                                          : 7,
            "whatshot"                                      : 17,
            "wheelchair_pickup"                             : 8,
            "where_to_vote"                                 : 16,
            "widgets"                                       : 13,
            "width_full"                                    : 1,
            "width_normal"                                  : 1,
            "width_wide"                                    : 1,
            "wifi"                                          : 12,
            "wifi_1_bar"                                    : 1,
            "wifi_2_bar"                                    : 1,
            "wifi_calling"                                  : 11,
            "wifi_calling_3"                                : 10,
            "wifi_channel"                                  : 1,
            "wifi_find"                                     : 1,
            "wifi_lock"                                     : 13,
            "wifi_off"                                      : 12,
            "wifi_password"                                 : 1,
            "wifi_protected_setup"                          : 12,
            "wifi_tethering"                                : 12,
            "wifi_tethering_error"                          : 3,
            "wifi_tethering_off"                            : 10,
            "wind_power"                                    : 1,
            "window"                                        : 10,
            "wine_bar"                                      : 6,
            "woman"                                         : 2,
            "woman_2"                                       : 1,
            "work"                                          : 12,
            "work_history"                                  : 1,
            "work_off"                                      : 12,
            "work_outline"                                  : 12,
            "workspace_premium"                             : 3,
            "workspaces"                                    : 9,
            "wrap_text"                                     : 13,
            "wrong_location"                                : 17,
            "wysiwyg"                                       : 8,
            "yard"                                          : 9,
            "youtube_searched_for"                          : 12,
            "zoom_in"                                       : 11,
            "zoom_in_map"                                   : 1,
            "zoom_out"                                      : 11,
            "zoom_out_map"                                  : 17
        };
        const o = function(o) {
            return `<div id="googleIconPicker" class="googleIconPicker items-center justify-center" ref={wrapperRef}>
      <div class="googleIconPicker__overlay"></div>
      <div class="googleIconPicker__content gjs-one-bg gjs-two-color gjs-mdl-dialog">
        <span class="close flex justify-end googleIconPicker__close gjs-mdl-btn-close">⨯</span>
        <div class="googleIconPicker__filterBar gjs-mdl-header">
          <div class="googleIconPicker__search gjs-field gjs-am-add-field">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search" autofocus>
          </div>
          <div class="googleIconPicker__customization">
            <div id="gjs-clm-input-c" data-states-c="">
              <label>Style</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select id="gjs-clm-states" class="gjs-clm-states" name="style" title="Style">
                    <option value="material-symbols-outlined">Outlined</option>
                    <option value="material-symbols-rounded">Rounded</option>
                    <option value="material-symbols-sharp">Sharp</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>
            
            <div id="gjs-clm-input-c" data-states-c="">
              <label>Fill</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select id="gjs-clm-states" class="gjs-clm-states" name="fill" title="Fill">
                    <option value="0" selected>0</option>
                    <option value="1">1</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>

            <div id="gjs-clm-input-c" data-states-c="">
              <label>Weight</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select name="weight" title="Weight">
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400" selected>400</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>


            <div id="gjs-clm-input-c" data-states-c="">
              <label>Grade</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select name="grade" title="Grade">
                    <option value="-25">-25</option>
                    <option value="0" selected>0</option>
                    <option value="200">200</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>
            
            <div id="gjs-clm-input-c" data-states-c="">
              <label>Optical Size</label>

              <div class="gjs-field gjs-select">
                <span id="gjs-input-holder">
                  <select name="opticalSize" title="Optical Size">
                    <option value="20">20</option>
                    <option value="24">24</option>
                    <option value="40">40</option>
                    <option value="48" selected>48</option>
                  </select>
                </span>
                <div class="gjs-sel-arrow">
                  <div class="gjs-d-s-arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="googleIconPicker__icons icons">
          `.concat(Object.keys(e).map((function(e) {
                return `
              <button aria-haspopup="dialog" 
                      role="option" 
                      aria-label="Search Icon" 
                      aria-selected="false" 
                      class="googleIconPicker__iconWrapper">
                <span class="googleIconPicker__icon material-icons material-symbols-outlined" 
                      style="font-size: 48px">
                  `.concat(e, `
                </span>
                <span class="googleIconPicker__iconName">
                  `).concat(e.replaceAll('_', ' '), `
                </span>
              </button>
            `)
            })).join(''), `
        </div>
      </div>
    </div>`)
        };
        var a = void 0 && (void 0).__assign || function() {
            return a = Object.assign || function(e) {
                for (var o, t = 1, n = arguments.length; t < n; t++) for (var a in o = arguments[t]) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                return e
            }, a.apply(this, arguments)
        };
        const r = function(t) {
            t.on('load', (function() {
                var e;
                e = t.Canvas.getDocument().head,
                    [
                        "//fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404084845",
                        "//fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404087635",
                        "//fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404089108"
                    ].forEach((function(o) {
                        e.insertAdjacentHTML('beforeend', "<link rel=\"stylesheet\" href=\"".concat(o, "\" />")), document.head.insertAdjacentHTML('beforeend', "<link rel=\"stylesheet\" href=\"".concat(o, "\" />"))
                    }))
            })), t.Commands.add('open:icon-picker', {
                getSelects          : function() {
                    return document.querySelectorAll('.googleIconPicker__customization select')
                }, addIconEvents    : function() {
                    var e = this;
                    document.querySelectorAll('.googleIconPicker__iconWrapper').forEach((function(o) {
                        o.addEventListener('click', e.iconSelect.bind(e))
                    }))
                }, removeIconEvents : function() {
                    var e = this;
                    document.querySelectorAll('.googleIconPicker__iconWrapper').forEach((function(o) {
                        o.removeEventListener('click', e.iconSelect.bind(e))
                    }))
                }, run              : function() {
                    var n = this, a = t.getEl();
                    if (a) {
                        a.insertAdjacentHTML('beforebegin', o(t)), this.renderList(e);
                        var r = document.querySelectorAll('.googleIconPicker__close'),
                            i = document.querySelector('.googleIconPicker__search');
                        r.forEach((function(e) {
                            e.addEventListener('click', (function() {
                                return n.close()
                            }))
                        })), this.addIconEvents(), this.getSelects().forEach((function(e) {
                            n.setSelectValue(e), e.addEventListener('change', (function(e) {
                                var o = e.target;
                                n.setSelectValue(o)
                            }))
                        })), i && i.addEventListener('keydown', (function(e) {
                            return n.searcher(e)
                        }))
                    }
                }, setSelectValue   : function(e) {
                    if (e) if ('style' === e.name) {
                        document.querySelectorAll('.googleIconPicker__icon').forEach((function(o) {
                            o.classList.remove("material-symbols-outlined", "material-symbols-rounded", "material-symbols-sharp"), o.classList.add(e.value)
                        }))
                    } else {
                        var o = "--".concat(e.name.toLowerCase());
                        document.documentElement.style.setProperty(o, e.value)
                    }
                }, renderList       : function(e) {
                    var o = this, t = document.querySelector('.googleIconPicker__icons');
                    t && (t.innerHTML = '', Object.keys(e).forEach((function(e) {
                        t.appendChild(o.renderIcon(e))
                    })))
                }, create           : function(e) {
                    return document.createElement(e)
                }, renderIcon       : function(e) {
                    var o = document.createElement('button');
                    o.setAttribute('aria-haspopup', 'dialog'), o.setAttribute('role', 'option'), o.setAttribute('aria-label', 'Search Icon'), o.setAttribute('aria-selected', 'false'), o.classList.add('googleIconPicker__iconWrapper'), o.classList.add('gjs-two-color');
                    var t = document.createElement('span');
                    t.classList.add('googleIconPicker__icon', 'material-symbols-outlined'), t.style.fontSize = '48px', t.innerText = e;
                    var n = document.createElement('span');
                    return n.classList.add('googleIconPicker__iconName'), n.innerText = e.replaceAll('_', ' '), o.appendChild(t), o.appendChild(n), o
                }, debounce         : function(e, o) {
                    var t;
                    return function() {
                        for (var n = this, a = [], r = 0; r < arguments.length; r++) a[r] = arguments[r];
                        t && clearTimeout(t), t = setTimeout((function() {
                            e.apply(n, a)
                        }), o)
                    }
                }, searcher         : function(o) {
                    var t = this, n = o.target;
                    this.debounce((function() {
                        t.removeIconEvents();
                        var o = n.value.trim().toLowerCase(), a = Object.keys(e).filter((function(e) {
                            return e.includes(o)
                        })).reduce((function(o, t) {
                            var n;
                            return Object.assign(o, ((n = {})[t] = e[t], n))
                        }), {});
                        t.renderList(a), t.addIconEvents()
                    }), 100)()
                }, setProperty      : function(e, o) {
                    var t;
                    this.setSelectValue(e);
                    var n = "--".concat(e.name.toLowerCase()), r = o.getStyle();
                    o.setStyle(a(a({}, r), ((t = {})[n] = e.value, t)))
                }, setStyle         : function(e, o) {
                    o.removeClass(["material-symbols-outlined", "material-symbols-rounded", "material-symbols-sharp"]), o.addClass(e.value)
                }, iconSelect       : function(e) {
                    var o = this;
                    if (t && t.getWrapper() && e.target) {
                        var n = e.target.querySelector('.googleIconPicker__icon'), a = t.getSelected();
                        if (a) a.components(n.innerHTML), this.getSelects().forEach((function(e) {
                            'style' === e.name ? o.setStyle(e, a) : o.setProperty(e, a)
                        })), this.close()
                    }
                }, close            : function() {
                    var e = document.querySelector('.googleIconPicker');
                    e && e.remove()
                }
            }), t.Commands.add('close:icon-picker', {
                run : function() {
                    var e = document.querySelector('.googleIconPicker');
                    e && e.remove()
                }
            })
        };
        var i = t(379), _ = t.n(i), s = t(795), l = t.n(s), c = t(569), d = t.n(c), p = t(565), u = t.n(p), m = t(216),
            f                                                                                                 = t.n(m), g = t(589), h = t.n(g), b = t(167), v = {};
        v.styleTagTransform = h(), v.setAttributes = u(), v.insert = d().bind(null, "head"), v.domAPI = l(), v.insertStyleElement = f();
        _()(b.Z, v);
        b.Z && b.Z.locals && b.Z.locals;
        const w = function(e, o) {
            void 0 === o && (o = {}), e.DomComponents.addType('materialIcons', {
                view : {
                    events   : {dblclick : 'onActive'},
                    onActive : function(o) {
                        e.Commands.run('open:icon-picker')
                    }
                }
            }), e.BlockManager.add('materialIcon', {
                label    : 'Material Icon',
                media    : "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M22.495 1.31601C22.813 1.5738 22.9977 1.96478 22.9977 2.37723V8.56409C22.9977 9.70264 21.7646 10.6264 20.248 10.6264C18.7314 10.6264 17.4983 9.70264 17.4983 8.56409C17.4983 7.42554 18.7314 6.5018 20.248 6.5018V4.05284L16.1234 4.87775V9.93895C16.1234 11.0775 14.8904 12.0012 13.3737 12.0012C11.8571 12.0012 10.624 11.0775 10.624 9.93895C10.624 8.80039 11.8571 7.87666 13.3737 7.87666V3.75209C13.3737 3.09474 13.8377 2.5319 14.4779 2.40301L21.3522 1.02815C21.756 0.946522 22.1728 1.05393 22.495 1.31172V1.31601ZM4.20943 14.0635L4.71641 13.2988C4.9699 12.9164 5.39954 12.6887 5.85926 12.6887H8.51016C8.96988 12.6887 9.39952 12.9164 9.65301 13.2988L10.1643 14.0635H11.3114C12.45 14.0635 13.3737 14.9873 13.3737 16.1258V20.9378C13.3737 22.0764 12.45 23.0001 11.3114 23.0001H3.06229C1.92373 23.0001 1 22.0764 1 20.9378V16.1258C1 14.9873 1.92373 14.0635 3.06229 14.0635H4.20943ZM9.24914 18.5318C9.24914 17.9849 9.03187 17.4603 8.64511 17.0735C8.25836 16.6868 7.73381 16.4695 7.18686 16.4695C6.63991 16.4695 6.11535 16.6868 5.7286 17.0735C5.34185 17.4603 5.12457 17.9849 5.12457 18.5318C5.12457 19.0788 5.34185 19.6033 5.7286 19.9901C6.11535 20.3768 6.63991 20.5941 7.18686 20.5941C7.73381 20.5941 8.25836 20.3768 8.64511 19.9901C9.03187 19.6033 9.24914 19.0788 9.24914 18.5318ZM21.567 12.9593L19.9172 16.8132H22.3103C22.5981 16.8132 22.8516 16.9894 22.9548 17.2601C23.0579 17.5307 22.9805 17.8315 22.7657 18.0205L17.2663 22.8325C17.0257 23.0431 16.6691 23.0602 16.4113 22.8712C16.1535 22.6822 16.059 22.3384 16.1836 22.0463L17.8291 18.1881H15.436C15.1481 18.1881 14.8947 18.0119 14.7915 17.7413C14.6884 17.4706 14.7658 17.1698 14.9806 16.9808L20.48 12.1688C20.7206 11.9583 21.0772 11.9411 21.335 12.1301C21.5928 12.3192 21.6873 12.6629 21.5627 12.955L21.567 12.9593ZM7.00211 10.4159C6.72284 10.6951 6.27172 10.6951 6.01393 10.4159L1.85499 6.12372C0.651989 4.87775 0.716436 2.81976 2.06981 1.65973C3.22985 0.650068 5.00857 0.843407 6.08268 1.939L6.51232 2.39012L6.92048 1.939C7.99459 0.843407 9.75183 0.650068 10.9548 1.65973C12.2867 2.81976 12.3512 4.87775 11.1482 6.12372L7.00641 10.4159H7.00211Z\" fill=\"black\"/></svg>",
                category : "Basic",
                content  : `
    <span data-gjs-type="materialIcons" 
          class="material-icons material-symbols-outlined"
          style="font-variation-settings: 'FILL' var(--fill), 'wght' var(--weight), 'GRAD' var(--grade), 'opsz' var(--opticalsize);">
      home
    </span>`
            }), r(e)
        }
    })(), n
})()));
