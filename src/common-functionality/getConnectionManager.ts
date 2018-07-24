import {ConnectionManager} from "../connection/ConnectionManager";
import {getFromContainer} from "../container";

/**
 * Gets a ConnectionManager which creates connections.
 */
export function getConnectionManager(): ConnectionManager {
    return getFromContainer(ConnectionManager);
}