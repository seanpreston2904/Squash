import { IssueTable } from "../../shared/IssueTable";
import { IssueTableDetailed } from "../../shared/IssueTableDetailed";

export const Home: React.FunctionComponent = () => {

    return(

        <div>
            
            <div className='text-center h-32 flex flex-col'>
                <h1 className='text-4xl text-gray-600 font-semibold my-auto'>Good Afternoon, John</h1>
            </div>

            <div className='w-3/4 mx-auto space-y-4'>
                <h3 className='text-gray-600 text-xl text-center'>Your Issues</h3>
                <IssueTable />
            </div>

            <div className='w-3/4 mx-auto space-y-4 mt-10'>
                <h3 className='text-gray-600 text-xl text-center'>All Issues</h3>
                <IssueTableDetailed />
            </div>
            
        </div>

    );

}