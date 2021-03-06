angular.module('plan').factory('ServiceFactory', [
    'ServiceLoader', 'AngularDataStore',
    function (ServiceLoader, AngularDataStore) {
        return {
            getService: function (name) {
                return ServiceLoader.getService(name).then(function (service) {
                    if (!service) {
                        return AngularDataStore.create('service', {
                            name: name,
                            enabled: false,
                            config: {}
                        });
                    }

                    return service;
                });
            }
        };
    }
]);
