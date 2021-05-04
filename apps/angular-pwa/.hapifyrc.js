const {
  hapifyDefaultConfig,
  getValidatorPath,
} = require('@tractr/hapify-config');

// Hapify configuration
module.exports = {
  ...hapifyDefaultConfig,
  version: '1',
  name: 'Angular frontend starter',
  description: 'A frontend starter to get an Angular squeleton',
  logo: 'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
  validatorPath: getValidatorPath(__dirname),
  project: '../../hapify-models.json',
  extends: [
    '@tractr/hapify-templates-models',
    '@tractr/hapify-templates-rest-dtos',
    '@tractr/hapify-templates-rext-client',
  ],
};