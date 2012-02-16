/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */



wd.caf.impl.popups.basicPopup = function(spec){


    /**
     * Specific specs
     */
    var _spec = {
        name: "basic",
        description: "Basic Popup"        
    };

    /* Specific options for showing */
    var _options = {        
        header: "Header",
        content: "Default basic message",
        buttons:[]
    }


    var spec = $.extend({},_spec,spec);
    var options  = $.extend({},_options,options);
    var myself = wd.caf.popup($.extend({},_spec,spec));
    
    
    var $topContainer, $centerContainer, $bottomContainer;
    
    
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
     * Draws the content
     * @name basicPopup.drawContent
     * @memberof wd.caf.impl.popups.basicPopup
     * @param Object to control this popups' behavior
     */
    myself.drawContent = function(options){

        // Write: topPoup, contentPopup, bottomPopup
        
        var $ph = $("<div/>").addClass("basicPopupContainer");
        
        $topContainer = $("<div/>").addClass("cafBasicPopupTopContainer").appendTo($ph).append(myself.drawTopContent(options));
        $centerContainer = $("<div/>").addClass("cafBasicPopupCenterContainer").appendTo($ph).append(myself.drawCenterContent(options));
        $bottomContainer = $("<div/>").addClass("cafBasicPopupBottomContainer").appendTo($ph).append(myself.drawBottomContent(options));
        
        myself.log("here");
        return $ph;
    }
    
    
    /**
     * Draws the top content
     * @name basicPopup.drawTopContent
     * @memberof wd.caf.impl.popups.basicPopup
     */
    myself.drawTopContent = function(options){
        return options.header;
    }
    


    /**
     * Draws the center content
     * @name basicPopup.drawTopContent
     * @memberof wd.caf.impl.popups.basicPopup
     */
    myself.drawCenterContent = function(options){
        if(typeof options.content === "function"){
            // Call content function passing the current content
            return options.content(myself,options);
        }
        else{
            return options.content;
        }
    }
    
    /**
     * Draws the bottom content
     * @name basicPopup.drawTopContent
     * @memberof wd.caf.impl.popups.basicPopup
     */
    myself.drawBottomContent = function(options){
    
        var buttons = options.buttons;
        if($.isArray(buttons)){
        
            var $ph = $("<div/>").addClass("cafPopupBottomContent");
            myself.log("Found " + buttons.length + " buttons. Processing ","debug");
            
            buttons.map(function(button){
                
                // Check for validation function.
                var cssClass = "cafBasicPopupButton " + (button.cssClass||"");
                
                if(button.validate){
                    var v = button.validateFunction || options.validateFunction; // one of them must exist
                    if (!v()){
                        cssClass+=" cafBasicPopupNonValidated";
                    }
                }

                $("<div/>").addClass(cssClass)
                .data("button",button)
                .text(button.label)
                .appendTo($ph);
                
            })
            
            // Bind events
            $ph.on("click","div.cafBasicPopupButton:not(.cafBasicPopupNonValidated)",function(evt){
                var button = $(evt.target).data("button");
                myself.log("Clicked on button: " + button.label);
                button.callback.call(evt,myself, options);
            });
            
            
            // Trigger validations - TODO
            myself.validate(options,$ph)
            
            return $ph;
            
        }else{
            return;
        }
        
            
    
    }
    
    myself.validate = function(options, $ph){
        
        myself.log("Popup validation function");
        
        // Parameter is optional here
        $ph = $ph || $bottomContainer;
        
        var cls = ["cafBasicPopupNonValidated","cafBasicPopupValidated"];
        
        // Go through all the buttons and drigger the validate function
        
        $ph.find(".cafBasicPopupButton").each(function(i,b){
            
            var $button = $(b);
            var button = $button.data("button");
            
            
            
            if(button.validate){
                
                var v = button.validateFunction || options.validateFunction; // one of them must exist
                
                var idx = v()?1:0;
                // Add one, remove other
                if(!$button.hasClass(cls[idx])){
                    $button.addClass(cls[idx])
                }
                if($button.hasClass(cls[1-idx])){
                    $button.removeClass(cls[1-idx]);
                }
                
            }
            

            
            
        })
        

    }
    
    
    return myself;


}

wd.caf.registry.registerPopup( wd.caf.impl.popups.basicPopup() );



wd.caf.impl.popups.closePopup = function(spec){


    /**
     * Specific specs
     */
    var _spec = {
        name: "close",
        description: "Close Popup"        
    };

    /* Specific options for showing */
    var _options = {        
        header: "Header",
        content: "Default Close message",
        validateFunction: undefined,
        buttons:[{
            label: "Close",
            validate: false,
            cssClass: "popupClose", 
            callback: function(popup,options){
                myself.hide()
            },
            validateFunction: undefined
        }
        ]
    }


    spec = $.extend({},_spec,spec);
    var options  = $.extend({},_options,options);
    var myself = wd.caf.impl.popups.basicPopup($.extend({},_spec,spec));
    
    
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
    
    return myself;
}


wd.caf.registry.registerPopup( wd.caf.impl.popups.closePopup() );



wd.caf.impl.popups.okcancelPopup = function(spec){


    /**
     * Specific specs
     */
    var _spec = {
        name: "okcancel",
        description: "Ok/Cancel Popup"        
    };

    /* Specific options for showing */
    var _options = {        
        header: "Header",
        content: "Default Ok/Cancel message",
        validateFunction: undefined,
        okCallback: function(){
            myself.log("Action not defined","warn")
        },
        buttons:[
        {
            label: "Ok",
            validate: true,
            cssClass: "popupClose", 
            callback: function(popup,options){
                // Call function. if return true, hide.
                if(options.okCallback(popup,options)){
                    myself.hide();
                }
            },
            validateFunction: undefined
        },
        {
            
            label: "Cancel",
            validate: false,
            cssClass: "popupClose", 
            callback: function(popup,options){
                myself.hide()
            },
            validateFunction: undefined
        }
        ]
    }


    spec = $.extend({},_spec,spec);
    var options  = $.extend({},_options,options);
    var myself = wd.caf.impl.popups.basicPopup($.extend({},_spec,spec));
    
    
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
    
    return myself;
}


wd.caf.registry.registerPopup( wd.caf.impl.popups.okcancelPopup() );