/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.skin.name = "moono-dark";
CKEDITOR.skin.ua_editor = "";
CKEDITOR.skin.ua_dialog = "";

CKEDITOR.config.toolbar = 'Mindy';
CKEDITOR.config.toolbar_Mindy = [
    ['Undo', 'Redo'],
    ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
    ['Link', 'Unlink', '-', 'Table', 'Templates', 'SpecialChar', 'Blockquote', '-', 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],
    ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
    ['PasteText', 'PasteFromWord'],
    ['Source']
];
CKEDITOR.config.plugins = "dialogui,dialog,basicstyles,blockquote,clipboard," +
"button,panelbutton,panel,floatpanel,floatingspace,menu," +
"dialogadvtab,enterkey,entities,popup," +
"fakeobjects,stylescombo," +
"format,htmlwriter,indent," +
"indentblock,indentlist,justify,link,list,liststyle," +
"maximize,pastefromword,pastetext," +
"removeformat,resize,save,menubutton,showblocks," +
"showborders,sourcearea,specialchar,tab,table," +
"tabletools,templates,toolbar,undo,wsc,wysiwygarea";

CKEDITOR.editorConfig = function (config) {
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    /*
    config.plugins = "dialogui,dialog,a11yhelp,about,basicstyles,bidi,blockquote,clipboard," +
    "button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu," +
    "contextmenu,dialogadvtab,div,elementspath,enterkey,entities,popup," +
    "filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo," +
    "font,format,forms,horizontalrule,htmlwriter,iframe,image,indent," +
    "indentblock,indentlist,justify,link,list,liststyle,magicline," +
    "maximize,newpage,pagebreak,pastefromword,pastetext,preview,print," +
    "removeformat,resize,save,menubutton,scayt,selectall,showblocks," +
    "showborders,smiley,sourcearea,specialchar,stylescombo,tab,table," +
    "tabletools,templates,toolbar,undo,wsc,wysiwygarea";
    config.removePlugins = 'elementspath,save,font,forms,bidi,templates,bidi,a11help,colorbutton,colordialog,contextmenu';
     */

    config.emailProtection = 'encode';

    // Remove some buttons provided by the standard plugins, which are
    // not needed in the Standard(s) toolbar.
    // config.removeButtons = 'Underline,Subscript,Superscript';

    // Set the most common block elements.
    // config.format_tags = 'p;h1;h2;h3;pre';

    // Simplify the dialog windows.
    // config.removeDialogTabs = 'image:advanced;link:advanced';
};