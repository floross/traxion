import { DataSource } from '@prisma/generator-helper';

import { generateServiceClass } from './service.generator';

import { Model, PrimaryField } from '@trxn/hapify-core';

describe('generateServiceClass', () => {
  it('should return a ClassDeclarationStructure with the correct properties', () => {
    const id: PrimaryField = {
      name: 'id',
      type: 'primary',
      pluralName: 'ids',
      scalar: 'string',
      relations: [],
    };

    const model: Model = {
      name: 'User',
      pluralName: 'users',
      fields: [id],
      primaryKey: {
        name: 'id',
        fields: [id],
      },
      dbName: null,
    };

    const datasources: DataSource[] = [
      {
        name: 'db',
        url: { fromEnvVar: '', value: '' },
        activeProvider: 'postgres',
        provider: 'postgres',
        schemas: [],
      },
    ];

    // Act
    const classDeclaration = generateServiceClass(model, datasources);

    // Check function name
    expect(classDeclaration.name).toBe('UserService');
    expect(classDeclaration.kind).toBe(2); // StructureKind.Class is equal to 2
    expect(classDeclaration.isExported).toBe(true);
    // TODO: add test for ctors
    // TODO: add test for methods

    // Check decorators
    const { decorators } = classDeclaration;
    expect(decorators?.length).toBe(1);
    expect(decorators?.[0].name).toBe('Injectable()');
  });
});
