import React from 'react';

export default function CancelBtn({ onClick }) {
  return (
    <button title="Cancel" aria-label="Cancel" onClick={onClick}>
      Cancel
    </button>
  );
}
