import {ConnectionOptions} from "../connection/ConnectionOptions";
import {ConnectionOptionsReader} from "../connection/ConnectionOptionsReader";

/**
 * Reads connection options stored in ormconfig configuration file.
 */
export async function getConnectionOptions(connectionName: string = "default"): Promise<ConnectionOptions> {
    return new ConnectionOptionsReader().get(connectionName);
}