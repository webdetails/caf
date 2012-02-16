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
wd.caf.impl.notifications.defaultNotification = function(spec){
    
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name:"default",
        cssFile: ["../js/notifications/notificationDefault.css"]
    }

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.notification(spec);
    
    
    var notificationDiv;
    

    /**
     * 
     * Specific notification initialization
     * @name notification.setupNotification
     * @memberof wd.caf.impl.notifications.defaultNotification
     *
     */
    
    myself.setupNotification = spec.setupNotification || function(){

        myself.log("Default setup notification");
     
     
        notificationDiv = $("<div/>").addClass("notificationDefault").appendTo("body");
     

    }
    
    
    myself.notify = spec.notify || function(msg, level){
        
        level = level || "info"
        
        notificationDiv.empty().text(msg).removeClass("error warn info debug success").addClass(level+" basicNotificationShown");
        
        // Hide it
        setTimeout(function(){
            notificationDiv.removeClass("basicNotificationShown");
        },2000);
        
        
    }

    

        
    return myself;
        
};

    
wd.caf.registry.registerNotification(wd.caf.impl.notifications.defaultNotification() );
    
