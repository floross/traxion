# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## @tractr/hapify-templates-nestjs-models [1.0.1](https://github.com/tractr/stack/compare/@tractr/hapify-templates-nestjs-models@1.0.0...@tractr/hapify-templates-nestjs-models@1.0.1) (2021-03-08)


### Bug Fixes

* change prepare scripts to prepublishOnly and not build when installing packages ([17366ad](https://github.com/tractr/stack/commit/17366ada324f19b5a853a96a01f42996a43385b8))

# @tractr/hapify-templates-nestjs-models 1.0.0 (2021-03-04)


### Bug Fixes

* add the rights files into packages to publish to npm registry ([760c1f9](https://github.com/tractr/stack/commit/760c1f98da944f39f821c7d4e30847e229bba44d))
* enfore repository settings to match with tractr/stack and allow npm publish ([0bd1ea3](https://github.com/tractr/stack/commit/0bd1ea38f5c1fc5f88e5611b214de8418bd59bdc))
* overrides the controllers in the end instead of on the flow ([79acae7](https://github.com/tractr/stack/commit/79acae79cfd8dff632ba686d15eb8c4e5c62669d))
* **hapify generation:** fix the path format of hapify files ([c091863](https://github.com/tractr/stack/commit/c0918634696ff9848cb6803b8a3ea25daf3e2e92))
* **model templates:** fix bug when reading entity without populate query param ([6ea84a3](https://github.com/tractr/stack/commit/6ea84a3bb5b87c67fbf28543188a061618973519))
* **model templates:** fix gitignore to include generated files ([5686d97](https://github.com/tractr/stack/commit/5686d97046b01163e7f72026c96a2903802b2e65))
* **nestjs-models:** change controller import injection to use the dtoService string token ([018d2f3](https://github.com/tractr/stack/commit/018d2f3019832dace8b714a0b7b38f97ebf99270))
* **nestjs-user:** fix generation model inconsistence and style ([fdf9b56](https://github.com/tractr/stack/commit/fdf9b56a8755231f51d50f551c03a3baaf377c61))
* **nestjs-user:** use named DI to be able to override inside the modules ([cf9a9ab](https://github.com/tractr/stack/commit/cf9a9abb9e101b9e83107b613d628639f15e9ed0))
* **templates-models:** add and rename constants files ([ff388a2](https://github.com/tractr/stack/commit/ff388a26396c9908c72e8a6cf2ee5c8faf368460))


### Features

* **backend-starter:** add backen-starter application ([ba7af92](https://github.com/tractr/stack/commit/ba7af928cd5296ac3a3264d0c2be93d25fe6aedd))
* **model template:** add many to many feature to templates ([332f8c5](https://github.com/tractr/stack/commit/332f8c5982f7102466e8b66451e41db1171a095e))
* **model templates:** add an upsert route to model templates ([9394d64](https://github.com/tractr/stack/commit/9394d643396054b5ac8c6867ea1306dc6acdd9c4))
* **model templates:** add dynamic modules to templates ([39aaf6f](https://github.com/tractr/stack/commit/39aaf6f0f3a90c1ea8850a82dabb08be6b2d6db8))
* **model templates:** add enums to prisma schema and dto validation ([a7abc35](https://github.com/tractr/stack/commit/a7abc35d79498e8db4cf0a71d10dca90fed51de1))
* **model templates:** add filters and validators to templates and add array handling in dtos ([86a127e](https://github.com/tractr/stack/commit/86a127ed91126e3702f13f4c186415548bd44714))
* **model templates:** add model templates for create route ([a4d28aa](https://github.com/tractr/stack/commit/a4d28aa52badebd88186158d51ffe78d4c514dbf))
* **model templates:** add non-regression unit tests ([34151a5](https://github.com/tractr/stack/commit/34151a5b6b5a8ffc7b0a11e4a072975e05b7ec72))
* **model templates:** add oneToMany relation to templates ([77ca71a](https://github.com/tractr/stack/commit/77ca71a26d8c6ba23c4a16bad15520e5c3843b1f))
* **model templates:** add OneToOne relation handling and populate features ([3e1c22f](https://github.com/tractr/stack/commit/3e1c22f016e7ce96986623165e8ceed1dfcd8aa6))
* **model templates:** add pagination and sort to route findMany ([859afa2](https://github.com/tractr/stack/commit/859afa24057902a9bafc7fe00baa892951381e0c))
* **model templates:** add populate feature to dependant models ([2bf6c3e](https://github.com/tractr/stack/commit/2bf6c3e43a18bd47f94472df50991f855827b738))
* **model templates:** add possibilty to handle auto-increment number ids AND string uuid ([fa9597f](https://github.com/tractr/stack/commit/fa9597f9c7064dc47a67c2ef2c60194cc00b701e))
* **model templates:** add route find many to templates ([4a0df13](https://github.com/tractr/stack/commit/4a0df13fe9b5c20bcd53db8644d52f57fa306cc4))
* **model templates:** add templates for count route ([f9c7c97](https://github.com/tractr/stack/commit/f9c7c97b9d1b62303fbe58e23cea2669e1434be3))
* **model templates:** add templates for findUnique route ([704e853](https://github.com/tractr/stack/commit/704e8538e2d93e40d3829522e665f09addef332c))
* **model templates:** add templates for update and delete routes ([ff274d6](https://github.com/tractr/stack/commit/ff274d6a06be74ab72c5e196560076bb4dddc930))
* **model templates:** working on unit test of rest dto service ([32c4bd8](https://github.com/tractr/stack/commit/32c4bd8624147565419cd8416763569ead397359))