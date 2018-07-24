import {ObjectType} from "../common/ObjectType";
import {TreeRepository} from "../repository/TreeRepository";
import {getConnectionManager} from "./getConnectionManager";

/**
 * Gets tree repository for the given entity class.
 */
export function getTreeRepository<Entity>(entityClass: ObjectType<Entity>|string, connectionName: string = "default"): TreeRepository<Entity> {
    return getConnectionManager().get(connectionName).getTreeRepository<Entity>(entityClass);
}