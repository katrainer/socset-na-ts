import React, {useEffect, useState} from 'react';
import s from './Pagination.module.css'

type PaginatorPropsType = {
    totalCount: number
    pageCount: number
    callback: (page: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> =
    React.memo(({
                    totalCount,
                    pageCount,
                    callback,
                }) => {
        const [curPage, setCurPage] = useState(1)
        const totalPages = Math.ceil(totalCount / pageCount)
        const pages = [] as number[]

        function createPages(pages: number[], pagesCount: number, currentPage: number) {
            if (pagesCount > 10) {
                if (currentPage > 5) {
                    for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                        pages.push(i)
                        if (i === pagesCount) break
                    }
                } else {
                    for (let i = 1; i <= 10; i++) {
                        pages.push(i)
                        if (i === pagesCount) break
                    }
                }
            } else {
                for (let i = 1; i <= pagesCount; i++) {
                    pages.push(i)
                }
            }
        }

        createPages(pages, totalPages, curPage)

        const toFirstPage = () => setCurPage(1)
        const toLastPage = () => setCurPage(totalPages)

        const [test, setTest] = useState<null | number>(null)
        useEffect(() => {
            if (test) {
                callback(curPage)
            }
            setTest(1)
        }, [curPage])

        return (
            <div className={s.pages}>
                <span onClick={toFirstPage}> {'<<'} </span>
                <span onClick={() => setCurPage(curPage - 1)}>{'<'} </span>
                {pages.map((page, index) => <span
                    key={index}
                    className={curPage === page ? s.currentPage : s.page}
                    onClick={() => setCurPage(page)}>{page} </span>)}
                <span onClick={() => setCurPage(curPage + 1)}> {'>'} </span>
                <span onClick={toLastPage}>{'>>'} </span>
            </div>
        );
    });