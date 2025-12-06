import { Bold,Italic,Code,LinkBtn,Header1,Header2,Header3,ListDisc,Quotes,ListNum } from "@/components/ui/buttons/FormattingButtons"
import { CodeBlock } from "./CodeBlock"
export default function FormMarkDown(){
    return(
        <>
            <div className="w-full flex items-center justify-start gap-2 p-2 rounded bg-dark800 border border-gray-600">
                <div className="flex items-center justify-start gap-2">
                    <Bold/>
                    <Italic/>
                    <Code/>
                    <LinkBtn/>
                </div>
                <div className="h-8 w-[1px] bg-gray-600"></div>
                <div className="flex items-center justify-start gap-2">
                    <Header1/>
                    <Header2/>
                    <Header3/>
                </div>
                <div className="h-8 w-[1px] bg-gray-600"></div>
                <div className="flex items-center justify-start gap-2">
                    <ListDisc/>
                    <ListNum/>
                    <Quotes/>
                </div>
                <div className="h-8 w-[1px] bg-gray-600"></div>
                <div className="flex items-center justify-start gap-2">
                    <CodeBlock/>
                </div>
            </div>
        </>
    )
}