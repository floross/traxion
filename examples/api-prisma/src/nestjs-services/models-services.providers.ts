import { Provider } from '@nestjs/common';
import {
  USER_SERVICES_PROVIDERS,
  ROLE_SERVICES_PROVIDERS,
  RIGHT_SERVICES_PROVIDERS,
} from './providers';

export const MODELS_SERVICES_PROVIDERS: Provider[] = [
  ...USER_SERVICES_PROVIDERS,
  ...ROLE_SERVICES_PROVIDERS,
  ...RIGHT_SERVICES_PROVIDERS,
];
