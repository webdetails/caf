/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/



/**
 * @class
 *
 */
wd.caf.impl.transitions.basicTransition = function(){
    
        
    var myself = wd.caf.transition({
        name:"basic",
        cssFile: ["../js/transitions/transitionBasic.css"]
    });
    

    /**
     * 
     * Specific transition initialization
     * @name transition.switchTo
     * @memberof wd.caf.transition
     * @param panel to switch to
     */
    
    myself.setupTransition = function(panel){

        myself.log("Basic setup transition");
        
        /*
         *  Hide all panels
         */ 
        
        myself.caf.panelEngine.listPanels().map(function(panel){
           panel.getPlaceholder().addClass("basicTransitionHidden"); 
        });
    }


        
    /**
     * Starts panel switching event
     * @name transitionEngine.switchTo
     * @memberof wd.caf.impl.transitions.basicTransition
     * @param Origin panel
     * @param Destination panel
     */
    myself.switchPanel = function(fromPanel, toPanel){


        if(fromPanel){
            myself.log("Switching from panel " + fromPanel.getDescription() + " to panel " + toPanel.getDescription());
            fromPanel.getPlaceholder().addClass("basicTransitionHidden");
            toPanel.getPlaceholder().removeClass("basicTransitionHidden");
            
        }
        else{
            myself.log("Switching to panel " + toPanel.getDescription());
            toPanel.getPlaceholder().removeClass("basicTransitionHidden");
        }
        
    }


    
    /**
     * Ends panel switching event
     * @name transitionEngine.switchToCallback
     * @memberof wd.caf.impl.transitions.basicTransition
     * @param Origin panel
     * @param Destination panel
     */    
    myself.switchPanelCallback = function(fromPanel, toPanel){
        
       myself.log("switchToCallback to - not done yet","warn");
    }

        
    return myself;
        
};

    
wd.caf.registry.registerTransition(wd.caf.impl.transitions.basicTransition() );
    

    