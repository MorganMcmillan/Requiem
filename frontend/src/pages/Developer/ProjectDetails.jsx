import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const mockProject = {
  name: 'My Awesome Project',
  summary: 'This is a project that will change the world!',
  link: 'https://github.com/my-awesome-project'
};

const mockRequirements = [
  { id: 1, description: 'Users should be able to log in with their email and password.' },
  { id: 2, description: 'The application should have a dark mode.' },
  { id: 3, description: 'The application should be responsive on mobile devices.' }
];

const ProjectDetails = () => {
  return (
    <Card>
      <h2>{mockProject.name}</h2>
      <p>{mockProject.summary}</p>
      <a href={mockProject.link} target="_blank" rel="noopener noreferrer">Learn More</a>
      <h3>Available Requirements</h3>
      <ul>
        {mockRequirements.map(req => (
          <li key={req.id}>
            {req.description}
            <Button>Add to Project</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProjectDetails;
