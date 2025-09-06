import { projectsData } from '@/utlits/fackData/projectData'

export function getProjectBySlug(slug) {
    return projectsData.find(project => project.slug === slug)
}

export function getAllProjectSlugs() {
    return projectsData.map(project => project.slug)
}

export function getRelatedProjects(currentSlug, category, limit = 3) {
    return projectsData
        .filter(project => project.slug !== currentSlug && project.category === category)
        .slice(0, limit)
}
