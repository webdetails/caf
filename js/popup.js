/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


wd.caf.impl.popups = wd.caf.impl.popups || {};

/**
 * @class
 */

wd.caf.popup = function(spec) {


    /**
     * Specific specs
     */
    
    var _spec = {
        name: "override",
        type: "popup",
        order: 50,
        description: "Basic popup"
    };

    /* private stuff*/
    var $popup;
    var $container;
    var marginTop = 100;
    var $content; // Content of the popup

    var visible = false;
    
    spec = $.extend({},_spec,spec);
    var myself = wd.caf.entity(spec);
    
    
    /**
     * Describes this interface
     * @name popup.init
     * @memberof wd.caf.popup
     */
    myself.getOverrides = function(){
        
        return {
            "spec": _spec,
            "init": "Init function",
            "description": "Logo placeholder",
            "drawContent": "Popup paint",
            "show": "Shows the popup with the specified content",
            "hide": "Hides the popup"
        }
    }




    /**
     * Draws the content
     * @name popup.drawContent
     * @memberof wd.caf.popup
     */
    myself.drawContent = spec.drawContent || function(){

        myself.log("Here");

        return $content;
    }



    /**
     * Shows the popup
     * @name basicPopup.show
     * @memberof wd.caf.impl.popups.basicPopup
     * @param Object to control this popups' behavior. eg: {content: "Test",buttons:[...]}
     */
    myself.show = function(options){
        
         
        options = $.extend({},_options,options);
        
        myself.log("Popup show action");
        myself.caf.popupEngine.show(myself,options);
        
    }



    /**
     * Hides the popup
     * @name popup.draw
     * @memberof wd.caf.popup
     */
    myself.hide = function(){

        myself.log("Hide popup");
        myself.caf.popupEngine.hide();
    }

    return myself;
}

