/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


wd.caf.impl.actions = wd.caf.impl.actions || {};

/**
 * @class
 */


wd.caf.action = function(spec) {


    /**
     * Specific specs
     */
    
    var _spec = {
        name: "override",
        type: "action",
        order: 100,
        description: "override description"
    };

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.entity(spec);
    
    
    /**
     * Describes this interface
     * @name action.init
     * @memberof wd.caf.action
     */
    myself.getOverrides = function(){
        return {
            "spec": _spec,
            "init": "Init function",
            "executeAction": "Function to call to execute the action",
            "description": "Logo placeholder"
            
        }
    }
    


    /**
     * 
     * Calls action draw
     * @name action.draw
     * @memberof wd.caf.action
     * 
     */
    
    myself.executeAction = spec.executeAction || function(){
        
        wd.debug("Generic action: " + myself.getName());
                
    }
    


    
    
    return myself;
}

