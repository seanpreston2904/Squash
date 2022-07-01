import { FunnelFill } from "react-bootstrap-icons";
import { IssueEntry } from "../IssueEntry";

export const IssueTableDetailed: React.FunctionComponent = () => {

    return(

        <div className='flex flex-col'>
            <div className='flex space-x-2'>
                <input type='text' className='bg-gray-200 p-[0.375rem] pl-3 mb-2 rounded-lg grow' placeholder="Search for an issue" />
                <button className='bg-gray-200 w-[36px] h-[36px] rounded-lg flex'><FunnelFill className='mx-auto my-auto text-gray-600'/></button>
            </div>
            
            <div className='flex text-semibold text-gray-600 space-x-4 mb-2'>
                <div className='w-20 flex'><button className='mx-auto'>Type</button></div>
                <div className='grow'><button className=''>Name</button></div>
                <div className='w-[6.25rem]'><button className='mx-auto'>Status</button></div>
                <div className='w-[4.5rem]'><button className='mx-auto'>Date</button></div>
                
            </div>
            <hr/>
            <div className='space-y-1 mt-2'>

                <IssueEntry/>
                <IssueEntry/>
                <IssueEntry/>
                <IssueEntry/>
                <IssueEntry/>

            </div>
            
        </div>

    );

}