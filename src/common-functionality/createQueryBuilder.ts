import {ObjectType} from "../common/ObjectType";
import {SelectQueryBuilder} from "../query-builder/SelectQueryBuilder";
import {getRepository} from "./getRepository";
import {getConnection} from "./getConnection";

/**
 * Creates a new query builder.
 */
export function createQueryBuilder<Entity>(entityClass?: ObjectType<Entity>|string, alias?: string, connectionName: string = "default"): SelectQueryBuilder<Entity> {
    if (entityClass) {
        return getRepository(entityClass, connectionName).createQueryBuilder(alias);
    }

    return getConnection(connectionName).createQueryBuilder();
}