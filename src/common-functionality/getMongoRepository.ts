import {ObjectType} from "../common/ObjectType";
import {MongoRepository} from "../repository/MongoRepository";
import {getConnectionManager} from "./getConnectionManager";

/**
 * Gets mongodb repository for the given entity class or name.
 */
export function getMongoRepository<Entity>(entityClass: ObjectType<Entity>|string, connectionName: string = "default"): MongoRepository<Entity> {
    return getConnectionManager().get(connectionName).getMongoRepository<Entity>(entityClass);
}