Object.defineProperty(exports, '__esModule', { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  warnEnvConflicts,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  findSync,
} = require('./runtime');

const path = require('path');

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 2.24.1
 * Query Engine version: 18095475d5ee64536e2f93995e48ad800737a9e4
 */
Prisma.prismaVersion = {
  client: '2.24.1',
  engine: '18095475d5ee64536e2f93995e48ad800737a9e4',
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = () => (val) => val;

// folder where the generated client is found
const dirname =
  findSync(
    process.cwd(),
    ['"prisma/client"', '"client"'],
    ['d'],
    ['d'],
    1,
  )[0] || __dirname;

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) {
  return x;
}

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc',
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive',
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
});

/**
 * DMMF
 */
const dmmfString =
  '{"datamodel":{"enums":[],"models":[{"name":"User","isEmbedded":false,"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"type":"String","hasDefaultValue":true,"default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"type":"String","hasDefaultValue":false,"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"type":"String","hasDefaultValue":false,"isGenerated":false,"isUpdatedAt":false}],"isGenerated":false,"idFields":[],"uniqueFields":[],"uniqueIndexes":[]}]},"schema":{"inputObjectTypes":{"prisma":[{"name":"UserWhereInput","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"AND","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":true}]},{"name":"OR","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":true}]},{"name":"NOT","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":true}]},{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"StringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"String","location":"scalar","isList":false}]},{"name":"email","isRequired":false,"isNullable":false,"inputTypes":[{"type":"StringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"String","location":"scalar","isList":false}]},{"name":"password","isRequired":false,"isNullable":false,"inputTypes":[{"type":"StringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"String","location":"scalar","isList":false}]}]},{"name":"UserOrderByInput","constraints":{"maxNumFields":1,"minNumFields":0},"fields":[{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"SortOrder","namespace":"prisma","location":"enumTypes","isList":false}]},{"name":"email","isRequired":false,"isNullable":false,"inputTypes":[{"type":"SortOrder","namespace":"prisma","location":"enumTypes","isList":false}]},{"name":"password","isRequired":false,"isNullable":false,"inputTypes":[{"type":"SortOrder","namespace":"prisma","location":"enumTypes","isList":false}]}]},{"name":"UserWhereUniqueInput","constraints":{"maxNumFields":1,"minNumFields":1},"fields":[{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"email","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]}]},{"name":"UserScalarWhereWithAggregatesInput","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"AND","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserScalarWhereWithAggregatesInput","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"UserScalarWhereWithAggregatesInput","namespace":"prisma","location":"inputObjectTypes","isList":true}]},{"name":"OR","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserScalarWhereWithAggregatesInput","namespace":"prisma","location":"inputObjectTypes","isList":true}]},{"name":"NOT","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserScalarWhereWithAggregatesInput","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"UserScalarWhereWithAggregatesInput","namespace":"prisma","location":"inputObjectTypes","isList":true}]},{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"StringWithAggregatesFilter","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"String","location":"scalar","isList":false}]},{"name":"email","isRequired":false,"isNullable":false,"inputTypes":[{"type":"StringWithAggregatesFilter","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"String","location":"scalar","isList":false}]},{"name":"password","isRequired":false,"isNullable":false,"inputTypes":[{"type":"StringWithAggregatesFilter","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"String","location":"scalar","isList":false}]}]},{"name":"UserCreateInput","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"email","isRequired":true,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"password","isRequired":true,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]}]},{"name":"UserUncheckedCreateInput","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"email","isRequired":true,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"password","isRequired":true,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]}]},{"name":"UserUpdateInput","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"email","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"password","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}]},{"name":"UserUncheckedUpdateInput","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"email","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"password","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}]},{"name":"UserCreateManyInput","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"email","isRequired":true,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"password","isRequired":true,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]}]},{"name":"UserUpdateManyMutationInput","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"email","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"password","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}]},{"name":"UserUncheckedUpdateManyInput","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"id","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"email","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"password","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"StringFieldUpdateOperationsInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}]},{"name":"StringFilter","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"equals","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"in","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":true}]},{"name":"notIn","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":true}]},{"name":"lt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"lte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"gt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"gte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"contains","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"startsWith","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"endsWith","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"mode","isRequired":false,"isNullable":false,"inputTypes":[{"type":"QueryMode","namespace":"prisma","location":"enumTypes","isList":false}]},{"name":"not","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]}]},{"name":"StringWithAggregatesFilter","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"equals","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"in","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":true}]},{"name":"notIn","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":true}]},{"name":"lt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"lte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"gt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"gte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"contains","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"startsWith","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"endsWith","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"mode","isRequired":false,"isNullable":false,"inputTypes":[{"type":"QueryMode","namespace":"prisma","location":"enumTypes","isList":false}]},{"name":"not","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"NestedStringWithAggregatesFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"_count","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedIntFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"count","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedIntFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}],"deprecation":{"sinceVersion":"2.23","reason":"Aggregation keywords got unified to use underscore as prefix to prevent field clashes."}},{"name":"_min","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"min","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}],"deprecation":{"sinceVersion":"2.23","reason":"Aggregation keywords got unified to use underscore as prefix to prevent field clashes."}},{"name":"_max","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"max","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}],"deprecation":{"sinceVersion":"2.23","reason":"Aggregation keywords got unified to use underscore as prefix to prevent field clashes."}}]},{"name":"StringFieldUpdateOperationsInput","constraints":{"maxNumFields":1,"minNumFields":1},"fields":[{"name":"set","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]}]},{"name":"NestedStringFilter","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"equals","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"in","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":true}]},{"name":"notIn","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":true}]},{"name":"lt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"lte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"gt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"gte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"contains","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"startsWith","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"endsWith","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"not","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]}]},{"name":"NestedStringWithAggregatesFilter","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"equals","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"in","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":true}]},{"name":"notIn","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":true}]},{"name":"lt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"lte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"gt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"gte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"contains","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"startsWith","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"endsWith","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"not","isRequired":false,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false},{"type":"NestedStringWithAggregatesFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"_count","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedIntFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"count","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedIntFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}],"deprecation":{"sinceVersion":"2.23","reason":"Aggregation keywords got unified to use underscore as prefix to prevent field clashes."}},{"name":"_min","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"min","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}],"deprecation":{"sinceVersion":"2.23","reason":"Aggregation keywords got unified to use underscore as prefix to prevent field clashes."}},{"name":"_max","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"max","isRequired":false,"isNullable":false,"inputTypes":[{"type":"NestedStringFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}],"deprecation":{"sinceVersion":"2.23","reason":"Aggregation keywords got unified to use underscore as prefix to prevent field clashes."}}]},{"name":"NestedIntFilter","constraints":{"maxNumFields":null,"minNumFields":null},"fields":[{"name":"equals","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"in","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":true}]},{"name":"notIn","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":true}]},{"name":"lt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"lte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"gt","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"gte","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"not","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false},{"type":"NestedIntFilter","namespace":"prisma","location":"inputObjectTypes","isList":false}]}]}]},"outputObjectTypes":{"prisma":[{"name":"Query","fields":[{"name":"findFirstUser","args":[{"name":"where","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"orderBy","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserOrderByInput","namespace":"prisma","location":"inputObjectTypes","isList":true},{"type":"UserOrderByInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"cursor","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereUniqueInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"take","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"skip","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"distinct","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserScalarFieldEnum","namespace":"prisma","location":"enumTypes","isList":true}]}],"isNullable":true,"outputType":{"type":"User","namespace":"model","location":"outputObjectTypes","isList":false}},{"name":"findManyUser","args":[{"name":"where","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"orderBy","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserOrderByInput","namespace":"prisma","location":"inputObjectTypes","isList":true},{"type":"UserOrderByInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"cursor","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereUniqueInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"take","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"skip","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"distinct","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserScalarFieldEnum","namespace":"prisma","location":"enumTypes","isList":true}]}],"isNullable":false,"outputType":{"type":"User","namespace":"model","location":"outputObjectTypes","isList":true}},{"name":"aggregateUser","args":[{"name":"where","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"orderBy","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserOrderByInput","namespace":"prisma","location":"inputObjectTypes","isList":true},{"type":"UserOrderByInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"cursor","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereUniqueInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"take","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"skip","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]}],"isNullable":false,"outputType":{"type":"AggregateUser","namespace":"prisma","location":"outputObjectTypes","isList":false}},{"name":"groupByUser","args":[{"name":"where","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"orderBy","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserOrderByInput","namespace":"prisma","location":"inputObjectTypes","isList":true},{"type":"UserOrderByInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"by","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserScalarFieldEnum","namespace":"prisma","location":"enumTypes","isList":true},{"type":"UserScalarFieldEnum","namespace":"prisma","location":"enumTypes","isList":false}]},{"name":"having","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserScalarWhereWithAggregatesInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"take","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]},{"name":"skip","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Int","location":"scalar","isList":false}]}],"isNullable":false,"outputType":{"type":"UserGroupByOutputType","namespace":"prisma","location":"outputObjectTypes","isList":true}},{"name":"findUniqueUser","args":[{"name":"where","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserWhereUniqueInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}],"isNullable":true,"outputType":{"type":"User","namespace":"model","location":"outputObjectTypes","isList":false}}]},{"name":"Mutation","fields":[{"name":"createOneUser","args":[{"name":"data","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserCreateInput","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"UserUncheckedCreateInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}],"isNullable":false,"outputType":{"type":"User","namespace":"model","location":"outputObjectTypes","isList":false}},{"name":"upsertOneUser","args":[{"name":"where","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserWhereUniqueInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"create","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserCreateInput","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"UserUncheckedCreateInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"update","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserUpdateInput","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"UserUncheckedUpdateInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}],"isNullable":false,"outputType":{"type":"User","namespace":"model","location":"outputObjectTypes","isList":false}},{"name":"createManyUser","args":[{"name":"data","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserCreateManyInput","namespace":"prisma","location":"inputObjectTypes","isList":true}]},{"name":"skipDuplicates","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Boolean","location":"scalar","isList":false}]}],"isNullable":false,"outputType":{"type":"AffectedRowsOutput","namespace":"prisma","location":"outputObjectTypes","isList":false}},{"name":"deleteOneUser","args":[{"name":"where","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserWhereUniqueInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}],"isNullable":true,"outputType":{"type":"User","namespace":"model","location":"outputObjectTypes","isList":false}},{"name":"updateOneUser","args":[{"name":"data","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserUpdateInput","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"UserUncheckedUpdateInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"where","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserWhereUniqueInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}],"isNullable":true,"outputType":{"type":"User","namespace":"model","location":"outputObjectTypes","isList":false}},{"name":"updateManyUser","args":[{"name":"data","isRequired":true,"isNullable":false,"inputTypes":[{"type":"UserUpdateManyMutationInput","namespace":"prisma","location":"inputObjectTypes","isList":false},{"type":"UserUncheckedUpdateManyInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]},{"name":"where","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}],"isNullable":false,"outputType":{"type":"AffectedRowsOutput","namespace":"prisma","location":"outputObjectTypes","isList":false}},{"name":"deleteManyUser","args":[{"name":"where","isRequired":false,"isNullable":false,"inputTypes":[{"type":"UserWhereInput","namespace":"prisma","location":"inputObjectTypes","isList":false}]}],"isNullable":false,"outputType":{"type":"AffectedRowsOutput","namespace":"prisma","location":"outputObjectTypes","isList":false}},{"name":"executeRaw","args":[{"name":"query","isRequired":true,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"parameters","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Json","location":"scalar","isList":false}]}],"isNullable":false,"outputType":{"type":"Json","location":"scalar","isList":false}},{"name":"queryRaw","args":[{"name":"query","isRequired":true,"isNullable":false,"inputTypes":[{"type":"String","location":"scalar","isList":false}]},{"name":"parameters","isRequired":false,"isNullable":false,"inputTypes":[{"type":"Json","location":"scalar","isList":false}]}],"isNullable":false,"outputType":{"type":"Json","location":"scalar","isList":false}}]},{"name":"AggregateUser","fields":[{"name":"_count","args":[],"isNullable":true,"outputType":{"type":"UserCountAggregateOutputType","namespace":"prisma","location":"outputObjectTypes","isList":false}},{"name":"count","args":[],"isNullable":true,"outputType":{"type":"UserCountAggregateOutputType","namespace":"prisma","location":"outputObjectTypes","isList":false},"deprecation":{"sinceVersion":"2.23","reason":"Aggregation keywords got unified to use underscore as prefix to prevent field clashes."}},{"name":"_min","args":[],"isNullable":true,"outputType":{"type":"UserMinAggregateOutputType","namespace":"prisma","location":"outputObjectTypes","isList":false}},{"name":"min","args":[],"isNullable":true,"outputType":{"type":"UserMinAggregateOutputType","namespace":"prisma","location":"outputObjectTypes","isList":false},"deprecation":{"sinceVersion":"2.23","reason":"Aggregation keywords got unified to use underscore as prefix to prevent field clashes."}},{"name":"_max","args":[],"isNullable":true,"outputType":{"type":"UserMaxAggregateOutputType","namespace":"prisma","location":"outputObjectTypes","isList":false}},{"name":"max","args":[],"isNullable":true,"outputType":{"type":"UserMaxAggregateOutputType","namespace":"prisma","location":"outputObjectTypes","isList":false},"deprecation":{"sinceVersion":"2.23","reason":"Aggregation keywords got unified to use underscore as prefix to prevent field clashes."}}]},{"name":"UserGroupByOutputType","fields":[{"name":"id","args":[],"isNullable":false,"outputType":{"type":"String","location":"scalar","isList":false}},{"name":"email","args":[],"isNullable":false,"outputType":{"type":"String","location":"scalar","isList":false}},{"name":"password","args":[],"isNullable":false,"outputType":{"type":"String","location":"scalar","isList":false}},{"name":"_count","args":[],"isNullable":true,"outputType":{"type":"UserCountAggregateOutputType","namespace":"prisma","location":"outputObjectTypes","isList":false}},{"name":"_min","args":[],"isNullable":true,"outputType":{"type":"UserMinAggregateOutputType","namespace":"prisma","location":"outputObjectTypes","isList":false}},{"name":"_max","args":[],"isNullable":true,"outputType":{"type":"UserMaxAggregateOutputType","namespace":"prisma","location":"outputObjectTypes","isList":false}}]},{"name":"AffectedRowsOutput","fields":[{"name":"count","args":[],"isNullable":false,"outputType":{"type":"Int","location":"scalar","isList":false}}]},{"name":"UserCountAggregateOutputType","fields":[{"name":"id","args":[],"isNullable":false,"outputType":{"type":"Int","location":"scalar","isList":false}},{"name":"email","args":[],"isNullable":false,"outputType":{"type":"Int","location":"scalar","isList":false}},{"name":"password","args":[],"isNullable":false,"outputType":{"type":"Int","location":"scalar","isList":false}},{"name":"_all","args":[],"isNullable":false,"outputType":{"type":"Int","location":"scalar","isList":false}}]},{"name":"UserMinAggregateOutputType","fields":[{"name":"id","args":[],"isNullable":true,"outputType":{"type":"String","location":"scalar","isList":false}},{"name":"email","args":[],"isNullable":true,"outputType":{"type":"String","location":"scalar","isList":false}},{"name":"password","args":[],"isNullable":true,"outputType":{"type":"String","location":"scalar","isList":false}}]},{"name":"UserMaxAggregateOutputType","fields":[{"name":"id","args":[],"isNullable":true,"outputType":{"type":"String","location":"scalar","isList":false}},{"name":"email","args":[],"isNullable":true,"outputType":{"type":"String","location":"scalar","isList":false}},{"name":"password","args":[],"isNullable":true,"outputType":{"type":"String","location":"scalar","isList":false}}]}],"model":[{"name":"User","fields":[{"name":"id","args":[],"isNullable":false,"outputType":{"type":"String","location":"scalar","isList":false}},{"name":"email","args":[],"isNullable":false,"outputType":{"type":"String","location":"scalar","isList":false}},{"name":"password","args":[],"isNullable":false,"outputType":{"type":"String","location":"scalar","isList":false}}]}]},"enumTypes":{"prisma":[{"name":"UserScalarFieldEnum","values":["id","email","password"]},{"name":"SortOrder","values":["asc","desc"]},{"name":"QueryMode","values":["default","insensitive"]}]}},"mappings":{"modelOperations":[{"model":"User","plural":"users","findUnique":"findUniqueUser","findFirst":"findFirstUser","findMany":"findManyUser","create":"createOneUser","createMany":"createManyUser","delete":"deleteOneUser","update":"updateOneUser","deleteMany":"deleteManyUser","updateMany":"updateManyUser","upsert":"upsertOneUser","aggregate":"aggregateUser","groupBy":"groupByUser"}],"otherOperations":{"read":[],"write":["executeRaw","queryRaw"]}}}';

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString);
exports.Prisma.dmmf = JSON.parse(dmmfString);

/**
 * Create the Client
 */

const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value: '/data/Projects/stack/libs/nestjs/authentication/prisma/client',
      fromEnvVar: null,
    },
    config: {},
    binaryTargets: [],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
  },
  relativePath: '..',
  clientVersion: '2.24.1',
  engineVersion: '18095475d5ee64536e2f93995e48ad800737a9e4',
  datasourceNames: ['db'],
  activeProvider: 'postgresql',
};
config.document = dmmf;
config.dirname = dirname;

/**
 * Only for env conflict warning
 * loading of env variable occurs in getPrismaClient
 */
const envPaths = {
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(process.cwd(), config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(process.cwd(), config.relativeEnvPaths.schemaEnvPath),
};
warnEnvConflicts(envPaths);

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);

/**
 * Build tool annotations
 * In order to make `ncc` and `@vercel/nft` happy.
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
 **/
path.join(__dirname, 'query-engine-debian-openssl-1.1.x');
path.join(process.cwd(), './prisma/client/query-engine-debian-openssl-1.1.x');

/**
 * Annotation for `@vercel/nft`
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
 **/
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), './prisma/client/schema.prisma');
