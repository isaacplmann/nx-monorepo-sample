module.exports = {
  name: 'customers-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customers/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
