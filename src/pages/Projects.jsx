import React, { useEffect } from 'react'
import {useState} from 'react'
import { fetchProjects } from '../utils/projectApi'
import { CircularProgress, Typography } from '@mui/material'



const Projects = () => {
  const [projects,setProjects]= useState([])
  const [isLoading, setIsLoading]= useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(()=>{
    const loadProjects = async()=>{
      try { const data =await fetchProjects()
        setProjects(data)
      } catch (error) {
        console.error('failed to fetch projects', error)
        setErrorMessage(error)
      } finally {
        setIsLoading(false)
      }
    }
    loadProjects()
  },[])
  if(isLoading){
    return (<div className="center-loader">
      <CircularProgress/>
    </div>)
  }
  if(errorMessage){
    return <Typography variant='h6' color='error'>{errorMessage}</Typography>
  }
  return (
    <div>
      {
        projects.length>0 
        ?
        <div>
          {projects.map(project=>(
            <div key={project.id} style={{marginBottom:'16px'}}>
            card
            </div>
          ))}
        </div>
        :
        <Typography variant='h6'>There is no projects yet.</Typography>
      }
    </div>
  )
}

export default Projects