import React, { useState } from 'react'

const FormSection = ({ title, fields }) => {

    const [formData, setformData] = useState({});
    const [isEditing, setisEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setisEditing(false);
    };
    return (
        <div className='bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 w-full max-w-xl shadow-lg mb-6 hover:scale-[1.01] transition'>
            <h2 className="text-xl font-semibold mb-4 text-gray-200">{title}</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    {fields.map((field) => (
                        <input key={field.label} placeholder={field.label} type={field.type} value={formData[field.label] || ""} onChange={(e) => setformData({
                            ...formData, [field.label]: e.target.value
                        })} className='mb-3 px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition' />
                    ))}

                    <button type="submit" className='mt-3 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium cursor-pointer'>Submit</button>

                </form>
            ) : (
                <div>
                    {fields.map((field) => (
                        <p className="text-gray-300 mb-1">
                            <span className="font-medium text-white">{field.label}:</span> {formData[field.label] || "—"}
                        </p>
                    ))}

                    <button className='mt-3 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium cursor-pointer' onClick={() => setisEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default FormSection