'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { EditIcon, DeleteIcon, X } from 'lucide-react';
import Navbar from '@/app/components/navbar';
import { Loader2 } from 'lucide-react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Page = () => {
  const [modelTests, setModelTests] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [updatedData, setUpdatedData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchModelTests = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/activities');
        const data = await res.json();
        setModelTests(data);
      } catch (error) {
        console.error('Error fetching model tests:', error);
        toast.error('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchModelTests();
  }, []);

  const handleEditClick = (id: string, test: any) => {
    setIsEditing(id);
    setUpdatedData(test);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const value = e.target.value;
    setUpdatedData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleUpdate = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/activities/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();
      if (res.ok) {
        setModelTests((prevTests) =>
          prevTests.map((test) => (test._id === id ? { ...test, ...updatedData } : test))
        );
        setIsEditing(null);
        toast.success('Activity updated successfully!');
      } else {
        throw new Error(data.error || 'Update failed');
      }
    } catch (error:any) {
      console.error('Failed to update:', error);
      toast.error(error.message || 'Failed to update');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/activities/${id}`, { method: 'DELETE' });
      const data = await res.json();

      if (res.ok) {
        setModelTests((prevTests) => prevTests.filter((test) => test._id !== id));
        toast.success('Activity deleted successfully!');
      } else {
        throw new Error(data.error || 'Delete failed');
      }
    } catch (error:any) {
      console.error('Failed to delete:', error);
      toast.error(error.message || 'Failed to delete');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      
      <div className="lg:max-w-7xl pb-10 xl:max-w-[8xl] 2xl:max-w-[10xl] mt-[140px] mx-auto bg-white rounded-lg shadow-lg sm:p-12">
        <button onClick={() => router.back()} className="text-blue-500 hover:text-blue-700 mb-4">
          {'< Back'}
        </button>
        <h1 className="text-3xl font-bold text-center mb-6 text-[#2060b6]">Update Activities Data</h1>
        {loading && <p className="text-center text-blue-500">Loading...</p>}
        
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Project Name</th>
                <th className="px-4 py-2 border">Unit Output</th>
                <th className="px-4 py-2 border">Customer</th>
                <th className="px-4 py-2 border">Type of Machine</th>
                <th className="px-4 py-2 border">Year of Test</th>
                <th className="px-4 py-2 border">Remarks</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {modelTests.map((test) => (
                <tr key={test._id}>
                  <td className="px-4 py-2 border">{test.projectName}</td>
                  <td className="px-4 py-2 border">{test.unitOutput}</td>
                  <td className="px-4 py-2 border">{test.customer}</td>
                  <td className="px-4 py-2 border">{test.machineType}</td>
                  <td className="px-4 py-2 border">{test.yearOfTest}</td>
                  <td className="px-4 py-2 border">{test.remarks}</td>
                  <td className="px-4 py-2 border flex justify-between">
                    <button onClick={() => handleEditClick(test._id, test)} className="text-blue-500 hover:text-blue-700">
                      <EditIcon className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleDelete(test._id)} className="text-red-500 hover:text-red-700">
                      <DeleteIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 lg:w-[70vw]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Data</h2>
              <button onClick={() => setIsEditing(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <input type="text" value={updatedData.projectName} onChange={(e) => handleInputChange(e, 'projectName')} className="w-full p-2 mb-2 border rounded" placeholder="Project Name" />
            <input type="text" value={updatedData.unitOutput} onChange={(e) => handleInputChange(e, 'unitOutput')} className="w-full p-2 mb-2 border rounded" placeholder="Unit Output" />
            <input type="text" value={updatedData.customer} onChange={(e) => handleInputChange(e, 'customer')} className="w-full p-2 mb-2 border rounded" placeholder="Customer" />
            <input type="text" value={updatedData.machineType} onChange={(e) => handleInputChange(e, 'machineType')} className="w-full p-2 mb-2 border rounded" placeholder="Machine Type" />
            <input type="text" value={updatedData.yearOfTest} onChange={(e) => handleInputChange(e, 'yearOfTest')} className="w-full p-2 mb-2 border rounded" placeholder="Year of Test" />
            <textarea value={updatedData.remarks} onChange={(e) => handleInputChange(e, 'remarks')} className="w-full p-2 mb-2 border rounded" placeholder="Remarks" />
            <button
  onClick={() => handleUpdate(isEditing)}
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full flex items-center justify-center gap-2"
  disabled={loading} // Disable button while loading
>
  {loading && <Loader2 className="animate-spin h-5 w-5 text-white" />}
  Save
</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

