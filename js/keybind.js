/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


wd.caf.impl.keybinds = wd.caf.impl.keybinds || {};

/**
 * @class
 */


wd.caf.keybind = function(spec) {


    /**
     * Specific specs
     */
    
    var _spec = {
        name: "override",
        type: "keybind",
        order: 100,
        key: "Ctrl-0",
        description: "override description"
    };

    var myself = wd.caf.entity($.extend({},_spec,spec));
    
    
    /**
     * Describes this interface
     * @name keybind.getOverrides
     * @memberof wd.caf.keybind
     */
    myself.getOverrides = function(){
        return {
            "spec": _spec,
            "init": "Init function",
            "key": "Shortcut",
            "executeKeybind": "Function to call to execute the shortcut",
            "description": "Logo placeholder"
            
        }
    }
    

    /**
     * 
     * Gets entity key key
     * @name entity.getKey
     * @memberof wd.caf.entity
     * 
     */
    
    myself.getKey = function(){
        
        return spec.key;
                
    }


    /**
     * 
     * Calls bind
     * @name keybind.bind
     * @memberof wd.caf.keybind
     * 
     */
    
    myself.bind = function(){
        
        wd.debug("Binding key " +  spec.key + " to keybind " + myself.getName());
        $(document).bind( 'keydown', spec.key , function(){
            myself.executeKeybind()
            } );
    }
    

    /**
     * 
     * Calls executeKeybind
     * @name keybind.executeKeybind
     * @memberof wd.caf.keybind
     * 
     */
    
    myself.executeKeybind = function(){
        
        myself.log("Generic keybind: " + myself.getName());
                
    }
    

    

    
    
    return myself;
}

