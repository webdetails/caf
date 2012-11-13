/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/




/* Specific registry and  application call */


// Register my specific panels
            
            
var application = wd.caf.application({
    name: 'Community Application Framework', 
    container:"#caf", 
    template:'default', 
    transition: "basic"
});


wd.caf.impl.components.tryMe = function(spec) {


    /**
     * Specific specs
     */
    
    var _spec = {
        name: "appItem",
        type: "appItem",
        order: 100,
        description: "override description"
    };

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.component(spec);
    
    
    /**
     * Describes this interface
     * @name panel.getOverrides
     * @memberof wd.caf.panel
     */
    myself.getOverrides = function(){
        return {
            "spec": _spec,
            "init": "Init function",
            "description": "Logo placeholder",
            "draw($ph)": "Draw the application icon on the specified place"
        }
    }
        
    
    /**
     * Draws the panel
     * @name panel.draw
     * @memberof wd.caf.panel
     */
    myself.draw = spec.draw || function($ph){
        
        var container = $('<div/>').addClass("tryMeContainer").insertAfter($ph),
            textArea  = $ph.addClass("tryMeTextArea").appendTo(container),
            button    = $('<div/>').addClass("tryMeButton").appendTo(container);
             
        button.text('tryMe');
        button.click( function (e) {
            try{
                eval( textArea.val());
            }
            catch(e){
                alert("Error: " + e);
            }  
        });
    
    }
    


    
    return myself;
}
