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
wd.caf.impl.transitions.basicTransition = function(spec){
    
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name:"basic",
        cssFile: ["../js/transitions/transitionBasic.css"]
    }

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.transition(spec);
    
    

    /**
     * 
     * Specific transition initialization
     * @name transition.switchTo
     * @memberof wd.caf.transition
     * @param panel to switch to
     */
    
    myself.setupTransition = spec.setupTransition || function(panel){

        myself.log("Basic setup transition");
        
        /*
         *  Hide all panels
         */ 
        
        myself.caf.panelEngine.listPanels().map(function(panel){
           panel.getPlaceholder().addClass("basicTransitionHidden");
           panel.getPlaceholder().addClass('panelHidden');
        });
        
        
    }


        
    /**
     * Starts panel switching event
     * @name transitionEngine.switchTo
     * @memberof wd.caf.impl.transitions.basicTransition
     * @param Origin panel
     * @param Destination panel
     */
    myself.switchPanel = spec.switchPanel || function(fromPanel, toPanel){
        
        var lag = (Modernizr.csstransitions) ? 
                  {transition:50, panel:500} : 
                  {transition:0, panel:0};


        if(fromPanel){
            
            if ( toPanel !== fromPanel){
            
                myself.log("Switching from panel " + fromPanel.getDescription() + " to panel " + toPanel.getDescription());
            
                toPanel.getPlaceholder().removeClass('panelHidden');
            
                setTimeout( function(){
                    fromPanel.getPlaceholder().addClass("basicTransitionHidden");
                    toPanel.getPlaceholder().removeClass("basicTransitionHidden");
                }, lag.transition);

                setTimeout(function() {
                    fromPanel.getPlaceholder().addClass('panelHidden');
                },lag.transition + lag.panel);
            }
        }
        else{
            myself.log("Switching to panel " + toPanel.getDescription());
            toPanel.getPlaceholder().removeClass('panelHidden');
            setTimeout( function(){
                toPanel.getPlaceholder().removeClass("basicTransitionHidden");
            }, lag.transition);

        }
        
    }


        
    return myself;
        
};

    
wd.caf.registry.registerTransition(wd.caf.impl.transitions.basicTransition() );
    

    