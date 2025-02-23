import React, { useState } from 'react'
import {
    KeyboardArrowDown as KeyboardArrowDownIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material'
import {
    Checkbox,
    FormControlLabel,
    Slide,
    Typography,
    Card,
    Box,
} from '@mui/material'

import PublicationCell from '../components/Publication/publication-cell.tsx'
import PublicationFilter from '../components/Publication/publication-filter.tsx'
import data from '../data/publication/publication-data.tsx'
import Main from '../layouts/main.tsx'
import { Publication, PublicationPredicates, Filters } from 'types.tsx'

function getPublicationPredicates(
    publication: Publication
): PublicationPredicates {
    const isFirstAuthor = publication.author.startsWith('Jinghao Wang')
    const isPublished = !(
        publication.venue === 'arXiv' ||
        publication.venue.includes('under review')
    )
    const isCurrentYear =
        publication.time.split('-')[0] === new Date().getFullYear().toString()
    const isJournal =
        publication.venue.includes('TPAMI') &&
        !publication.venue.includes('under review')
    const isConference =
        !publication.venue.includes('TPAMI') &&
        !publication.venue.includes('under review')
    return {
        isFirstAuthor,
        isPublished,
        isCurrentYear,
        isJournal,
        isConference,
    }
}

// Use the helper in checkPublication:
function checkPublication(publication: Publication, filters: Filters): boolean {
    const {
        showAll,
        showFirstAuthor,
        showPublished,
        showCurrentYear,
        showJournal,
        showConference,
    } = filters
    const predicates = getPublicationPredicates(publication)
    return (
        showAll ||
        ((!showFirstAuthor || predicates.isFirstAuthor) &&
            (!showPublished || predicates.isPublished) &&
            (!showCurrentYear || predicates.isCurrentYear) &&
            (!showJournal || predicates.isJournal) &&
            (!showConference || predicates.isConference))
    )
}

const countDic = data.reduce(
    (acc, publication) => {
        const {
            isFirstAuthor,
            isPublished,
            isCurrentYear,
            isJournal,
            isConference,
        } = getPublicationPredicates(publication)
        if (isFirstAuthor) acc.FirstAuthor += 1
        if (isPublished) acc.Published += 1
        if (isCurrentYear) acc.CurrentYear += 1
        if (isJournal) acc.Journal += 1
        if (isConference) acc.Conference += 1
        return acc
    },
    {
        FirstAuthor: 0,
        Published: 0,
        CurrentYear: 0,
        Journal: 0,
        Conference: 0,
        All: data.length,
    }
)

export default function PublicationPage() {
    const [filters, setFilters] = useState({
        showFirstAuthor: false,
        showPublished: false,
        showCurrentYear: false,
        showAll: true,
        showJournal: false,
        showConference: false,
    })
    const [expandAllAbstract, setExpandAllAbstract] = useState(false)
    const containerRef = React.useRef(null)
    const handleExpandClick = () => {
        setExpandAllAbstract(!expandAllAbstract)
    }

    return (
        <Main title="Publication">
            <Typography sx={{ mt: 4, mb: 2 }} variant="h1">
                Publication
            </Typography>
            {/* Filter Component */}
            <PublicationFilter
                filters={filters}
                setFilters={setFilters}
                countDic={countDic}
            />
            {/* Expand All Abstract */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControlLabel
                    label={
                        expandAllAbstract
                            ? 'Collapse All Abstract'
                            : 'Expand All Abstract'
                    }
                    control={
                        <Checkbox
                            onChange={handleExpandClick}
                            checked={expandAllAbstract}
                            icon={<KeyboardArrowDownIcon />}
                            checkedIcon={<KeyboardArrowUpIcon />}
                        />
                    }
                />
            </Box>

            {data.filter((publication) =>
                checkPublication(publication, filters)
            ).length === 0 && (
                <div>
                    <Slide
                        in={true}
                        timeout={500}
                        unmountOnExit
                        direction="left"
                    >
                        <Card>
                            <Typography
                                sx={{
                                    mt: 4,
                                    mb: 4,
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                                variant="h4"
                            >
                                No publication to show
                            </Typography>
                        </Card>
                    </Slide>
                </div>
            )}

            {data.map((publication) => {
                return (
                    <Slide
                        in={checkPublication(publication, filters)}
                        container={containerRef.current}
                        direction="left"
                        key={publication.title}
                        timeout={500}
                        unmountOnExit
                    >
                        <div>
                            <PublicationCell
                                data={publication}
                                expandAllAbstract={expandAllAbstract}
                            />
                        </div>
                    </Slide>
                )
            })}
        </Main>
    )
}
