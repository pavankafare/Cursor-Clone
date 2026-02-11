"use client"
import { useMutation, useQuery } from "convex/react";
import { api } from '../../convex/_generated/api';
import { Button } from "@/components/ui/button";


const page = () => {
  const projects = useQuery(api.projects.get)
  const crateProject = useMutation(api.projects.create)
  return (
    <div className='flex flex-col gap-2 p-4'>
      <Button onClick={() => crateProject({
        name: "New Project123"
      })}>Add New</Button>
      {projects?.map((project) => (
        <div className="border rounded p-2 flex flex-col" key={project}>
          <p>{project.name}</p>
          <p>Owner Id: {`${project.ownerId}`}</p>
        </div>
      ))}
    </div>
  )
}

export default page

