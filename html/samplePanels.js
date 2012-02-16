/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/


/**
 * About panel
 *
 */



wd.caf.registry.registerPanel( wd.caf.impl.panels.divContent({name:'about',description: 'About',order:"20", selector:"#about"}) );
wd.caf.registry.registerKeybind(  wd.caf.impl.keybinds.panelKeybind({name:'about',key:'1'}) );


wd.caf.registry.registerPanel( wd.caf.impl.panels.underConstruction({name:'usage',description: 'Usage',order:"21"}) );
wd.caf.registry.registerKeybind(  wd.caf.impl.keybinds.panelKeybind({name:'usage',key:'2'}) );

wd.caf.registry.registerPanel( wd.caf.impl.panels.underConstruction({name:'panels',description: 'Panels',order:"22"}) );
wd.caf.registry.registerKeybind(  wd.caf.impl.keybinds.panelKeybind({name:'panels',key:'3'}) );

wd.caf.registry.registerPanel( wd.caf.impl.panels.underConstruction({name:'actions',description: 'Actions',order:"23"}) );
wd.caf.registry.registerKeybind(  wd.caf.impl.keybinds.panelKeybind({name:'actions',key:'4'}) );

wd.caf.registry.registerPanel( wd.caf.impl.panels.underConstruction({name:'notifications',description: 'Notifications',order:"24"}) );
wd.caf.registry.registerKeybind(  wd.caf.impl.keybinds.panelKeybind({name:'notifications',key:'5'}) );

wd.caf.registry.registerPanel( wd.caf.impl.panels.underConstruction({name:'popups',description: 'Popups',order:"25"}) );
wd.caf.registry.registerKeybind(  wd.caf.impl.keybinds.panelKeybind({name:'popups',key:'6'}) );

wd.caf.registry.registerPanel( wd.caf.impl.panels.underConstruction({name:'templates',description: 'Templates',order:"26"}) );
wd.caf.registry.registerKeybind(  wd.caf.impl.keybinds.panelKeybind({name:'templates',key:'7'}) );

wd.caf.registry.registerPanel( wd.caf.impl.panels.underConstruction({name:'keybinds',description: 'Keybinds',order:"27"}) );
wd.caf.registry.registerKeybind(  wd.caf.impl.keybinds.panelKeybind({name:'keybinds',key:'8'}) );


