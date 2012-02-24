/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


wd.caf.impl.components = wd.caf.impl.components || {};

/**
 * @class
 */

wd.caf.component = function(spec) {


    /**
     * Specific specs
     */
    
    var _spec = {
        name: "override",
        type: "component",
        description: "override description"
    };

    /* private stuff*/
    var $placeholder;
    
    spec = $.extend({},_spec,spec);
    var myself = wd.caf.entity(spec);
    
    
    /**
     * Describes this interface
     * @name component.getOverrides
     * @memberof wd.caf.component
     */
    myself.getOverrides = function(){
        return {
            "spec": _spec,
            "init": "Init function",
            "component": "Function to call to execute the component",
            "description": "Logo placeholder",
            "draw($ph)": "Draws the component on the specified place"
            
        }
    }
    
    
    /**
     * Draws the component
     * @name component.draw
     * @memberof wd.caf.component
     */
    myself.draw = spec.draw || function($ph){
        myself.log("Component draw action, override","warn");
        $ph.append(myself.getName());
    }


    
    /**
     * Sets current planel placeholder
     * @name component.setPlaceholder
     * @memberof wd.caf.component
     * @param the placeholder
     */
    myself.setPlaceholder = function(ph){
        $placeholder = ph;
    }


    /**
     * Gets current component placeholder
     * @name component.getPlaceholder
     * @memberof wd.caf.component
     
     */
    myself.getPlaceholder = function(){
        return $placeholder;
    }


    
    return myself;
}

