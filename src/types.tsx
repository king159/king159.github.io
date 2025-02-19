export interface Publication {
    author: string
    venue: string
    time: string
    title: string
}

export interface PublicationData {
    link: {
        github?: string
        paper?: string
    }
    author: string
    title: string
    venue: string
    tldr: string
    time: string
    bibtex?: string
    abstract: string
    image_path: string
}

export interface Filters {
    showAll: boolean
    showFirstAuthor: boolean
    showPublished: boolean
    showCurrentYear: boolean
    showJournal: boolean
    showConference: boolean
}

export interface PublicationPredicates {
    isFirstAuthor: boolean
    isPublished: boolean
    isCurrentYear: boolean
    isJournal: boolean
    isConference: boolean
}
