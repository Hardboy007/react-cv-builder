import React from 'react'
import FormSection from './components/FormSection'


const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-10'>
      <h1 className='text-4xl md:text-5xl font-bold mb-8 tracking-tight'>CV Builder</h1>
      <FormSection
        title="General Info"
        fields={[
          { label: "Name", type: "text" },
          { label: "Email", type: "email" },
          { label: "Mobile number", type: "tel" }
        ]}
      />
      <FormSection
        title="Education"
        fields={[
          { label: "University's Name", type: "text" },
          { label: "Title of Study", type: "text" },
          { label: "Date", type: "date" }
        ]}
      />

      <FormSection
        title="Experience"
        fields={[
          { label: "Company's Name", type: "text" },
          { label: "Position Title", type: "text" },
          { label: "what were your responsibilities", type: "text" },
          { label: "From Date", type: "date" },
          { label: "To Date", type: "date" }
        ]}
      />
    </div>
  )
}

export default App