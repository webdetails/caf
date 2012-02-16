/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/
/**
 * Adds the 'popups' module to the editor.
 * @mixin
 * @param {wd.caf.editor} myself The Editor object
 * @param {Object} spec Any configuration options you need to provide.
 */
wd.caf.modules.popupEngine =  function(myself, spec) {


    /** @private*/
    var impl = myself.popupEngine = {};
    
    var popups;
    
    /* private stuff*/
    var $popup;
    var $container;
    var marginTop = 100;
    var visible = false;
    
    /**
     * Start the popup engine, initializing the popups
     * @name popupEngine.init
     * @memberof wd.caf.modules.popupEngine
     */
    impl.start = function(){
            

        // Get the placeholder for the popups and apply keybinds
        
        var _$bg = $("<div/>").addClass("cafPopupBackground");
        $container = $("<div/>").addClass("cafPopupContent");
        
        $popup = $("<div/>").addClass("cafPopup").append(
            _$bg.append($container)
            ).appendTo($("body"));
        
        
        // Setup keybinds
        _$bg.on("click",function(evt){
            if (evt.target == _$bg.get(0)){
                wd.debug("Closing popup");
                impl.hide();
            }
        });


        // Keybinding esc
        $(document).bind( 'keydown', 'esc', function(){
            if(impl.isVisible()){
                wd.debug("Pressed esc, closing popup");
                impl.hide();
                
            }
        } );

        // Make sure it's initialized
        impl.listPopups();
            
        
    }
    
    
    /**
     * Shows the popup
     * @name popup.show
     * @memberof wd.caf.modules.popupEngine
     * @param wd.caf.popup
     */
    impl.show = function(panel,options){
        
        wd.debug("Popup show action");
        
        // Add content to container
        $container.empty().append(panel.drawContent(options));
        
        // Set correct popup position
        $popup.show();
        $popup.height($(document).height());
        $container.css('margin-top', $(window).scrollTop() + marginTop);
        
        $popup.addClass("cafPopupVisible");
        
        
        visible = true;
        
    }

    
    
    /**
     * Hides the popup
     * @name popup.draw
     * @memberof wd.caf.modules.popupEngine
     */
    impl.hide = function(){

        //wd.log("Hide popup");
        $popup.removeClass("cafPopupVisible");
        if (Modernizr.csstransitions){
            setTimeout(function(){
                $popup.hide();
            },300)
        }
        else{        
            $popup.hide();
        }
        
        visible = false;
    }

    
    /**
     * Checks if popup is visible
     * @name popup.draw
     * @memberof wd.caf.modules.popupEngine
     */
    impl.isVisible = function(){

        return visible;
    }


    
    
    /**
     * Gets the list of popups to implement
     * @name popupEngine.listPopups
     * @memberof wd.caf.modules.popupEngine
     */
    impl.listPopups = function(){
        
        if(!popups){
            // init popups
            popups = wd.caf.registry.listPopups().map(function(popup){
                popup.init(myself);
                return popup;
            });
        }
        return popups;

    }


    
    /**
     * Gets the specific popup
     * @name popupEngine.getPopup
     * @memberof wd.caf.modules.popupEngine
     */
    impl.getPopup = function(name){
        
        return wd.caf.registry.getPopup(name);
                
    }
    
    
    

};

