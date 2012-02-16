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

    /* private stuff*/
    var $placeholder;
    
    

    var myself = wd.caf.entity($.extend({},_spec,spec));
    
    
    /**
     * Describes this interface
     * @name panel.init
     * @memberof wd.caf.panel
     */
    myself.getOverrides = function(){
        return {
            "spec": _spec,
            "init": "Init function",
            "panel": "Function to call to execute the panel",
            "description": "Logo placeholder",
            "drawPanel($ph)": "Draws the panel on the specified place"
            
        }
    }
    
    
    /**
     * Returns the color of this panel
     * @name panel.init
     * @memberof wd.caf.panel
     */
    myself.getColor = function(){
        
        return spec.color;
        
    }
    
    
    /**
     * Draws the panel
     * @name panel.draw
     * @memberof wd.caf.panel
     */
    myself.draw = function($ph){
        myself.log("Panel draw action","warn");
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
    

    
    /**
     * Sets current planel placeholder
     * @name panel.setPlaceholder
     * @memberof wd.caf.panel
     * @param the placeholder
     */
    myself.setPlaceholder = function(ph){
        $placeholder = ph;
    }


    /**
     * Gets current planel placeholder
     * @name panel.getPlaceholder
     * @memberof wd.caf.panel
     
     */
    myself.getPlaceholder = function(){
        return $placeholder;
    }


    
    return myself;
}

