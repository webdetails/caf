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
wd.caf.impl.templates.simpleTemplate = function(spec){
    
    
    /**
     * Specific specs
     */
    var _spec = {
        name:"simple",
        cssFile: undefined

    },
    
    
    /* We need a fake placeholder to add stuff to,
     * just so there's no random breakage because
     * stuff expects a placeholder that's not there.
     */
    $ph = $("<div>");

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.template(spec);
        
        
        
    /**
     * Main section will just be a div
     *
     **/
    myself.createMainSections = function(){
        
        var wrapper = $('<div class="simpleTemplateWrapper"></div>');
        myself.$panelsContainer = $('<div class="simpleTemplatePanelsContainer"></div>')
        .appendTo(wrapper);
        
        
        return wrapper;  
        
    };


    /**
     *  Override actions
     */
    myself.addActions = function() {
        
    // Nothing, we don't want links there
        
    };
        
    
    /**
     * Panels will add themselves to the main container
     *
     **/
    myself.addPanels = function() {
        var panels = myself.caf.panelEngine.listPanels();
        panels.map(function(p){
            myself.drawPanelOnContainer(p);
        });
    };
    
    
    /**
     * Draws the panel on the template - as simple as it gets
     * @name template.drawPanelOnContainer
     * @memberof wd.caf.template
     * @param Panel to draw
     */

    myself.drawPanelOnContainer = spec.drawPanelOnContainer || function(panel){
    
    
        var container = $('<div class="panelContainer"></div>').appendTo(myself.$panelsContainer);
        myself.$panelsContainer.append(panel.draw(container));
        panel.setPlaceholder(container);

    }
    
        
    return myself;
        
};

    
wd.caf.registry.registerTemplate(wd.caf.impl.templates.simpleTemplate() );
    

    
