/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/
/**
 * Adds the 'panels' module to the editor.
 * @mixin
 * @param {wd.caf.editor} myself The Editor object
 * @param {Object} spec Any configuration options you need to provide.
 */
wd.caf.modules.panelEngine =  function(myself, spec) {


    /** @private*/
    var impl = myself.panelEngine = {};
    
    var panels;
    var selectedPanel;
    
    
    
    /**
     * Start the panel engine, initializing the panels
     * @name template.init
     * @memberof wd.caf.modules.panelEngine
     */
    impl.start = function(){
            

        // Select the first panel
        
        var panels = impl.listPanels();
        if (panels.length > 0) {
            impl.selectPanel(panels[0]);
        }
            
        
    }
    
    
    /**
     * Gets the list of panels to implement
     * @name template.listPanels
     * @memberof wd.caf.modules.panelEngine
     */
    impl.listPanels = function(){
        
        if(!panels){
            // init panels
            panels = myself.getRegistry().listPanels().map(function(panel){
                panel.init(myself);
                return panel;
            });
        }
        return panels;
    }

    
    /**
     * Gets the specific panel
     * @name template.getPanel
     * @memberof wd.caf.modules.panelEngine
     */
    impl.getPanel = function(name){
        
        return myself.getRegistry().getPanel(name);
                
    }


    /**
     * Gets the selected panel
     * @name template.getPanel
     * @memberof wd.caf.modules.panelEngine
     */
    impl.getSelectedPanel = function(){
        
        return selectedPanel;
                
    }

    /**
     * Selects a panel
     * @name template.selectPanel
     * @memberof wd.caf.modules.panelEngine
     */

    impl.selectPanel = function(toPanel){
        
        var fromPanel = selectedPanel;


        if(selectedPanel){
            selectedPanel.getPlaceholder().removeClass("selectedPanel");
            
            var $panelLink = selectedPanel.getPanelLink();
            if(typeof $panelLink !== "undefined"){
                $panelLink.removeClass("cafPanelSelected");
            }
        }
        
        selectedPanel = toPanel;


        selectedPanel.getPlaceholder().addClass("selectedPanel");
        var $panelLink = selectedPanel.getPanelLink();
        
        wd.log("Test");
        
        if(typeof $panelLink !== "undefined"){
            $panelLink.addClass("cafPanelSelected");
        }

        // Notify transition engine
        myself.transitionEngine.switchPanel(fromPanel,toPanel);

        
    }
    
    
    impl.reset = function (){
        panels = undefined;
        selectedPanel = undefined;
    }


};

