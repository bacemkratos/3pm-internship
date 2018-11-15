import { ApolloClient, createNetworkInterface } from 'apollo-client';
import {baseUrl, frontUrl, graphqlUrl} from './AppConfig';
import {ReflectiveInjector} from '@angular/core';
import {AuthenticationService} from './services/authentication-service.service';
import {StorageService} from './services/storage-service.service';


const  networkInterface = createNetworkInterface({
  uri: baseUrl + graphqlUrl ,

} );

networkInterface.use([{
  applyMiddleware(req, next) {

    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists

    req.options.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;


    next(req) ;
  }
}]);
networkInterface.useAfter([
  {
    applyAfterware({ response }, next) {
      if (response.status === 401) {
        localStorage.clear();
        location.assign(frontUrl);
      }
      next();
    }
  }
]);


const clientConfig = new ApolloClient({

  networkInterface: networkInterface ,
});

export function client(): ApolloClient {

  return clientConfig;
}
