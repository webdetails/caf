/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/





/**
 * Usage
 *
 */

application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:'usage',
    description: 'Usage',
    order:"21", 
    url:"panelUsage.html", 
    selector:"#usage",
    color:"#06272C"
}) );
application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'usage',
    key:'2'
}) );


/**
 * About
 *
 */

application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:'about',
    description: 'About',
    order:"20", 
    url:"panelAbout.html", 
    selector:"#about",
    color:"#06272C"
}) );
application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'about',
    key:'1'
}) );

application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:'entities',
    description: 'Entities',
    order:"22", 
    url:"panelEntities.html", 
    selector:"#entities",
    color:"#06272C"
}) );
/*application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'entities',
    key:'3'
}) );*/

application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:'components',
    description: 'Components',
    order:"23", 
    url:"panelComponents.html", 
    selector:"#components",
    color:"#06272C"
}) );
/*application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'components',
    key:'3'
}) );*/

application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:'panels',
    description: 'Panels',
    order:"24", 
    url:"panelPanels.html", 
    selector:"#panels",
    color:"#06272C"
}) );
application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'panels',
    key:'3'
}) );





application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:'actions',
    description: 'Actions',
    order:"25", 
    url:"panelActions.html", 
    selector:"#actions",
    color:"#06272C"
}) );
application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'actions',
    key:'4'
}) );






application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:"notifications",
    description: 'Notifications',
    order:"26", 
    url:"panelNotifications.html", 
    selector:"#notifications",
    color:"#06272C"
}) );
application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'notifications',
    key:'5'
}) );

application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:'popups',
    description: 'Popups',
    order:"27", 
    url:"panelPopups.html", 
    selector:"#popups",
    color:"#06272C"
}) );
application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'popups',
    key:'6'
}) );

application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:"templates",
    description: 'Templates',
    order:"28", 
    url:"panelTemplates.html", 
    selector:"#templates",
    color:"#06272C"
}) );
application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'templates',
    key:'7'
}) );

application.getRegistry().registerPanel( wd.caf.impl.panels.externalDivContent({
    name:"keybinds",
    description: 'Keybinds',
    order:"29", 
    url:"panelKeybinds.html", 
    selector:"#keybinds",
    color:"#06272C"
}) );
application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'keybinds',
    key:'8'
}) );

/*
application.getRegistry().registerPanel( wd.caf.impl.panels.underConstruction({
    name:'contactUs',
    description: 'Contact us',
    order:"28", 
    color: "green"
}) );
*/

application.getRegistry().registerPanel( wd.caf.impl.panels.iframeContent({
    name:'contactUs',
    description: 'Contact us',
    order:"30", 
//    url:"panelAbout.html"
    url:"http://www.webdetails.pt",
    minHeight: 800,
    color:"#06272C"
}) );

application.getRegistry().registerKeybind(  wd.caf.impl.keybinds.panelKeybind({
    name:'contactUs',
    key:'9'
}) );




