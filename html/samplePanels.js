/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/


/**
 * About panel
 * @class
 *
 */
wd.caf.impl.panels.about = function(spec){
    
    /**
     * Specific specs
     */
    
    
    var _spec = {
        name: "about",
        description: "About",
        order: 1,
        color: "yellow"
    };

        
    var myself = wd.caf.panel($.extend({},_spec,spec));
    //var myself = wd.caf.impl.panels.underConstruction($.extend({},_spec,spec))


    /**
     * Describes this interface
     * @name panel.init
     * @memberof wd.caf.panel
     */
    myself.draw = function($ph){
        
        var d = $('<div/>').addClass("underConstruction").text("Welcome to CDE2");
        $ph.append(d);
    }


    return myself;
        
};


wd.caf.impl.keybinds.about = function(spec){
    
     /**
     * Specific specs
     */
    var _spec = {
        name: "about",
        description: "About",
        key: "0",
        order: 0
    };

    var myself = wd.caf.impl.keybinds.panelKeybind($.extend({},_spec,spec));
    return myself;
        
};

wd.caf.registry.registerPanel( wd.caf.impl.panels.about() );
wd.caf.registry.registerKeybind( wd.caf.impl.keybinds.about() );



/**
 * About panel
 * @class
 *
 */
wd.caf.impl.panels.panels = function(spec){
    
    /**
     * Specific specs
     */
    
    
    var _spec = {
        name: "panels",
        description: "Panels",
        order: 1,
        color: "blue"
    };

        
    var myself = wd.caf.panel($.extend({},_spec,spec));
    //var myself = wd.caf.impl.panels.underConstruction($.extend({},_spec,spec))


    /**
     * Describes this interface
     * @name panel.init
     * @memberof wd.caf.panel
     */
    myself.draw = function($ph){
        
        var d = $('<div/>').addClass("underConstruction").text("Welcome to CDE2");
        $ph.append(d);
    }


    return myself;
        
};


wd.caf.impl.keybinds.panels = function(spec){
    
     /**
     * Specific specs
     */
    var _spec = {
        name: "panels",
        description: "Panels",
        key: "0",
        order: 0
    };

    var myself = wd.caf.impl.keybinds.panelKeybind($.extend({},_spec,spec));
    return myself;
        
};

wd.caf.registry.registerPanel( wd.caf.impl.panels.panels() );
wd.caf.registry.registerKeybind( wd.caf.impl.keybinds.panels() );


