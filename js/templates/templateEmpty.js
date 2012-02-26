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
wd.caf.impl.templates.emptyTemplate = function(spec){
    
    
    /**
     * Specific specs
     */
    var _spec = {
        name:"empty",
        cssFile: undefined,
        createMainSections: function() {},
        addActions: function() {},
        addPanels: function() {
          var panels = myself.caf.panelEngine.listPanels();
          panels.map(function(p){
            myself.drawPanelOnContainer(p);
          });
        },
        drawPanelOnContainer: function(panel) {
          panel.setPlaceholder($ph);
        }
    },
    /* We need a fake placeholder to add stuff to,
     * just so there's no random breakage because
     * stuff expects a placeholder that's not there.
     */
    $ph = $("<div>");

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.template(spec);
        
        
    return myself;
        
};

    
wd.caf.registry.registerTemplate(wd.caf.impl.templates.emptyTemplate() );
    

    
