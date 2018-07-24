import {SqljsEntityManager} from "../entity-manager/SqljsEntityManager";
import {getConnectionManager} from "./getConnectionManager";

/**
 * Gets Sqljs entity manager from connection name.
 * "default" connection is used, when no name is specified.
 * Only works when Sqljs driver is used.
 */
export function getSqljsManager(connectionName: string = "default"): SqljsEntityManager {
    return getConnectionManager().get(connectionName).manager as SqljsEntityManager;
}