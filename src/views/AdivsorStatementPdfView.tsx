import React, { FunctionComponent, useContext } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { AppState, AppContext } from "../App";
import { AdvisorStatementPdf } from "../components/Advisor/AdvisorStatementPdf";

export type AdvisorStatementPdfViewParams = {
  id: string;
}

export const AdvisorStatementPdfView: FunctionComponent<{}> = () => {
  const { id } = useParams<AdvisorStatementPdfViewParams>()
  const { courses, advisors, amountPerParticipant, year } = useContext<AppState>(AppContext)
  const advisor = advisors[id]

  return (
    <>
      <div className="no-print">
        <Link to="/">Back</Link>
        <button onClick={() => window.print()}>Print</button>
      </div>

      {advisor && <AdvisorStatementPdf advisor={advisor} courses={courses.filter(course => course.advisor?.id === advisor.id)} year={year} amountPerParticipant={amountPerParticipant}></AdvisorStatementPdf>}
    </>
  )
}
