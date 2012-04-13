/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */

/**jslint globals: wd*/

;
(function(){
    
    


    /**
 * Registry class, that will manage the registred components
 * 
 * @constructor
 * @param {wd.caf.editor} myself The Editor object
 * @param {Object} spec Any configuration options you need to provide.
 */
    var registryClass = function(spec){
    
        spec = spec || {};
        
        var myself = {},
            parent = spec.parentRegistry;
        
        var _registry = {};
        
        myself.spawnRegistry = function () {
            return registryClass({
                parentRegistry: myself
            });
        }
    
        /**
     * Registers an entity
     * @memberof wd.caf.registry
     * @param {string} the module space to register into
     * @param {wd.caf.entity} entity to register
     */
    
        myself.registerEntity = function(module,entity){
            if (!_registry) {
                _registry = {};
            }
            if (!_registry[module]) {
                _registry[module] = {};  
            }
            _registry[module][entity.getName()] = entity;  
        };



     /**
     * Removes an entity from the current registry 
     * @memberof wd.caf.registry
     * @param {string} the module space to remove from 
     * @param {string} entity to remove
     */
    
        myself.removeEntity = function(module,entityName){
            if (!_registry || !_registry[module] || !_registry[module].hasOwnProperty(entityName) ) {
                return false;  
            }
            var c = _registry[module][entityName];
            delete _registry[module][entityName] ;
            return c;
        };
        
        
     /**
     * Creates a shadow entity to mask a parents' equivalent.
     * @memberof wd.caf.registry
     * @param {string} the module space to shadow into
     * @param {string} entity to shadow
     */
    
        myself.shadowEntity = function(module,entityName){
            if (!_registry ) {
                    _registry = {};
            }
            if (!_registry[module]) {
                    _registry[module] = {};  
            }
            _registry[module][entityName] = undefined;   
        };


        /**
     * Checks if an entity is registered
     * @memberof wd.caf.registry
     * @param {string} the module space to register into
     * @param {wd.caf.entity} entity to register
     * @type Boolean
     */
    
        myself.hasEntity = function(module,entityName){
            
            return _registry && _registry[module] &&
                _registry[module].hasOwnProperty(entityName)  ?
                    typeof _registry[module][entityName] == 'undefined' :
                    (parent ? 
                        parent.hasEntity(module, entityName):
                        false);     
        };


        /**
     * Returns an entity from the registry
     * @memberof wd.caf.registry
     * @param {string} the module space to register into
     * @param {string} Entity name
     * @type {wd.caf.entity} Entity or null
     */

        myself.getEntity = function(module,entityName){
            
            return _registry && _registry[module] &&
                _registry[module].hasOwnProperty(entityName)  ?
                    _registry[module][entityName] :
                    (parent ? 
                        parent.getEntity(module, entityName):
                        null); 
            
        };
 

        /**
     * Sets entity defaults
     * @memberof wd.caf.registry
     * @param {string} the module space
     * @param {string} Entity name
     * @param {Object} Defaults, Object or Function
     */
        myself.setEntityDefaults = function(module, entityName, defaults) {
            var entity = this.getEntity(module,entityName);
            if(entity) {
                entity.setDefaults(defaults);
            }
        };
    
    
    
    /**
     * Lists the entities for a specified module, and returns them in the correct order
     * @memberof wd.caf.registry
     * @param {string} Module
     * @type Array
     */
    
        myself.mapEntities = function(module) {
        
            var map = {},i,j;
            for (i in _registry[module]){
                if (_registry[module].hasOwnProperty(i)){
                    map[i] = (_registry[module][i]);       
                }
            }
            var parentMap = (parent ? parent.mapEntities(module) : {} );
            for (j in parentMap)
                if ( parentMap.hasOwnProperty(j) &&
                     !(map.hasOwnProperty(j)) ){
                    map[j] = parentMap[j];
                }
        
            return map;
        };
    
    
    
        /**
     * Lists the entities for a specified module, and returns them in the correct order
     * @memberof wd.caf.registry
     * @param {string} Module
     * @type Array
     */
    
        myself.listEntities = function(module) {
        
            var arr = [],i;
            var map = myself.mapEntities(module);
            for (i in map){
                if (map.hasOwnProperty(i) && map[i]){
                    arr.push(map[i]);       
                }
            
            }
        
            return  arr.slice().sort(function(a,b){
                return a.getOrder() - b.getOrder();
            });
        };



        /**
     * Get Template list
     * @memberof wd.caf.registry
     * @type Array
     */
        myself.listTemplates = function(){
            return myself.listEntities("templates");
        }
    
    
        /**
     * Register a template on the registry. Shortcut for registerEntity("templates",template)
     * @memberof wd.caf.registry
     * @param {string} template
     */   
        myself.registerTemplate = function(template){
        
            return myself.registerEntity("templates",template);
        
        }


        /**
     * Returns a template from the registry
     * @memberof wd.caf.registry
     * @param {string} Entity name
     * @type {wd.caf.template} Entity or null
     */
        myself.getTemplate = function(template){
            return myself.getEntity("templates", template);
        }
    
    
    
        /**
     * Get Panel list
     * @memberof wd.caf.registry
     * @type Array
     */
        myself.listPanels = function(){
            return myself.listEntities("panels");
        }
    
    
        /**
     * Register a panel on the registry. Shortcut for registerEntity("panels",panel)
     * @memberof wd.caf.registry
     * @param {string} panel
     */   
        myself.registerPanel = function(panel){
        
            return myself.registerEntity("panels",panel);
        
        }


        /**
     * Returns a panel from the registry
     * @memberof wd.caf.registry
     * @param {string} Entity name
     * @type {wd.caf.panel} Entity or null
     */
        myself.getPanel = function(panel){
            return myself.getEntity("panels", panel);
        }
    
    

        /**
     * Get Action list
     * @memberof wd.caf.registry
     * @type Array
     */
        myself.listActions = function(){
            return myself.listEntities("actions");
        }
    
    
        /**
     * Register a action on the registry. Shortcut for registerEntity("actions",action)
     * @memberof wd.caf.registry
     * @param {string} action
     */   
        myself.registerAction = function(action){
        
            return myself.registerEntity("actions",action);
        
        }


        /**
     * Returns a action from the registry
     * @memberof wd.caf.registry
     * @param {string} Entity name
     * @type {wd.caf.action} Entity or null
     */
        myself.getAction = function(action){
            return myself.getEntity("actions", action);
        }
    
    
    
    
        /**
     * Get Transition list
     * @memberof wd.caf.registry
     * @type Array
     */
        myself.listTransitions = function(){
            return myself.listEntities("transitions");
        }
    
    
        /**
     * Register a transition on the registry. Shortcut for registerEntity("transitions",transition)
     * @memberof wd.caf.registry
     * @param {string} transition
     */   
        myself.registerTransition = function(transition){
        
            return myself.registerEntity("transitions",transition);
        
        }


        /**
     * Returns a transition from the registry
     * @memberof wd.caf.registry
     * @param {string} Entity name
     * @type {wd.caf.transition} Entity or null
     */
        myself.getTransition = function(transition){
            return myself.getEntity("transitions", transition);
        }
    
       
    
        /**
     * Get Keybind list
     * @memberof wd.caf.registry
     * @type Array
     */
        myself.listKeybinds = function(){
            return myself.listEntities("keybinds");
        }
    
    
        /**
     * Register a keybind on the registry. Shortcut for registerEntity("keybinds",keybind)
     * @memberof wd.caf.registry
     * @param {string} keybind
     */   
        myself.registerKeybind = function(keybind){
        
            return myself.registerEntity("keybinds",keybind);
        
        }


        /**
     * Returns a keybind from the registry
     * @memberof wd.caf.registry
     * @param {string} Entity name
     * @type {wd.caf.keybind} Entity or null
     */
        myself.getKeybind = function(keybind){
            return myself.getEntity("keybinds", keybind);
        }

    
    
        /**
     * Get Popup list
     * @memberof wd.caf.registry
     * @type Array
     */
        myself.listPopups = function(){
            return myself.listEntities("popups");
        }
    
    
        /**
     * Register a popup on the registry. Shortcut for registerEntity("popups",popup)
     * @memberof wd.caf.registry
     * @param {string} popup
     */   
        myself.registerPopup = function(popup){
        
            return myself.registerEntity("popups",popup);
        
        }


        /**
     * Returns a popup from the registry
     * @memberof wd.caf.registry
     * @param {string} Entity name
     * @type {wd.caf.popup} Entity or null
     */
        myself.getPopup = function(popup){
            return myself.getEntity("popups", popup);
        }



    
        /**
     * Get Notification list
     * @memberof wd.caf.registry
     * @type Array
     */
        myself.listNotifications = function(){
            return myself.listEntities("notifications");
        }
    
    
        /**
     * Register a notification on the registry. Shortcut for registerEntity("notifications",notification)
     * @memberof wd.caf.registry
     * @param {string} notification
     */   
        myself.registerNotification = function(notification){
        
            return myself.registerEntity("notifications",notification);
        
        }


        /**
     * Returns a notification from the registry
     * @memberof wd.caf.registry
     * @param {string} Entity name
     * @type {wd.caf.notification} Entity or null
     */
        myself.getNotification = function(notification){
            return myself.getEntity("notifications", notification);
        }




     /**
     * Resets a modules
     * @memberof wd.caf.registry
     * @param {string} Module name
     */
        myself.resetModule = function(module){
            if (_registry && _registry[module] ){
                _registry[module] = {};
            }
        }
        
        
           /**
     * Resets a modules
     * @memberof wd.caf.registry
     * @param {string} Module name
     */
        myself.resetPanels = function(){
            myself.resetModule('panels');
        }









        return myself;


    };
    
    wd.caf.registry = registryClass();

}())