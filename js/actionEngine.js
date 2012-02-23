/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/
/**
 * Adds the 'actions' module to the editor.
 * @mixin
 * @param {wd.caf.editor} myself The Editor object
 * @param {Object} spec Any configuration options you need to provide.
 */
wd.caf.modules.actionEngine =  function(myself, spec) {


    /** @private*/
    var impl = myself.actionEngine = {};
    
    var actions;
    
    
    /**
     * Gets the list of actions to implement
     * @name template.init
     * @memberof wd.caf.modules.actionEngine
     */
    impl.listActions = function(){
        
        if(!actions){
            // init panels
            actions = myself.getRegistry().listActions().map(function(action){
                action.init(myself);
                return action;
            });
        }
        return actions;

    }

    /**
     * Gets the specific action
     * @name template.getAction
     * @memberof wd.caf.modules.actionEngine
     */
    impl.getAction = function(name){
        
        return myself.getRegistry().getAction(name);
                
    }



};

