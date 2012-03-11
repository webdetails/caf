/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


wd.caf.impl.templates = wd.caf.impl.templates || {};

/**
 * @class
 */


wd.caf.template = function( spec) {


    /**
     * Specific specs
     */
    
    var _spec = {
        name: "override",
        cssFile: undefined,
        type: "template"
    };

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.entity(spec);
    
    
    /**
     * Describes this interface
     * @name template.init
     * @memberof wd.caf.template
     */
    myself.getOverrides = function(){
        return {
            "spec": _spec,
            "init": "Init function",
            "draw": "Function to call to draw the main template",
            "drawPanelOnContainer": "Function to draw an individual panel on container",
            "$logo": "Logo placeholder",
            "$title": "Title placeholder",
            "$actions": "Actions placeholder",
            "$panels": "Panel switcher placeholder",
            "$panelsContainer": "Panels placeholder"
            
        }
    }
    


    /**
     * 
     * Calls template draw
     * @name template.draw
     * @memberof wd.caf.template
     * 
     */
    myself.draw = spec.draw || function(){
        
        myself.log("Generic template draw on " + myself.caf.$ph ,"debug");
        
        
        // Create the main sections
        
        var wrapper = myself.createMainSections();
        
        myself.addActions();
        myself.addPanels();
        
        //myself.addKeyBinds();
        
        
        myself.caf.$ph.append(wrapper);
    }


    /**
     * Creates the main structure of the template
     * @name createMainSections
     * @memberof wd.caf.template
     * 
     */
    myself.createMainSections = spec.createMainSections || function(){
        
        
        var wrapper = $('<div class="templateWrapper"></div>');
        var header  = $('<div class="templateHead"></div>').appendTo(wrapper);

        myself.$logo = $('<div class="templateLogo"></div>').appendTo(header);
        myself.$title = $('<div class="templateTitle"></div>').appendTo(header);
        myself.$actions = $('<div class="templateActions"></div>').appendTo(header);
        myself.$panels = $('<div class="templatePanels"></div>').appendTo(header);
  
        header.append($('<div class="templateHShadow"></div>'));
        
        myself.$panelsContainer = $('<div class="templatePanelsContainer"></div>')
        .appendTo(wrapper);
        
        
        
        return wrapper;
        
        
    }
    
    
    /**
     * Adds the actions to the UI
     * @name addActions
     * @memberof wd.caf.template
     * 
     */
    myself.addActions = spec.addActions || function(){
        
        var actions = myself.caf.actionEngine.listActions();
        
        actions.map(function(action){
            $('<div class="cafAction cafLinks"></div>').text(action.getDescription())
            .data("action",action)
            .appendTo(myself.$actions);
        });
        
        // bind actions
        myself.$actions.on("click",".cafAction",function(event){
            $(this).data("action").executeAction();
        });
        
    }
        

    
    /**
     * Adds the panels to the UI
     * @name addPanels
     * @memberof wd.caf.template
     * 
     */
    myself.addPanels = spec.addPanels || function(){
        
        var panels = myself.caf.panelEngine.listPanels();
        
        // Build the links and draw them;
        
        panels.map(function(panel){
            $('<div class="cafPanel cafLinks"></div>').text(panel.getDescription())
            .data("panel",panel)
            .appendTo(myself.$panels);
            
            
            
            myself.drawPanelOnContainer(panel);
        });
        
        // bind panels
        myself.$panels.on("click",".cafPanel",function(event){
            var panel = $(this).data("panel");
            myself.log("Clicked on Panel " + panel.getName());
            panel.select();
        });
        
        
    }

    
        
    /**
     * Draws the panel on the template
     * @name template.drawPanelOnContainer
     * @memberof wd.caf.template
     * @param Panel to draw
     */

    myself.drawPanelOnContainer = spec.drawPanelOnContainer || function(panel){
    
    
        var container = $('<div class="panelContainer"></div>').appendTo(myself.$panelsContainer);

        $('<div class="panelTitle"></div>').text(panel.getDescription()).css("background-color",panel.getColor())
        .appendTo(container);
        myself.$panelsContainer.append(panel.draw(container));

        panel.setPlaceholder(container);


    }
    
    
    
    return myself;
}

