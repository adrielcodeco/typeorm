import {Connection} from "../connection/Connection";
import {ConnectionOptions} from "../connection/ConnectionOptions";
import {ConnectionOptionsReader} from "../connection/ConnectionOptionsReader";
import {PromiseUtils} from "../util/PromiseUtils";
import {getConnectionManager} from "./getConnectionManager";

/**
 * Creates new connections and registers them in the manager.
 *
 * If connection options were not specified, then it will try to create connection automatically,
 * based on content of ormconfig (json/js/yml/xml/env) file or environment variables.
 * All connections from the ormconfig will be created.
 */
export async function createConnections(options?: ConnectionOptions[]): Promise<Connection[]> {
    if (!options)
        options = await new ConnectionOptionsReader().all();
    const connections = options.map(options => getConnectionManager().create(options));
    return PromiseUtils.runInSequence(connections, connection => connection.connect());
}