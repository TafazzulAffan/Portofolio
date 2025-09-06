import Image from 'next/image'
import React from 'react'
import { projectsData } from '@/utlits/fackData/projectData'
import { notFound } from 'next/navigation'

const SingleProject = ({ params }) => {
    const { slug } = params
    
    // Find project by slug
    const project = projectsData.find(project => project.slug === slug)
    
    // If project not found, show 404
    if (!project) {
        notFound()
    }

    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>{project.category.toUpperCase()} - {project.client.toUpperCase()}</p>
                        <h1>{project.title}</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image 
                    width={1095} 
                    height={1072} 
                    sizes='100vw' 
                    style={{width:"100%", height:"auto"}} 
                    src={project.src} 
                    alt={project.title} 
                />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>{project.year}</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>{project.client}</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>{project.services}</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>{project.project}</h3>
                            </div>
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Description
                            </h2>
                            <p>{project.description}</p>
                            {project.detailedDescription && (
                                <p>{project.detailedDescription}</p>
                            )}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    {project.galleryImages && project.galleryImages.map((image, index) => (
                        <div key={index} className="col-lg-6">
                            <div className={`single-image wow fadeInUp delay-0-${(index + 1) * 2}s`}>
                                <Image 
                                    width={633} 
                                    height={679} 
                                    sizes='100%' 
                                    style={{width:"100%", height:"auto"}} 
                                    src={image} 
                                    alt={`${project.title} gallery image ${index + 1}`} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject

// Generate static params for all projects
export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }))
}

// Generate metadata for each project
export async function generateMetadata({ params }) {
    const { slug } = params
    const project = projectsData.find(project => project.slug === slug)
    
    if (!project) {
        return {
            title: 'Project Not Found',
        }
    }

    return {
        title: `${project.title} - Portfolio`,
        description: project.description,
    }
}
