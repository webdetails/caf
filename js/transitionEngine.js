/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/
/**
 * Adds the 'transitions' module to the editor.
 * @mixin
 * @param {wd.caf.editor} myself The Editor object
 * @param {Object} spec Any configuration options you need to provide.
 */
wd.caf.modules.transitionEngine =  function(myself, spec) {


    /** @private*/
    var impl = myself.transitionEngine = {};
    var transition;


    /**
     * Sets up transition engine
     * @name transitionEngine.start
     * @memberof wd.caf.modules.transitionEngine
     */
    impl.start = function(){
            

        transition = myself.getRegistry().getTransition(myself.options.transition);
        
        transition.init(myself);
        transition.applyCss();
        transition.setupTransition();



    }
    
    
    /**
     * Gets current transition
     * @name transitionEngine.getTransition
     * @memberof wd.caf.modules.transitionEngine
     */
    impl.getTransition = function(){
        
        return transition;
    }
    

    /**
     * Starts panel switching event. Transition is responsable for anycallback here
     * @name transitionEngine.switchPanel
     * @memberof wd.caf.modules.transitionEngine
     * @param Origin panel
     * @param Destination panel
     */
    impl.switchPanel = function(fromPanel, toPanel){
        
        impl.getTransition().switchPanel(fromPanel, toPanel);
    }
    
    
    /**
     * Ends panel switching event
     * @name transitionEngine.beginPanelSwitch
     * @memberof wd.caf.modules.transitionEngine
     * @param Origin panel
     * @param Destination panel
     */    
    impl.endPanelSwitch = function(fromPanel, toPanel){
        
        impl.getTransition().endPanelSwitch(fromPanel, toPanel);
    }

    
};
