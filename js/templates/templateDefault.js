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
wd.caf.impl.templates.defaultTemplate = function(){
    
        
    var myself = wd.caf.template({
        name:"default",
        cssFile: ["../js/templates/templateDefault.css"]
    });

        
    return myself;
        
};

    
wd.caf.registry.registerTemplate(wd.caf.impl.templates.defaultTemplate() );
    

    