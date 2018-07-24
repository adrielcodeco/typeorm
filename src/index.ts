/*!
 */
import "reflect-metadata";

// -------------------------------------------------------------------------
// Commonly Used exports
// -------------------------------------------------------------------------

export * from "./container";
export * from "./common/ObjectType";
export * from "./common/ObjectLiteral";
export * from "./common/DeepPartial";
export * from "./error/QueryFailedError";
export * from "./decorator/columns/Column";
export * from "./decorator/columns/CreateDateColumn";
export * from "./decorator/columns/PrimaryGeneratedColumn";
export * from "./decorator/columns/PrimaryColumn";
export * from "./decorator/columns/UpdateDateColumn";
export * from "./decorator/columns/VersionColumn";
export * from "./decorator/columns/ObjectIdColumn";
export * from "./decorator/listeners/AfterInsert";
export * from "./decorator/listeners/AfterLoad";
export * from "./decorator/listeners/AfterRemove";
export * from "./decorator/listeners/AfterUpdate";
export * from "./decorator/listeners/BeforeInsert";
export * from "./decorator/listeners/BeforeRemove";
export * from "./decorator/listeners/BeforeUpdate";
export * from "./decorator/listeners/EventSubscriber";
export * from "./decorator/options/ColumnOptions";
export * from "./decorator/options/IndexOptions";
export * from "./decorator/options/JoinColumnOptions";
export * from "./decorator/options/JoinTableOptions";
export * from "./decorator/options/RelationOptions";
export * from "./decorator/options/EntityOptions";
export * from "./decorator/options/ValueTransformer";
export * from "./decorator/relations/JoinColumn";
export * from "./decorator/relations/JoinTable";
export * from "./decorator/relations/ManyToMany";
export * from "./decorator/relations/ManyToOne";
export * from "./decorator/relations/OneToMany";
export * from "./decorator/relations/OneToOne";
export * from "./decorator/relations/RelationCount";
export * from "./decorator/relations/RelationId";
export * from "./decorator/entity/Entity";
export * from "./decorator/entity/ChildEntity";
export * from "./decorator/entity/TableInheritance";
export * from "./decorator/transaction/Transaction";
export * from "./decorator/transaction/TransactionManager";
export * from "./decorator/transaction/TransactionRepository";
export * from "./decorator/tree/TreeLevelColumn";
export * from "./decorator/tree/TreeParent";
export * from "./decorator/tree/TreeChildren";
export * from "./decorator/tree/Tree";
export * from "./decorator/Index";
export * from "./decorator/Unique";
export * from "./decorator/Check";
export * from "./decorator/Generated";
export * from "./decorator/EntityRepository";
export * from "./find-options/operator/Any";
export * from "./find-options/operator/Between";
export * from "./find-options/operator/Equal";
export * from "./find-options/operator/In";
export * from "./find-options/operator/IsNull";
export * from "./find-options/operator/LessThan";
export * from "./find-options/operator/Like";
export * from "./find-options/operator/MoreThan";
export * from "./find-options/operator/Not";
export * from "./find-options/operator/Raw";
export * from "./find-options/FindConditions";
export * from "./find-options/FindManyOptions";
export * from "./find-options/FindOneOptions";
export * from "./find-options/FindOperator";
export * from "./find-options/FindOperatorType";
export * from "./find-options/JoinOptions";
export * from "./find-options/OrderByCondition";
export * from "./logger/Logger";
export * from "./logger/AdvancedConsoleLogger";
export * from "./logger/SimpleConsoleLogger";
export * from "./logger/FileLogger";
export * from "./metadata/EntityMetadata";
export * from "./entity-manager/EntityManager";
export * from "./repository/AbstractRepository";
export * from "./repository/Repository";
export * from "./repository/BaseEntity";
export * from "./repository/TreeRepository";
export * from "./repository/MongoRepository";
export * from "./repository/RemoveOptions";
export * from "./repository/SaveOptions";
export * from "./schema-builder/table/TableColumn";
export * from "./schema-builder/table/TableForeignKey";
export * from "./schema-builder/table/TableIndex";
export * from "./schema-builder/table/Table";
export * from "./driver/mongodb/typings";
export * from "./driver/types/DatabaseType";
export * from "./driver/sqlserver/MssqlParameter";

export {ConnectionOptionsReader} from "./connection/ConnectionOptionsReader";
export {Connection} from "./connection/Connection";
export {ConnectionManager} from "./connection/ConnectionManager";
export {ConnectionOptions} from "./connection/ConnectionOptions";
export {Driver} from "./driver/Driver";
export {QueryBuilder} from "./query-builder/QueryBuilder";
export {SelectQueryBuilder} from "./query-builder/SelectQueryBuilder";
export {DeleteQueryBuilder} from "./query-builder/DeleteQueryBuilder";
export {InsertQueryBuilder} from "./query-builder/InsertQueryBuilder";
export {UpdateQueryBuilder} from "./query-builder/UpdateQueryBuilder";
export {RelationQueryBuilder} from "./query-builder/RelationQueryBuilder";
export {Brackets} from "./query-builder/Brackets";
export {WhereExpression} from "./query-builder/WhereExpression";
export {InsertResult} from "./query-builder/result/InsertResult";
export {UpdateResult} from "./query-builder/result/UpdateResult";
export {DeleteResult} from "./query-builder/result/DeleteResult";
export {QueryRunner} from "./query-runner/QueryRunner";
export {EntityManager} from "./entity-manager/EntityManager";
export {MongoEntityManager} from "./entity-manager/MongoEntityManager";
export {MigrationInterface} from "./migration/MigrationInterface";
export {DefaultNamingStrategy} from "./naming-strategy/DefaultNamingStrategy";
export {NamingStrategyInterface} from "./naming-strategy/NamingStrategyInterface";
export {Repository} from "./repository/Repository";
export {TreeRepository} from "./repository/TreeRepository";
export {MongoRepository} from "./repository/MongoRepository";
export {FindOneOptions} from "./find-options/FindOneOptions";
export {FindManyOptions} from "./find-options/FindManyOptions";
export {InsertEvent} from "./subscriber/event/InsertEvent";
export {UpdateEvent} from "./subscriber/event/UpdateEvent";
export {RemoveEvent} from "./subscriber/event/RemoveEvent";
export {EntitySubscriberInterface} from "./subscriber/EntitySubscriberInterface";
export {BaseEntity} from "./repository/BaseEntity";
export {EntitySchema} from "./entity-schema/EntitySchema";
export {EntitySchemaColumnOptions} from "./entity-schema/EntitySchemaColumnOptions";
export {EntitySchemaIndexOptions} from "./entity-schema/EntitySchemaIndexOptions";
export {EntitySchemaRelationOptions} from "./entity-schema/EntitySchemaRelationOptions";
export {ColumnType} from "./driver/types/ColumnTypes";
export {PromiseUtils} from "./util/PromiseUtils";

// -------------------------------------------------------------------------
// Deprecated
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Commonly used functionality
// -------------------------------------------------------------------------

export * from "./common-functionality/createConnection";
export * from "./common-functionality/createConnections";
export * from "./common-functionality/createQueryBuilder";
export * from "./common-functionality/getConnection";
export * from "./common-functionality/getConnectionManager";
export * from "./common-functionality/getConnectionOptions";
export * from "./common-functionality/getCustomRepository";
export * from "./common-functionality/getManager";
export * from "./common-functionality/getMetadataArgsStorage";
export * from "./common-functionality/getMongoManager";
export * from "./common-functionality/getMongoRepository";
export * from "./common-functionality/getRepository";
export * from "./common-functionality/getSqljsManager";
export * from "./common-functionality/getTreeRepository";
