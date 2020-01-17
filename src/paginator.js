import React from 'react'

function Paginator ({ page, setPage, size }) {
  return (
    <div className="table-row paginator">
      {
        Array(size).fill(0).map((_, i) => (
          <div className="paginator-block" onClick={() => setPage(i)}>
            {i}
          </div>
        ))
      }
    </div>
  );
}

export default Paginator;
