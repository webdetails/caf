/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


/**
 * @class
 */

wd.caf.entity = function( spec) {
    
    var _spec = {
        name: "entity",
        type: "entity",
        order: 100,
        cssFile: undefined,
        description: "override description"
    };
    
    
    spec = $.extend({},_spec,spec);

    var myself = {};
    
    
    /**
     * Defaults
     * @override 
    */
    var _defaults = {};
    
    
    /**
     * Calls the template initialization
     * @name template.init
     * @memberof wd.caf.template
     * @override
     */

    myself.init = function(caf){
        
        myself.log("Generic entity init","debug");
        myself.caf = caf;
        
        
    }
    
    /**
     * Get the name of the entity
     * @name entity.getName
     * @memberof wd.caf.entity
     */
    
    myself.getName = function(){
        
        return spec.name;
        
    }

    
    /**
     * Get the type of the entity
     * @name entity.getType
     * @memberof wd.caf.entity
     */
    myself.getType = function(){
        
        return spec.type;
    }
    
    
    /**
     * 
     * Gets entity description description
     * @name entity.getDescription
     * @memberof wd.caf.entity
     * 
     */
    
    myself.getDescription = function(){
        
        return spec.description;
                
    }

        
    /**
     * Get the entity order, for visual / grouping effects
     * @name entity.getOrder
     * @memberof wd.caf.entity
     */
    myself.getOrder = function(){
        
        return spec.order;
    }
    
    /**
     * Message logs with the current class name
     * @name entity.log
     * @memberof wd.caf.entity
     * @param {string} 
     * @param {string} Log level, defaults to info
     */
    myself.log = function(message,type){
        
        wd.log("["+ myself.getType() + "."+ myself.getName()  +"] " + message , type||"debug")
    }
    
    
    /**
     * Applies a specific css, useful for some entities
     * @name entity.applyCss
     * @memberof wd.caf.entity
     */

    myself.applyCss = function(){
        
        if(!spec.cssFile){
            return;
        }
        
        myself.log("Applying template: " + spec.cssFile, "info");
        
        var cssFiles = $.isArray(spec.cssFile)?spec.cssFile:[spec.cssFile];
        
        cssFiles.map(function(file){
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", file);
        
            if (typeof fileref!="undefined"){
                document.getElementsByTagName("head")[0].appendChild(fileref)
            }
            
        });
        
        
    }

    /**
     * Sets entity defaults
     * @name entity.setDefaults
     * @memberof wd.caf.entity
     * @param {Object} Object with the defaults for this entity. Can be a Function
     */
    myself.setDefaults = function(defaults) {
    
        if (typeof defaults == 'function') {
            _defaults = defaults;
        }
        else{
            _defaults = jQuery.extend(true,{},_defaults,defaults);
        }
    };


    /**
     * Gets entity defaults, evaluating if it's a function
     * @name entity.getDefaults
     * @memberof wd.caf.entity
     * @type Object 
     */
    myself.getDefaults = function(){
        
        return typeof _defaults === "function" ? _defaults() : jQuery.extend(true,{},_defaults);
        
    }


    return myself;
}

