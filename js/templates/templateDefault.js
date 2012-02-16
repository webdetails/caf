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
wd.caf.impl.templates.defaultTemplate = function(spec){
    
    
    /**
     * Specific specs
     */
    
    var _spec = {
        name:"default",
        cssFile: ["../js/templates/templateDefault.css"]
    }

    spec = $.extend({},_spec,spec);
    var myself = wd.caf.template(spec);
        
        
    return myself;
        
};

    
wd.caf.registry.registerTemplate(wd.caf.impl.templates.defaultTemplate() );
    

    