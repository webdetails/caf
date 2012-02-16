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
wd.caf.impl.actions.popups = wd.caf.impl.actions.popups || {};



wd.caf.impl.actions.alertAction = function(spec){
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name: "sampleAction1",
        description: "Alert action",
        order: 100
    };

      
    var myself = wd.caf.action($.extend({},_spec,spec));
   
    
    /**
     * File operations execute action
     * @name executeAction
     * @memberof wd.caf.impl.actions.alertAction
     * 
     */
    myself.executeAction = function(){
        
        alert("Hello world");
    }
        
    return myself;
        
};

wd.caf.registry.registerAction(wd.caf.impl.actions.alertAction() );



wd.caf.impl.actions.notificationAction = function(spec){
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name: "notificationAction",
        description: "Notification action",
        order: 100
    };

      
    var myself = wd.caf.action($.extend({},_spec,spec));
   
    
    /**
     * File operations execute action
     * @name executeAction
     * @memberof wd.caf.impl.actions.alertAction
     * 
     */
    myself.executeAction = function(){
        
        myself.caf.notificationEngine.getNotification().success("Hello world")
    }
        
    return myself;
        
};

wd.caf.registry.registerAction(wd.caf.impl.actions.notificationAction() );



wd.caf.impl.actions.popupAction = function(spec){
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name: "popupAction",
        description: "Popup action",
        order: 100
    };

      
    var myself = wd.caf.action($.extend({},_spec,spec));
   
    
    /**
     * File operations execute action
     * @name executeAction
     * @memberof wd.caf.impl.actions.alertAction
     * 
     */
    myself.executeAction = function(){
        
        myself.caf.popupEngine.getPopup("close").show({
            header:"Popup",
            content:"Hello world"
        });
    }
        
    return myself;
        
};

wd.caf.registry.registerAction(wd.caf.impl.actions.popupAction() );
