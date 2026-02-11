import React from 'react';
import { StudentRegistrationForm } from './components/StudentRegistrationForm';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Toaster position="top-center" richColors />
      <StudentRegistrationForm />
    </div>
  );
}

export default App;
