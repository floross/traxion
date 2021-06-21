import { Request } from 'express';
import { JwtFromRequestFunction } from 'passport-jwt';

import { isDevelopment } from '@tractr/nestjs-core';

export function fromHttpOnlySignedAndSecureCookies(
  cookieName: string,
): JwtFromRequestFunction {
  const searchCookieFromKey = isDevelopment() ? 'cookies' : 'signedCookies';
  return (req: Request) => {
    if (
      req &&
      req[searchCookieFromKey] &&
      req[searchCookieFromKey][cookieName]
    ) {
      return req[searchCookieFromKey][cookieName].token;
    }

    return null;
  };
}
