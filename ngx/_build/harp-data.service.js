(function (angular) {

  function harpDataServiceFactory($window){

    function HarpData(){

      this._data = $window.__public || {};

      /**
       * Getter that fails silently
       *
       * @param key
       * @returns {*}
       */
      this.get = function(key){
        return deepFind(this._data, key);
      };
    }

    /**
     * Deep find path in object
     *
     * @param obj
     * @param path
     * @returns {*}
     */
    function deepFind(obj, path) {
      var parts = path.split('.');
      var current = obj;
      var i;

      for (i = 0; i < parts.length; ++i) {
        if (current[parts[i]] === undefined) {
          return undefined;
        } else {
          current = current[parts[i]];
        }
      }
      return current;
    }

    return new HarpData();

  }

  // Inject dependencies
  harpDataServiceFactory.$inject = ['$window'];

  // Export
  angular.module('app')
    .factory('harpData', harpDataServiceFactory);

})(angular);
