import React from 'react'

/// Simple alert banner. Students use for confirmation messages.
export default function Message({ type = 'info', text, onClose }) {

  return( 
  <div 
    className={`alert alert-${type} d-flex align-items-center justify-content-between`}
    role="alert">
    <span>
      {type === 'success' && '✓ '}
      {type === 'danger' && '⚠️ '}
    </span>
    {onClose &&(
      <button type = "button" className="btn-close" aria-label="Close" onClick={onClose}> </button>
    )}
  </div>
  );
}
