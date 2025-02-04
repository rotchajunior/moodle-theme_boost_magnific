/**
 * https://github.com/mickidum/acc_toolbar
 */
define([], function() {
    return {
        init: function(iconurl) {
            window.micAccessTool = new MicAccessTool(iconurl, {
                toolbar:M.util.get_string("acctoolbar_toolbar", "theme_boost_magnific"),
                btn_open: M.util.get_string("acctoolbar_btn_open", "theme_boost_magnific"),
                btn_close: M.util.get_string("acctoolbar_btn_close", "theme_boost_magnific"),
                keyboard_root: M.util.get_string("acctoolbar_keyboard_root", "theme_boost_magnific"),
                disable_animattions: M.util.get_string("acctoolbar_disable_animattions", "theme_boost_magnific"),
                access_declaration: M.util.get_string("acctoolbar_access_declaration", "theme_boost_magnific"),
                debug_contacts: M.util.get_string("acctoolbar_debug_contacts", "theme_boost_magnific"),
                reset_all_settings: M.util.get_string("acctoolbar_reset_all_settings", "theme_boost_magnific"),
                image_without_alt: M.util.get_string("acctoolbar_image_without_alt", "theme_boost_magnific"),
                contrast_block: {
                    header: M.util.get_string("acctoolbar_contrast_block_header", "theme_boost_magnific"),
                    btn_monochrome: M.util.get_string("acctoolbar_btn_monochrome", "theme_boost_magnific"),
                    btn_bright: M.util.get_string("acctoolbar_btn_bright", "theme_boost_magnific"),
                    btn_invert: M.util.get_string("acctoolbar_btn_invert", "theme_boost_magnific")
                },
                text_block: {
                    header: M.util.get_string("acctoolbar_text_block_header", "theme_boost_magnific"),
                    btn_font_up: M.util.get_string("acctoolbar_btn_font_up", "theme_boost_magnific"),
                    btn_font_down: M.util.get_string("acctoolbar_btn_font_down", "theme_boost_magnific"),
                    btn_font_readable: M.util.get_string("acctoolbar_btn_font_readable", "theme_boost_magnific")
                },
                content_block: {
                    header: M.util.get_string("acctoolbar_content_block_header", "theme_boost_magnific"),
                    btn_underline_links: M.util.get_string("acctoolbar_btn_underline_links", "theme_boost_magnific"),
                    btn_underline_headers: M.util.get_string("acctoolbar_btn_underline_headers", "theme_boost_magnific"),
                    btn_images_titles: M.util.get_string("acctoolbar_btn_images_titles", "theme_boost_magnific")
                },
                zoom_block: {
                    header: M.util.get_string("acctoolbar_zoom_block_header", "theme_boost_magnific"),
                    btn_cursor_white: M.util.get_string("acctoolbar_btn_cursor_white", "theme_boost_magnific"),
                    btn_cursor_black: M.util.get_string("acctoolbar_btn_cursor_black", "theme_boost_magnific"),
                    btn_zoom_in: M.util.get_string("acctoolbar_btn_zoom_in", "theme_boost_magnific")
                }
            });
        },
    };
});

function MicAccessTool(iconurl, locale) {
    this.init = {
        iconurl: iconurl,
        link: "",
        contact: "",
        buttonPosition: "right",
    };
    this.locale = locale;
    this.buildToolBox();
    this.toolBox = document.getElementById("mic-access-tool-box");
    this.toolBoxOpenButton = document.getElementById("mic-access-tool-general-button");
    this.toolBoxCloseButton = document.getElementById("mic-access-tool-box-close-button");
    this.toolBoxOpenButton.addEventListener("click", this.openBox.bind(this));
    this.toolBoxCloseButton.addEventListener("click", this.closeBox.bind(this));
    document.addEventListener("keyup", this.openCloseBoxKeyboard.bind(this));
    this.micContrastMonochrome = document.getElementById("mic-toolbox-contrast-monochrome");
    this.micContrastSoft = document.getElementById("mic-toolbox-contrast-soft");
    this.micContrastHard = document.getElementById("mic-toolbox-contrast-hard");
    this.micContrastMonochrome.addEventListener("click", this.contrastChange);
    this.micContrastSoft.addEventListener("click", this.contrastChange);
    this.micContrastHard.addEventListener("click", this.contrastChange);
    this.micDisableButtonsAnimations = document.getElementById("mic-toolbox-disable-buttons-animations");
    this.micDisableButtonsKeyboard = document.getElementById("mic-toolbox-disable-buttons-keyboard");
    this.micDisableButtonsAnimations.addEventListener("click", this.onceButtonChange);
    this.micDisableButtonsKeyboard.addEventListener("click", this.onceButtonChange);
    this.micToolboxFontsUp = document.getElementById("mic-toolbox-fonts-up");
    this.micToolboxFontsDown = document.getElementById("mic-toolbox-fonts-down");
    this.micToolboxFontsSimple = document.getElementById("mic-toolbox-fonts-simple");
    this.micToolboxFontsUp.addEventListener("click", this.fontsChange);
    this.micToolboxFontsDown.addEventListener("click", this.fontsChange);
    this.micToolboxFontsSimple.addEventListener("click", this.onceButtonChange);
    this.micToolboxContentLinks = document.getElementById("mic-toolbox-content-links");
    this.micToolboxContentHeaders = document.getElementById("mic-toolbox-content-headers");
    this.micToolboxContentImages = document.getElementById("mic-toolbox-content-images");
    this.micToolboxContentLinks.addEventListener("click", this.onceButtonChange);
    this.micToolboxContentHeaders.addEventListener("click", this.onceButtonChange);
    this.micToolboxContentImages.addEventListener("click", this.onceButtonChange);
    this.micToolboxCursorWhite = document.getElementById("mic-toolbox-cursor-big-white");
    this.micToolboxCursorBlack = document.getElementById("mic-toolbox-cursor-big-black");
    this.micToolboxZoomUp = document.getElementById("mic-toolbox-zoom-up");
    this.micToolboxCursorWhite.addEventListener("click", this.cursorChange);
    this.micToolboxCursorBlack.addEventListener("click", this.cursorChange);
    this.micToolboxZoomUp.addEventListener("click", this.onceButtonChange);
    this.micToolboxDisableButtonsAll = document.getElementById("mic-toolbox-disable-buttons-reset-all");
    this.micToolboxDisableButtonsAll.addEventListener("click", this.resetApp.bind(this));
    this.initialApp();
}

MicAccessTool.prototype.buildToolBox = function() {
    var o = `
        <button title="${this.locale.btn_open}" tabindex="1" id="mic-access-tool-general-button"
                class="mic-access-tool-general-button">
            <div>
                <span>CTRL+F2</span>
                <img src="${this.init.iconurl}" 
                     alt="${this.locale.btn_open}">
            </div>
        </button>
        <div id="mic-access-tool-box" class="mic-access-tool-box">
            <div class="mic-access-tool-box-header">
                ${this.locale.toolbar}
                <button title="${this.locale.btn_close}" id="mic-access-tool-box-close-button">
                    ${this.locale.btn_close}
                </button>
            </div>
            <div class="mic-disable-buttons">
                <button title="${this.locale.keyboard_root}" id="mic-toolbox-disable-buttons-keyboard">
                    <span>${this.locale.keyboard_root}</span>
                    <img src="${this.init.iconurl.replace('icon','keyboard_root')}"
                         alt="${this.locale.keyboard_root}">
                </button>
                <button title="${this.locale.disable_animattions}" id="mic-toolbox-disable-buttons-animations">
                    <span>${this.locale.disable_animattions}</span>
                    <img src="${this.init.iconurl.replace('icon','disable_animattions')}"
                         alt="${this.locale.disable_animattions}">
                </button>
            </div>
            <div id="mic-toolbox-contrast-block" class="mic-contrast-block mic-buttons-block">
                <span class="mic-subtitle-span">${this.locale.contrast_block.header}</span>
                <button title="${this.locale.contrast_block.btn_monochrome}" id="mic-toolbox-contrast-monochrome">
                    <span>
                        <img alt="${this.locale.contrast_block.btn_monochrome}"
                             src="${this.init.iconurl.replace('icon','btn_monochrome')}">
                    </span>
                    <span>${this.locale.contrast_block.btn_monochrome}</span>
                </button>
                <button title="${this.locale.contrast_block.btn_bright}" id="mic-toolbox-contrast-soft">
                    <span>
                        <img alt="${this.locale.contrast_block.btn_bright}"
                             src="${this.init.iconurl.replace('icon','btn_bright')}">
                    </span>
                    <span>${this.locale.contrast_block.btn_bright}</span>
                </button>
                <button title="${this.locale.contrast_block.btn_invert}" id="mic-toolbox-contrast-hard">
                    <span>
                        <img alt="${this.locale.contrast_block.btn_invert}"
                             src="${this.init.iconurl.replace('icon','btn_invert')}">
                    </span>
                    <span>${this.locale.contrast_block.btn_invert}</span>
                </button>
            </div>
            <div class="mic-fonts-block mic-buttons-block">
                <span class="mic-subtitle-span">${this.locale.text_block.header}</span>
                <button title="${this.locale.text_block.btn_font_up}" id="mic-toolbox-fonts-up">
                    <span>
                        <img src="${this.init.iconurl.replace('icon','btn_font_up')}"
                             alt="${this.locale.text_block.btn_font_up}">
                    </span>
                    <span>${this.locale.text_block.btn_font_up}</span>
                    <span id="mic-toolbox-fonts-up-enabled"></span>
                </button>
                <button title="${this.locale.text_block.btn_font_down}" id="mic-toolbox-fonts-down">
                    <span>
                        <img src="${this.init.iconurl.replace('icon','btn_font_down')}"
                             alt="${this.locale.text_block.btn_font_down}">
                    </span>
                    <span>${this.locale.text_block.btn_font_down}</span>
                </button>
                <button title="${this.locale.text_block.btn_font_readable}" id="mic-toolbox-fonts-simple">
                    <span>
                        <img src="${this.init.iconurl.replace('icon','btn_font_readable')}"
                             alt="${this.locale.text_block.btn_font_readable}">
                    </span>
                    <span>${this.locale.text_block.btn_font_readable}</span>
                </button>
            </div>
            <div class="mic-content-block mic-buttons-block">
                <span class="mic-subtitle-span">${this.locale.content_block.header}</span>
                <button title="${this.locale.content_block.btn_underline_links}" id="mic-toolbox-content-links">
                    <span>
                        <img src="${this.init.iconurl.replace('icon','btn_underline_links')}"
                             alt="${this.locale.content_block.btn_underline_links}">
                    </span>
                    <span>${this.locale.content_block.btn_underline_links}</span>
                </button>
                <button title="${this.locale.content_block.btn_underline_headers}" id="mic-toolbox-content-headers">
                    <span>
                        <img src="${this.init.iconurl.replace('icon','btn_underline_headers')}"
                             alt="${this.locale.content_block.btn_underline_headers}">
                    </span>
                    <span>${this.locale.content_block.btn_underline_headers}</span>
                </button>
                <button title="${this.locale.content_block.btn_images_titles}" id="mic-toolbox-content-images">
                    <span>
                        <img src="${this.init.iconurl.replace('icon','btn_images_titles')}"
                             alt="${this.locale.content_block.btn_images_titles}">
                    </span>
                    <span>${this.locale.content_block.btn_images_titles}</span>
                </button>
            </div>
            <div class="mic-cursors-block mic-buttons-block">
                <span class="mic-subtitle-span">${this.locale.zoom_block.header}</span>
                <button title="${this.locale.zoom_block.btn_cursor_white}" id="mic-toolbox-cursor-big-white">
                    <span>
                        <img alt="${this.locale.zoom_block.btn_cursor_white}"
                             src="${this.init.iconurl.replace('icon','btn_cursor_white')}">
                    </span>
                    <span>${this.locale.zoom_block.btn_cursor_white}</span>
                </button>
                <button title="${this.locale.zoom_block.btn_cursor_black}" id="mic-toolbox-cursor-big-black">
                    <span>
                        <img alt="${this.locale.zoom_block.btn_cursor_black}"
                             src="${this.init.iconurl.replace('icon','btn_cursor_black')}">
                    </span>
                    <span>${this.locale.zoom_block.btn_cursor_black}</span>
                </button>
                <button title="${this.locale.zoom_block.btn_zoom_in}" id="mic-toolbox-zoom-up">
                    <span>
                        <img alt="${this.locale.zoom_block.btn_zoom_in}"
                             src="${this.init.iconurl.replace('icon','btn_zoom_in')}">
                    </span>
                    <span>${this.locale.zoom_block.btn_zoom_in}</span>
                </button>
            </div>
            <div class="link-access-page">
                <a class="atb-hide-if-empty" 
                   title="${this.locale.access_declaration}" 
                   id="mic-toolbox-link-nagishut" 
                   href="#"
                   target="_blank">${this.locale.access_declaration}</a>
                <a class="atb-hide-if-empty" 
                   title="${this.locale.debug_contacts}" 
                   id="mic-toolbox-link-contact" 
                   href="#">${this.locale.debug_contacts}</a>
                <button title="${this.locale.reset_all_settings}" 
                        id="mic-toolbox-disable-buttons-reset-all">
                    <span>${this.locale.reset_all_settings}</span>
                    <img src="${this.init.iconurl.replace('icon','reset_all_settings')}"
                         alt="${this.locale.reset_all_settings}">
                </button>
            </div>
        </div>`;

    var i = document.createElement("div");
    i.id = "mic-init-access-tool";
    i.innerHTML = o;
    document.body.insertBefore(i, document.body.firstChild)
};

MicAccessTool.prototype.contrastChange = function(A) {
    if (A.preventDefault(), document.body.classList.contains(this.id)) this.classList.remove("vi-enabled"), document.body.classList.remove(this.id), delete window.MICTOOLBOXAPPSTATE.bodyClassList[this.id]; else {
        for (var o = document.querySelectorAll(".mic-contrast-block button"), t = 0; t < o.length; t++) o[t].classList.remove("vi-enabled"), document.body.classList.remove(o[t].id), delete window.MICTOOLBOXAPPSTATE.bodyClassList[o[t].id];
        this.classList.add("vi-enabled"), document.body.classList.add(this.id), window.MICTOOLBOXAPPSTATE.bodyClassList[this.id] = this.id
    }
    MicAccessTool.prototype.updateState()
};

MicAccessTool.prototype.cursorChange = function(A) {
    if (A.preventDefault(), document.body.classList.contains(this.id)) this.classList.remove("vi-enabled"), document.body.classList.remove(this.id), delete window.MICTOOLBOXAPPSTATE.bodyClassList[this.id]; else {
        for (var o = document.querySelectorAll("#mic-toolbox-cursor-big-black,#mic-toolbox-cursor-big-white"), t = 0; t < o.length; t++) o[t].classList.remove("vi-enabled"), document.body.classList.remove(o[t].id), delete window.MICTOOLBOXAPPSTATE.bodyClassList[o[t].id];
        this.classList.add("vi-enabled"), document.body.classList.add(this.id), window.MICTOOLBOXAPPSTATE.bodyClassList[this.id] = this.id
    }
    MicAccessTool.prototype.updateState()
};

MicAccessTool.prototype.onceButtonChange = function(A) {
    A.preventDefault(), "mic-toolbox-disable-buttons-keyboard" === this.id && (window.MICTOOLBOXAPPSTATE.keyboardRoot = !window.MICTOOLBOXAPPSTATE.keyboardRoot, MicAccessTool.prototype.keyboardRootEnable()), "mic-toolbox-content-images" === this.id && MicAccessTool.prototype.imagesChange(), document.body.classList.contains(this.id) ? (this.classList.remove("vi-enabled"), document.body.classList.remove(this.id), delete window.MICTOOLBOXAPPSTATE.bodyClassList[this.id]) : (this.classList.add("vi-enabled"), document.body.classList.add(this.id), window.MICTOOLBOXAPPSTATE.bodyClassList[this.id] = this.id), MicAccessTool.prototype.updateState()
};

MicAccessTool.prototype.keyboardRootEnable = function() {
    if (window.MICTOOLBOXAPPSTATE.keyboardRoot) for (var A = document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,button,input,select,textarea"), o = 0; o < A.length; o++) {
        A[o].tabIndex = o + 1
    } else window.location.reload()
};

MicAccessTool.prototype.fontsChange = function(A) {
    A.preventDefault();
    var o = window.MICTOOLBOXAPPSTATE.fontSize;
    if ("mic-toolbox-fonts-up" === this.id) {
        if (1.6 <= o) return;
        for (var t = document.querySelectorAll("body,h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,li,td,th,strong,span,blockquote,div"), i = 0; i < t.length; i++) {
            var e = t[i], c = window.getComputedStyle(e).getPropertyValue("font-size").split("px"), n = Number(c[0]);
            e.style.fontSize = (1.1 * n).toFixed() + "px"
        }
        o = (1.1 * o).toFixed(2)
    }
    if ("mic-toolbox-fonts-down" === this.id) {
        if (o <= 1) return window.MICTOOLBOXAPPSTATE.fontSize = 1, void MicAccessTool.prototype.updateState();
        for (t = document.querySelectorAll("body,h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,li,td,th,strong,span,blockquote,div"), i = 0; i < t.length; i++) {
            e = t[i], c = window.getComputedStyle(e).getPropertyValue("font-size").split("px"), n = Number(c[0]);
            e.style.fontSize = (n / 1.1).toFixed() + "px"
        }
        o = (o / 1.1).toFixed(2)
    }
    window.MICTOOLBOXAPPSTATE.fontSize = o, MicAccessTool.prototype.getFontsChanges(o), MicAccessTool.prototype.updateState()
};

MicAccessTool.prototype.initFontsChange = function() {
    for (var A = document.querySelectorAll("body,h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,li,td,th,strong,span,blockquote,div"), o = window.MICTOOLBOXAPPSTATE.fontSize, t = 0; t < A.length; t++) {
        var i = A[t], e = window.getComputedStyle(i).getPropertyValue("font-size");
        i.style.fontSize = e;
        var c = i.style.fontSize.split("px")
    }
    for (t = 0; t < A.length; t++) {
        i = A[t], e = window.getComputedStyle(i).getPropertyValue("font-size").split("px"), c = Number(e[0]);
        i.style.fontSize = (c * o).toFixed() + "px"
    }
    o && this.getFontsChanges(o)
};

MicAccessTool.prototype.initFontsChangeFirst = function() {
    for (var A = document.querySelectorAll("body,h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,li,td,th,strong,span,blockquote,div"), o = 0; o < A.length; o++) {
        var t = A[o], i = window.getComputedStyle(t).getPropertyValue("font-size");
        t.style.fontSize = i;
        t.style.fontSize.split("px")
    }
};

MicAccessTool.prototype.getFontsChanges = function(A) {
    if (1 < A) {
        document.getElementById("mic-toolbox-fonts-up").classList.add("vi-font-enabled");
        var o = "+" + (100 * Number(A) - 100).toFixed() + "%";
        document.getElementById("mic-toolbox-fonts-up-enabled").textContent = o
    } else document.getElementById("mic-toolbox-fonts-up").classList.remove("vi-font-enabled"), document.getElementById("mic-toolbox-fonts-up-enabled").textContent = ""
};

MicAccessTool.prototype.imagesChange = function() {
    if (document.body.classList.contains("mic-toolbox-content-images")) {
        for (var A = document.querySelectorAll(".mic-toolbox-images-titles"), o = 0; o < A.length; o++) {
            A[o].parentElement.removeChild(A[o])
        }
        window.MICTOOLBOXAPPSTATE.imagesTitle = !1
    } else this.imagesAddTitles(), window.MICTOOLBOXAPPSTATE.imagesTitle = !0
};

MicAccessTool.prototype.imagesAddTitles = function() {
    for (var A = document.images, o = 0; o < A.length; o++) {
        var t, i = A[o];
        if (i.alt) (t = document.createElement("span")).className = "mic-toolbox-images-titles", t.textContent = i.alt, i.parentNode.insertBefore(t, i); else (t = document.createElement("span")).className = "mic-toolbox-images-titles", t.textContent = "image without text", i.parentNode.insertBefore(t, i)
    }
};

MicAccessTool.prototype.updateState = function() {
    var A = JSON.stringify(window.MICTOOLBOXAPPSTATE);
    "undefined" != typeof Storage ? localStorage.setItem("MICTOOLBOXAPPSTATE", A) : console.log("No Storage Found")
};

MicAccessTool.prototype.openBox = function(A) {
    this.toolBox.classList.add("opened-mic-access-tool"), (!window.MICTOOLBOXAPPSTATE.initFontSize || window.MICTOOLBOXAPPSTATE.fontSize <= 1) && (this.initFontsChangeFirst(), window.MICTOOLBOXAPPSTATE.initFontSize = !0), this.toolBoxCloseButton.focus()
};

MicAccessTool.prototype.closeBox = function(A) {
    this.toolBox.classList.remove("opened-mic-access-tool")
};

MicAccessTool.prototype.openCloseBoxKeyboard = function(A) {
    27 == A.keyCode && this.closeBox(), A.ctrlKey && 113 == A.keyCode && this.openBox()
};

MicAccessTool.prototype.resetApp = function(A) {
    localStorage.removeItem("MICTOOLBOXAPPSTATE"), window.location.reload()
};

MicAccessTool.prototype.initialApp = function() {
    if (window.MICTOOLBOXAPPSTATE = JSON.parse(localStorage.getItem("MICTOOLBOXAPPSTATE")) || {
        bodyClassList: {},
        fontSize: 1,
        imagesTitle: !1,
        keyboardRoot: !1,
        initFontSize: !1
    }, window.MICTOOLBOXAPPSTATE.bodyClassList) for (var A in window.MICTOOLBOXAPPSTATE.bodyClassList) {
        var o = window.MICTOOLBOXAPPSTATE.bodyClassList[A], t = document.getElementById(o);
        t && t.classList.add("vi-enabled"), document.body.classList.add(o)
    }
    (1 < window.MICTOOLBOXAPPSTATE.fontSize && this.initFontsChange(), window.MICTOOLBOXAPPSTATE.imagesTitle && this.imagesAddTitles(), window.MICTOOLBOXAPPSTATE.keyboardRoot && this.keyboardRootEnable(), !window.MSInputMethodContext || !document.documentMode) || (document.getElementById("mic-toolbox-contrast-block").style.display = "none");
    if (this.init.link) {
        var i = document.getElementById("mic-toolbox-link-nagishut") || {};
        i.classList.remove("atb-hide-if-empty"), i.href = this.init.link
    }
    if (this.init.contact) {
        var e = document.getElementById("mic-toolbox-link-contact") || {};
        e.classList.remove("atb-hide-if-empty"), e.href = this.init.contact
    }
    "right" === this.init.buttonPosition && (document.getElementById("mic-access-tool-general-button").classList.add("mic-access-tool-general-button-right"), document.getElementById("mic-access-tool-box").classList.add("mic-access-tool-box-right"))
}, window.onload = function() {
    window.micAccessTool = new MicAccessTool
};