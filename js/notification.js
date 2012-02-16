/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


wd.caf.impl.notifications = wd.caf.impl.notifications || {};

/**
 * @class
 */


wd.caf.notification = function(spec) {


    /**
     * Specific specs
     */
    
    var _spec = {
        name: "override",
        type: "notification",
        order: 100,
        description: "override description"
    };

    var myself = wd.caf.entity($.extend({},_spec,spec));
    
    
    /**
     * Describes this interface
     * @name notification.init
     * @memberof wd.caf.notification
     */
    myself.getOverrides = function(){
        return {
            "spec": _spec,
            "init": "Init function",
            "description": "Logo placeholder",
            "notify": "Sends a noticiation, optionally specifying a type",
            "error": "Sends a error notification",
            "warn": "Sends a warn notification",
            "info": "Sends a info notification",
            "success": "Sends a success notification",
            "debug": "Sends a debug notification"
            
            
        }
    }
    


    /**
     * 
     * Calls notify
     * @name notification.draw
     * @memberof wd.caf.notification
     * @param Message
     * @param level: error, info, warn, debug, success
     * 
     */
    
    myself.notify = function(msg, level){
        
        wd.warn("Generic notification, override me: " + msg);
                
    }
    

    /**
     * 
     * Calls success notification
     * @name notification.success
     * @memberof wd.caf.notification
     * @param Message
     * 
     */

    myself.success = function(msg){
        
        return myself.notify(msg,"success");
                
    }
    
    /**
     * 
     * Calls info notification
     * @name notification.info
     * @memberof wd.caf.notification
     * @param Message
     * 
     */

    myself.info = function(msg){
        
        return myself.notify(msg,"info");
                
    }
    
    
    /**
     * 
     * Calls warn notification
     * @name notification.warn
     * @memberof wd.caf.notification
     * @param Message
     * 
     */

    myself.warn = function(msg){
        
        return myself.notify(msg,"warn");
                
    }
    
    /**
     * 
     * Calls debug notification
     * @name notification.debug
     * @memberof wd.caf.notification
     * @param Message
     * 
     */


    myself.debug = function(msg){
        
        return myself.notify(msg,"debug");
                
    }
    
    
    /**
     * 
     * Calls error notification
     * @name notification.error
     * @memberof wd.caf.notification
     * @param Message
     * 
     */

    myself.error = function(msg){
        
        return myself.notify(msg,"error");
                
    }
    
    return myself;
}

