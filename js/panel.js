/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


wd.caf.impl.panels = wd.caf.impl.panels || {};

/**
 * @class
 */

wd.caf.panel = function(spec) {


    /**
     * Specific specs
     */
    
    var _spec = {
        name: "override",
        type: "panel",
        order: 100,
        description: "override description",
        color: "red"
    };

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.component(spec);
    
    var $panelLink = undefined;
    
    /**
     * Describes this interface
     * @name panel.getOverrides
     * @memberof wd.caf.panel
     */
    myself.getOverrides = function(){
        return {
            "spec": _spec,
            "init": "Init function",
            "panel": "Function to call to execute the panel",
            "description": "Logo placeholder",
            "draw($ph)": "Draw the panel on the specified place"
            
        }
    }
    
    
    /**
     * Returns the color of this panel
     * @name panel.getColor
     * @memberof wd.caf.panel
     */
    myself.getColor = function(){
        
        return spec.color;
        
    }
    

    myself.setPanelLink = function(_$panelLink){
        
        $panelLink = _$panelLink;
        
    }

    myself.getPanelLink = function(){
        
        return $panelLink;
        
    }

    
    /**
     * Draws the panel
     * @name panel.draw
     * @memberof wd.caf.panel
     */
    myself.draw = spec.draw || function($ph){
        myself.log("Panel draw action, override","warn");
        $ph.append(myself.getName());
    }


    /**
     * Selects this panel
     * @name panel.select
     * @memberof wd.caf.panel
     */
    myself.select = function($ph){
        myself.caf.panelEngine.selectPanel(myself);
    }
    

    
    return myself;
}

