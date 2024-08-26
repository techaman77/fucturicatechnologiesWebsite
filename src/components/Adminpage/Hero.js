import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TableComponent = lazy(() => import('./TableComponent'));

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formsFetched, setFormsFetched] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [serialSearchQuery, setSerialSearchQuery] = useState(''); // State for serial number search

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSerialSearchChange = (e) => {
        setSerialSearchQuery(e.target.value);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://futurica-backend.vercel.app/users');
                const filteredUsers = response.data.filter(user => !user.role);
                setUsers(filteredUsers);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    const handleRowClick = async (userId) => {
        try {
            const response = await axios.post('https://futurica-backend.vercel.app/search-forms', { employeeId: userId });
            setFormsFetched(response.data);
            setIsModalOpen(true);
        } catch (err) {
            setError(err.message);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormsFetched(null);
        setSerialSearchQuery(''); // Reset serial number search query when closing modal
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Filter formsFetched by serial number
    const filteredForms = formsFetched?.filter((form) =>
        form.serialNumber?.toLowerCase().includes(serialSearchQuery.toLowerCase())
    );

    return (
        <div className='w-full flex h-[650px] justify-center'>
            <div className='w-[90%] flex flex-col items-center justify-center gap-5'>
                <div className='w-full flex justify-center'>
                    <Link to='/register-employee'>
                        <button type="submit" className="mt-4 bg-gradient-to-r from-[#007BFF] to-[#0056B3] text-white p-2 rounded-lg">
                            Register New Employee
                        </button>
                    </Link>
                </div>
                <div className='bg-[#fff] rounded-2xl shadow-2xl w-[80%] flex flex-col items-center'>
                    <div className='flex items-center gap-20 py-5'>
                        <h2 className='text-[#666666] font-semibold text-[24px]'>
                            All <span className='text-[#FB861E]'>Employee's</span>
                        </h2>
                        <input
                            type="text"
                            placeholder="Search users by name..."
                            value={searchQuery}
                            className='border border-[#666666] rounded-[30px] px-6 py-2'
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className='flex justify-center py-10 px-5 w-full'>
                        {loading ? (
                            <p>Loading users...</p>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : filteredUsers.length > 0 ? (
                            <table className='table-auto w-full rounded-2xl'>
                                <thead>
                                    <tr className='bg-[#E8F4FF] h-[70px] text-[#666666]'>
                                        <th className='px-4 border font-medium py-2'>Name</th>
                                        <th className='px-4 border font-medium py-2'>Total Forms Submitted</th>
                                        <th className='px-4 border font-medium py-2'>Rejected Form</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id} className='text-center cursor-pointer hover:bg-[#666666] hover:bg-opacity-[0.3]' onClick={() => handleRowClick(user.userId)}>
                                            <td className='border px-4 py-2'>{user.name}</td>
                                            <td className='border px-4 py-2'>{user.totalFormsSubmitted}</td>
                                            <td className='border px-4 py-2'>{user.rejectedForm}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No users found</p>
                        )}
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 w-full bg-black bg-opacity-50 flex justify-center items-center overflow-hidden">
                        <div className="bg-white text-[#666666] w-[90%] h-[80vh] overflow-y-auto p-6 rounded-lg">
                            <div className='flex items-center justify-between py-5'>
                                <h2 className="text-xl font-semibold ">Forms Details</h2>
                                <input
                                    type="text"
                                    placeholder="Search by Serial Number..."
                                    value={serialSearchQuery}
                                    className='border border-[#666666] rounded-[30px] px-6 py-2 '
                                    onChange={handleSerialSearchChange}
                                />
                                <button className="bg-gray-500 text-white hover:text-[#000] p-2 hover:bg-[#FB861E] rounded-lg" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        
                            <Suspense fallback={<div>Loading table...</div>}>
                                {filteredForms && filteredForms.length > 0 ? (
                                    <TableComponent formsFetched={filteredForms} />
                                ) : (
                                    <p>No user details available.</p>
                                )}
                            </Suspense>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
