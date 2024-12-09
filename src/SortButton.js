import React from 'react';

const SortButton = ({ onSort, sortOrder }) => {
  return (
    <div className="text-center mt-3">
      <button className="btn btn-primary" onClick={onSort}>
        Сортировать {sortOrder ? 'по возрастанию' : 'по убыванию'}
      </button>
    </div>
  );
};

export default SortButton;