/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/


/**
 * UnderConstruction panel
 * @class
 *
 */
wd.caf.impl.panels.underConstruction = function(spec){
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name: "underConstruction",
        description: "Under Construction",
        order: 10,
        color: "red"
    };

        
    var myself = wd.caf.panel($.extend({},_spec,spec));
      
      
    /**
     * Describes this interface
     * @name panel.init
     * @memberof wd.caf.panel
     */
    myself.draw = function($ph){
        
        var d = $('<div/>').addClass("underConstruction").text("Under Construction");
        $ph.append(d);
    }
      

    return myself;
        
};


/**
 * panelKeybind Keybind
 * @class
 *
 */
wd.caf.impl.keybinds.panelKeybind = function(spec){
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name: "genericPanelKeybind",
        description: "Generic Panel Keybind"
    };


    var myself = wd.caf.keybind($.extend({},_spec,spec));

    myself.executeKeybind = function(){
        
        myself.log("Calling execution for keybind " + myself.getName());
        myself.caf.panelEngine.getPanel(spec.name).select();
        
    }
    
    return myself;
    
}