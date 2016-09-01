describe('genericTest', function() {
  it('should fail in development and pass elsewhere', function() {
    expect( app ).not.toBeUndefined();
  });
});
