/* istanbul ignore file */
import { AbilityBuilder, PureAbility } from '@casl/ability';
import { Subjects as CaslPrismaSubjects, PrismaQuery } from '@casl/prisma';
import { Prisma, UserRoles } from '@prisma/client';

import {
  DefinePermissions,
  DefinePublicPermissions,
  RolePermissions,
} from '../src/interfaces';

export type Roles = 'admin' | 'user' | 'guest';

export interface User extends Record<string, unknown> {
  id: string;
  roles: Roles[];
}

export type Subjects = CaslPrismaSubjects<
  Record<Prisma.ModelName, Record<string, unknown>> & {
    User: User;
  }
>;

export const Actions = {
  COUNT: 'count',
  CREATE: 'create',
  READ: 'read',
  SEARCH: 'search',
  UPDATE: 'update',
  REMOVE: 'remove',
  MANAGE: 'manage',
} as const;

export type Actions = (typeof Actions)[keyof typeof Actions];

export type AppAbility = PureAbility<[string, 'all' | Subjects], PrismaQuery>;

export const rolePermissions: RolePermissions<
  UserRoles,
  AbilityBuilder<AppAbility>,
  User
> = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  guest({ can }) {
    can('read', 'Tag');
  },
  user({ can }, user) {
    can('read', 'User', { id: user?.id });
  },
  admin({ can }) {
    can('manage', 'all');
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  custom() {},
};

export const publicPermissions: DefinePublicPermissions<
  AbilityBuilder<AppAbility>
> = ({ can }) => {
  can('read', 'Tag');
};
