/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/
/**
 * Adds the 'keybinds' module to the editor.
 * @mixin
 * @param {wd.caf.editor} myself The Editor object
 * @param {Object} spec Any configuration options you need to provide.
 */
wd.caf.modules.keybindEngine =  function(myself, spec) {


    /** @private*/
    var impl = myself.keybindEngine = {};
    
    var keybinds;
    
    
    /**
     * Gets the list of keybinds to implement
     * @name template.init
     * @memberof wd.caf.modules.keybindEngine
     */
    impl.listKeybinds = function(){
        
        if(!keybinds){
            // init panels
            keybinds = myself.getRegistry().listKeybinds().map(function(keybind){
                keybind.init(myself);
                return keybind;
            });
        }
        return keybinds;

    }



};

