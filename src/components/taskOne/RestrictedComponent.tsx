function RestrictedComponent () {
  return (
    <div style={{ background: 'lightGrey'}}>
      <h3>Protected content</h3>
      <p>(displayed only when authorized)</p>
    </div>
    );
    
};


export default RestrictedComponent;
