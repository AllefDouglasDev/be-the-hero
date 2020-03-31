const generateUniqeID = require('../../src/utils/generateUniqueID');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqeID();

    expect(id).toHaveLength(8);
  });
});
