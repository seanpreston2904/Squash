import { IssueEntry } from "../IssueEntry";

export const IssueTable: React.FunctionComponent = () => {

    return(

        <div className='space-y-1'>
            <IssueEntry/>
            <IssueEntry/>
            <IssueEntry/>
            <IssueEntry/>
            <IssueEntry/>
        </div>

    );

}