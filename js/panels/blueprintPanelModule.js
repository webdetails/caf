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
wd.caf.modules.blueprintPanelModule =  function(myself, spec) {

    
    /**
     * Generates blueprint structure
     * @name panel.getColor
     * @memberof wd.caf.panel
     */
    myself.generateBlueprintStructure = function(){
        
        return $("<div class='container'/>");
    }

}