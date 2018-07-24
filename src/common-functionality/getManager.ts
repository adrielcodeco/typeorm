import {EntityManager} from "../entity-manager/EntityManager";
import {getConnectionManager} from "./getConnectionManager";

/**
 * Gets entity manager from the connection.
 * If connection name wasn't specified, then "default" connection will be retrieved.
 */
export function getManager(connectionName: string = "default"): EntityManager {
    return getConnectionManager().get(connectionName).manager;
}