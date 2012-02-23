/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/
/**
 * Adds the 'templates' module to the editor.
 * @mixin
 * @param {wd.caf.editor} myself The Editor object
 * @param {Object} spec Any configuration options you need to provide.
 */
wd.caf.modules.templateEngine =  function(myself, spec) {


    /** @private*/
    var impl = myself.templateEngine = {};
    var template;
    var popup;

    /**
     * @name templateEngine.start
     * @memberof wd.caf.modules.templateEngine
     */
   

    impl.start = function(){
            
        template = myself.getRegistry().getTemplate(myself.options.template);
        if(!template){
            wd.log( "Template '" + myself.options.template +"' not found. Can't continue"  ,"exception");
            throw exception /* TODO: How to best throw exceptions? */
        }
            
        template.init(myself);
        template.applyCss();
        template.draw();
        
        
    }
    
    
    /**
     * Returns the current template
     * @name templateEngine.getTemplate
     * @memberof wd.caf.modules.templateEngine
     */
    impl.getTemplate = function(){
        
        return template;
    }
    
    
    /**
     * Returns the generic popup
     * @name templateEngine.getPopup
     * @memberof wd.caf.modules.templateEngine
     */    
    impl.getPoup = function() {
        return popup;
        
    }
    
    
    
    
    
};
