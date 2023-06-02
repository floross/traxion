import { Field, InputType } from '@nestjs/graphql';

import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ProfileScalarWhereWithAggregatesInput {
  @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ProfileScalarWhereWithAggregatesInput>;

  @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ProfileScalarWhereWithAggregatesInput>;

  @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ProfileScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  firstName?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  lastName?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  bio?: StringNullableWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  userId?: IntWithAggregatesFilter;
}