import React from 'react';


    const Filters = ({ filters, setFilters }) => {
        const handleCheckboxChange = (event) => {
            const { name, checked } = event.target;
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: checked,
            }));
        };

        const handleSelectChange = (event) => {
            const { name, value } = event.target;
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: value,
            }));
        };

    return (
        <div className="w-full laptop:w-1/4">
            {/* Filters */}
            <div className="bg-white p-4  font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Category</h2>
                <select
                    name="category"
                    value={filters.category || ''}
                    onChange={handleSelectChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select Category</option>
                    <option value="IT">Software Configuration</option>
                    <option value="Marketing">Marketing</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <div className="bg-white p-4 font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Experience level</h2>
                <div>
                    <label>
                        <input type="checkbox" name="entryLevel" onChange={handleCheckboxChange} className="mr-2" />
                        Entry Level
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="intermediate" onChange={handleCheckboxChange} className="mr-2" />
                        Intermediate
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        Expert
                    </label>
                </div>
            </div>
            <div className="bg-white p-4  font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Job type</h2>
                <div>
                    <label>
                        <input type="checkbox" name="hourly" onChange={handleCheckboxChange} className="mr-2" />
                        Hourly
                    </label>
                </div>
                <div className="mt-4">
                    <label>
                        <input type="checkbox" name="fixedPrice" onChange={handleCheckboxChange} className="mr-2" />
                        Fixed-Price
                    </label>
                </div>
            </div>
            <div className="bg-white p-4 font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Number of proposals</h2>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        Less than 5
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        5 to 10
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        10 to 15
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        15 to 20
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        20 to 50
                    </label>
                </div>
            </div>
            <div className="bg-white p-4 font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Client info</h2>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        My previous clients
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        Payment verified
                    </label>
                </div>
            </div>
            
            <div className="bg-white p-4 font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Client history</h2>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        No hires
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        1 to 9 hires
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        10+ hires
                    </label>
                </div>
            </div>
            <div className="bg-white p-4 font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Client location</h2>
                <select
                    name="clientLocation"
                    value={filters.clientLocation || ''}
                    onChange={handleSelectChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select Client Location</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    {/* Add more locations as needed */}
                </select>
            </div>
            <div className="bg-white p-4  font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Client time zones</h2>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Select client time zones</option>
                </select>
            </div>
            <div className="bg-white p-4  font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Project length</h2>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        Less than one month
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        1 to 3 months
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        3 to 6 months
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        More than 6 months
                    </label>
                </div>
            </div>
            <div className="bg-white p-4 font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Hours per week</h2>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        Less than 30 hrs/week
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        More than 30 hrs/week
                    </label>
                </div>
            </div>
            <div className="bg-white p-4 font-mono rounded-md shadow-sm mb-4">
                <h2 className="font-bold mb-4">Job Duration</h2>
                <div>
                    <label>
                        <input type="checkbox" name="expert" onChange={handleCheckboxChange} className="mr-2" />
                        Contract-to-hire roles
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Filters;
