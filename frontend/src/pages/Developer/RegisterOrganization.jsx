import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const RegisterOrganization = () => {
  return (
    <Card>
      <h2>Register Your Organization</h2>
      <p>Are you a startup, a corporation, or an individual developer?</p>
      <div>
        <Button>Startup</Button>
        <Button>Corporation</Button>
        <Button>Individual</Button>
      </div>
      <p>Already have an organization? <a href="/login">Log in</a></p>
    </Card>
  );
};

export default RegisterOrganization;
