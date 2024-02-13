import images from '../../../assits/opacha.jpg';
import { getFile } from '../../../components/api/api';

const ExchangeTable = ({ exchangeTable, toggleActive }) => {
    return (
        <div className='rounded-3xl shadow-lg overflow-hidden w-full mb-20 lg:mb-6'>
            <div className='overflow-x-auto'>
                <table className="min-w-full">
                    <thead className="bg-gray-800 text-white uppercase text-sm leading-normal">
                        <tr className='text-center'>
                            <th className="py-3 px-6">#</th>
                            <th className="py-3 px-6">photo</th>
                            <th className="py-3 px-6">full name</th>
                            <th className="py-3 px-6">gift name</th>
                            <th className="py-3 px-6">group name</th>
                            <th className="py-3 px-6">rate</th>
                            <th className="py-3 px-6">date</th>
                            <th className="py-3 px-6">active</th>
                            {/* <th className="py-3 px-6">action</th> */}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-light">
                        {exchangeTable ?
                            exchangeTable.map((item, i) => (
                                <tr key={item.id} className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200 w-full">
                                    <th className="py-2 px-6">{i + 1}</th>
                                    <td className="py-2 px-6 flex justify-center">
                                        <img
                                            className='w-14 h-14 rounded-full'
                                            src={item.attachmentId === null ? images : getFile + item.attachmentId}
                                            alt="nofound" />
                                    </td>
                                    <td className="py-2 px-6">{item.fullName}</td>
                                    <td className="py-2 px-6">{item.giftName}</td>
                                    <td className="py-2 px-6">{item.groupName}</td>
                                    <td className="py-2 px-6">{item.giftRate}</td>
                                    <td className="py-2 px-6">{item.date}</td>
                                    <td className="py-2 px-6">
                                        <input
                                            type="checkbox"
                                            disabled={true}
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                            checked={item.active}
                                            onChange={() => toggleActive(item.id)}
                                        />
                                    </td>
                                    {/* <td className="py-2 px-6">
                                <div className="flex item-center justify-center">
                                    <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white active:scale-95 tracking-widest rounded-lg shadow-lg font-semibold py-1.5 px-4 duration-300">info</button>
                                </div>
                            </td> */}
                                </tr>
                            )) : (
                                <tr className='border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200 w-full'>
                                    <th className="text-center py-5 text-xl tracking-wide" colSpan='9'>Exchange not found 😊</th>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ExchangeTable