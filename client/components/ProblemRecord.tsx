import React from 'react';
import { IProblem } from '@/types/problem';

interface  ProblemRecord {
  record: IProblem
}
const ProblemRecord: React.FC<ProblemRecord> = ({record}) => {
  return (
      <div className="embla__slide">
          <img width={350} src="img-problems/depressia.jpeg" />
          <p className="legend">{record.title}</p>
      </div>
  )
}
export default ProblemRecord;
