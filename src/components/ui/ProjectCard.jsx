import { useState } from 'react';
import Badge from './Badge';
import Button from './Button';


export default function ProjectCard({ title, image, badges, description, demoLink, codeLink, className="" }) {

    return (
        <div className="mx-4 md:my-4 lg:mx-8 border border-slate-300 rounded-lg hover:shadow-lg">
            <img src={image} alt={title} className="rounded-t-lg"/>
            <div className="p-4 text-slate-900">
                <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                    {badges.map(tag => (
                        <Badge key={tag} variant="skills">{tag}</Badge>
                    ))}
                </div>
                <div className="w-full flex justify-between mt-6">
                    <Button href={demoLink} target="_blank" variant="project">Live Demo</Button>
                    <Button href={codeLink} target="_blank" variant="project">View Code</Button>
                </div>
            </div>
        </div>
    )
}