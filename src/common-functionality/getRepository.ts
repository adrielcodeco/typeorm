import {Repository} from "../repository/Repository";
import {ObjectType} from "../common/ObjectType";
import {getConnectionManager} from "./getConnectionManager";

/**
 * Gets repository for the given entity class.
 */
export function getRepository<Entity>(entityClass: ObjectType<Entity>|string, connectionName: string = "default"): Repository<Entity> {
    return getConnectionManager().get(connectionName).getRepository<Entity>(entityClass);
}