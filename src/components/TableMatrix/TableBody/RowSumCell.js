import {useState, useEffect} from 'react';
import {sumRowNumbers} from '../../../core/function';

const RowSumCell = ({row, handleMouseEnter, handleMouseLeave}) => {
  const [sum, setSum] = useState(sumRowNumbers(row));

  useEffect(() => {
    setSum(sumRowNumbers(row));
  }, [row]);

  return (
    <td className="table-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="amount sum">{sum}</div>
    </td>
  );
};

export default RowSumCell;
