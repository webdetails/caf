/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/
/**
 * Adds the 'notifications' module to the editor.
 * @mixin
 * @param {wd.caf.editor} myself The Editor object
 * @param {Object} spec Any configuration options you need to provide.
 */
wd.caf.modules.notificationEngine =  function(myself, spec) {


    /** @private*/
    var impl = myself.notificationEngine = {};
    
    var notification;
    
    
    
    /**
     * Sets up transition engine
     * @name transitionEngine.start
     * @memberof wd.caf.modules.transitionEngine
     */
    impl.start = function(){
        
        notification = myself.getRegistry().getNotification(myself.options.notification);
        
        notification.init(myself);
        notification.applyCss();
        notification.setupNotification();



    }


    
    /**
     * Gets the specific notification
     * @name template.getNotification
     * @memberof wd.caf.modules.notificationEngine
     */
    impl.getNotification = function(){
        
        return notification;
                
    }


};

