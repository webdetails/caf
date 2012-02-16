/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/




/* Specific registry and  application call */


// Register my specific panels
            
            
var application = wd.caf.editor({
    name: 'Community Application Framework', 
    container:"#caf", 
    template:'default', 
    transition: "basic"
});
            
// Launch the app on page ready
$(function(){
    application.init();
                
});
