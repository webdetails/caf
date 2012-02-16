/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


wd.caf.impl.transitions = wd.caf.impl.transitions || {};

/**
 * @class
 */


wd.caf.transition = function( spec) {


    /**
     * Specific specs
     */
    
    var _spec = {
        name: "override",
        type: "transition"
    };

    var myself = wd.caf.entity($.extend({},_spec,spec));
    
    
    /**
     * Describes this interface
     * @name transition.init
     * @memberof wd.caf.transition
     */
    myself.getOverrides = function(){
        return {
            "spec": _spec,
            "init": "Init function",
            "setupTransition": "Specific transition initialization",
            "switchTo": "Function to call to switch to a specific panel"
            
        }
    }
   
   
    /**
     * 
     * Specific transition initialization
     * @name transition.switchTo
     * @memberof wd.caf.transition
     * @param panel to switch to
     */
    
    myself.setupTransition = function(panel){
        
        myself.log("generic setupTransition");
                
    }


        
    /**
     * Panel switching event
     * @name transitionEngine.switchPanel
     * @memberof wd.caf.transition
     * @param Origin panel
     * @param Destination panel
     */
    myself.switchPanel = function(fromPanel, toPanel){
        
        myself.log("beginPanelSwitch to - not done yet","warn");
    }
    
        
    
    return myself;
}

