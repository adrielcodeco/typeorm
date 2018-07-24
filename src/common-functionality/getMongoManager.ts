import {MongoEntityManager} from "../entity-manager/MongoEntityManager";
import {getConnectionManager} from "./getConnectionManager";

/**
 * Gets MongoDB entity manager from the connection.
 * If connection name wasn't specified, then "default" connection will be retrieved.
 */
export function getMongoManager(connectionName: string = "default"): MongoEntityManager {
    return getConnectionManager().get(connectionName).manager as MongoEntityManager;
}