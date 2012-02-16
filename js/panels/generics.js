/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/


/**
 * UnderConstruction panel
 * @class
 *
 */
wd.caf.impl.panels.underConstruction = function(spec){
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name: "underConstruction",
        description: "Under Construction",
        order: 10,
        color: "red"
    };


    spec = $.extend({},_spec,spec);
    var myself = wd.caf.panel(spec);
      
      
    /**
     * Describes this interface
     * @name panel.init
     * @memberof wd.caf.panel
     */
    myself.draw = spec.draw || function($ph){
        
        var d = $('<div/>').addClass("underConstruction").text("Under Construction");
        $ph.append(d);
    }
      

    return myself;
        
};


/**
 * Div content panel
 * @class
 *
 */
wd.caf.impl.panels.divContent = function(spec){
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name: "divContent",
        description: "Div Content",
        order: 50,
        color: "cyan",
        selector: undefined // replace me
    };

    spec = $.extend({},_spec,spec);    
    var myself = wd.caf.panel(spec);
      
      
    /**
     * Describes this interface
     * @name panel.init
     * @memberof wd.caf.panel
     */
    myself.draw = spec.draw || function($ph){
        
        $(myself.getSelector()).detach().addClass("cafDivContentPanel").appendTo($ph);
        
    }
      
      
    myself.getSelector = function(){
        return spec.selector;
    }

    return myself;
        
};



/**
 * External div content panel
 * @class
 *
 */
wd.caf.impl.panels.externalDivContent = function(spec){
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name: "externalDivContent",
        description: "External Div Content",
        order: 50,
        color: "cyan",
        url: undefined, // replace me
        selector: "" // If undefined, the entire page is inserted
    };

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.impl.panels.divContent(spec);
      
      
    /**
     * Describes this interface
     * @name panel.init
     * @memberof wd.caf.panel
     */
    myself.draw = spec.draw || function($ph){
        
        myself.log("Loading external page: " + myself.getUrl()+" " + myself.getSelector())
        $("<div/>").addClass("cafExternalDivContentPanel").load(myself.getUrl()+" " + myself.getSelector()).appendTo($ph);
        
    }
      
   
    myself.getUrl = function(){
        return spec.url;
    }
    

    return myself;
              


};


/**
 * Iframe content panel
 * @class
 *
 */
wd.caf.impl.panels.iframeContent = function(spec){
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name: "iframeContent",
        description: "Iframe Content",
        order: 50,
        color: "cyan",
        url: undefined // replace me
    };

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.panel(spec);
      
    
    /**
     * Describes this interface
     * @name panel.init
     * @memberof wd.caf.panel
     */
    myself.draw = spec.draw || function($ph){
        
        var iframe = $("<iframe/>").addClass("cafIframeContentPanel");
        
        iframe.attr("src",myself.getUrl())
        .load(function(){iframe.iframeAutoHeight({debug:true})})
        .appendTo($ph);
        
    }
    
    
      
    myself.getUrl = function(){
        return spec.url;
    }

    return myself;
        
};



/**
* panelKeybind Keybind
* @class
*
*/
wd.caf.impl.keybinds.panelKeybind = function(spec){
    
    /**
 * Specific specs
 */
    
    var _spec = {
        name: "genericPanelKeybind",
        description: "Generic Panel Keybind"
    };


    spec = $.extend({},_spec,spec);
    var myself = wd.caf.keybind(spec);

    myself.executeKeybind = spec.executeKeybind || function(){
        
        myself.log("Calling execution for keybind " + myself.getName());
        myself.caf.panelEngine.getPanel(spec.name).select();
        
    }
    
    return myself;
    
}