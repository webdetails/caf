/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**
 * CDE namespace
 * @namespace
 */


wd.caf = wd.caf || {};



/**
 * CDE Modules namespace
 * @namespace
 */
wd.caf.modules = wd.caf.modules || {};

/**
 * CDE imp namespace
 * @namespace
 */
wd.caf.impl = wd.caf.impl || {};



/**
 *
 * Main CDE editor class
 * @constructor
 * @mixes wd.caf.modules.panelEngine
 * @mixes wd.caf.modules.templateEngine
 * @mixes wd.caf.modules.actionEngine
 * 
 */
wd.caf.application = function(spec) {

    var defaults = {
        
        name: "CDE",
        container: undefined , // has to be passed
        template: "default",
        transition: "basic",
        notification: "default",
        actions: undefined, // all
        panels: undefined // all
        
    };

    var myself = {},
    state;
    
    myself.options = $.extend({},defaults,spec);

    
    
    function construct(){
        wd.info("Initializing application: " + myself.options.name);
    };



    myself.init = function()  {
        
        /** Placeholder for CAF */
        myself.$ph = $(myself.options.container); 
        
        window.title = myself.options.name;
        
        // Apply mixins
        wd.caf.modules.templateEngine(myself);
        wd.caf.modules.transitionEngine(myself);
        wd.caf.modules.actionEngine(myself);
        wd.caf.modules.keybindEngine(myself);
        wd.caf.modules.popupEngine(myself);
        wd.caf.modules.panelEngine(myself);
        wd.caf.modules.notificationEngine(myself);


        myself.templateEngine.start();
        myself.transitionEngine.start();
        myself.popupEngine.start();
        myself.panelEngine.start();
        myself.notificationEngine.start();
        
        // Bind keys
        
        myself.keybindEngine.listKeybinds().map(function(keybind){
            keybind.bind();
            
        });
        
        
        
    };
    construct();
    return myself;
};

