import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect} from "react"
import { useSearchParams } from "react-router-dom"

type Props = {
  Page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
}

export default function JobPagination({Page,setPage,totalPages}:Props){

  const[searchparams,setSearchparams]=useSearchParams();

  useEffect(() => {
  const pageFromUrl = Number(searchparams.get("page"))
  if (pageFromUrl) {
    setPage(pageFromUrl)
  }
}, [])

  useEffect(()=>{
    setSearchparams({page:Page.toString()})
  },[Page])
    return(
        <>
             <div className="mt-12 w-full">
        <Pagination className="w-full">
          <PaginationContent className="flex justify-center w-full flex-wrap gap-2">

            <PaginationItem>
              <PaginationPrevious
                className={`h-10 ${
                  Page === 1
                    ? "opacity-50 pointer-events-none"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (Page > 1) setPage(Page - 1)
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={Page === index + 1}
                  className="cursor-pointer w-10 h-10 flex items-center justify-center"
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                className={`h-10 ${
                  Page === totalPages
                    ? "opacity-50 pointer-events-none"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (Page < totalPages) setPage(Page + 1)
                }}
              />
            </PaginationItem>

          </PaginationContent>
        </Pagination>
      </div>

        </>
    )
}
     