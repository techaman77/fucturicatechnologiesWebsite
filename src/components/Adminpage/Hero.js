import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth';

const TableComponent = lazy(() => import('./TableComponent'));
const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formsFetched, setFormsFetched] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [serialSearchQuery, setSerialSearchQuery] = useState('');
    const [modalLoading, setModalLoading] = useState(false);
    const[showPopup, setShowPopup] = useState(false);
    const[userIdToDelete, setUserIdToDelete] = useState('');

    const userId = useSelector((state) => state.auth.userId);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSerialSearchChange = (e) => {
        setSerialSearchQuery(e.target.value);
    };

    const handleTabClose = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://futurica-backend.vercel.app/logout', { userId });

            dispatch(logout());

            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

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

        window.addEventListener("beforeunload", (e) => { handleTabClose(e) });

        return () => {
            window.removeEventListener("beforeunload", (e) => { handleTabClose(e) });
        };
    }, []);

    const handleRowClick = (userId) => {
        setIsModalOpen(true); // Open modal instantly
        setFormsFetched(null); // Clear previous data
        setModalLoading(true); // Set loading state

        // Fetch data after opening the modal
        fetchFormDetails(userId);
    };

    const handleDeleteClick = (userId) => {
        setUserIdToDelete(userId);
        setShowPopup(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await axios.delete(`https://futurica-backend.vercel.app/deleteUser`, {
                data: {userId: userIdToDelete},
                headers: {
                  'Content-Type': 'application/json',
                }});
            setUsers((prevUsers) => prevUsers.filter(user => user.userId !== userIdToDelete));
        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setShowPopup(false);
        }
    };

    const handleCancelDelete = () => {
        setShowPopup(false);
    };

    const fetchFormDetails = async (userId) => {
        try {
            const response = await axios.post('https://futurica-backend.vercel.app/search-forms', { employeeId: userId });
            setFormsFetched(response.data);
        } catch (err) {
            setError(err.response.data.message);

            // Display the error for 2 seconds
            setTimeout(() => {
                setError(null);
                setFormsFetched(null);
            }, 2000);
        } finally {
            setModalLoading(false); // Stop loading state
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormsFetched(null);
        setSerialSearchQuery('');
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredForms = formsFetched?.filter((form) =>
        form.serialNumber?.toLowerCase().includes(serialSearchQuery.toLowerCase())
    );

    return (
        <div className='w-full flex min-h-[650px] justify-center mb-20'>
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
                            <div className='overflow-y-scroll w-full h-[400px]'>
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
                                        <tr key={user.id} className='text-center cursor-pointer hover:bg-[#666666] hover:bg-opacity-[0.3]'>
                                            <td className='border px-4 py-2' onClick={() => handleRowClick(user.userId)}>{user.name}</td>
                                            <td className='border px-4 py-2' onClick={() => handleRowClick(user.userId)}>{user.totalFormsSubmitted}</td>
                                            <td className='border px-4 py-2' onClick={() => handleRowClick(user.userId)}>{user.rejectedForm}</td>
                                            <td>
                                                <FontAwesomeIcon 
                                                    icon={faTrashCan} 
                                                    color='red' 
                                                    onClick={() => handleDeleteClick(user.userId)}/>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                        ) : (
                            <p>No users found</p>
                        )}
                    </div>
                </div>

                {showPopup && (
                    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
                        <div className='bg-white p-5 rounded-lg test-center'>
                            <p>Are you sure you want to delete this user?</p>
                                <div className='mt-4'>
                                    <button
                                        onClick={handleCancelDelete}
                                        className='px-4 py-2 bg-blue-500 test-white rounded-md mr-2'>
                                        Cancel
                                </button> 
                                <button 
                                    onClick={handleConfirmDelete}
                                    className='px-4 py-2 bg-blue-500 test-white rounded-md mr-2'>
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                )}


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
                                {modalLoading ? (
                                    <div>Loading form details...</div>
                                ) : filteredForms && filteredForms.length > 0 ? (
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
