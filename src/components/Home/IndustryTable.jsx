

const IndustryTable = ({ item }) => {
    return (
        <div className='w-7/12'>
            <h2 className='text-2xl font-semibold text-center '>{item.title}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Industry</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows*/}
                        {item.subIndustries.map((subIndustries, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td className='text-lg'>{subIndustries.title}</td>
                                <td>{subIndustries.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IndustryTable