import React, { useEffect, useState } from "react";
import "../../../globalcss/style.css";
import giftImg from "../../../assits/itca.jpg";
import { getFile } from "../../../components/api/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactPaginate from "react-paginate";

const GiftCard = ({ gifts, page, handelPageClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toShow, setItemToShow] = useState("");

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="w-full flex justify-evenly flex-wrap mt-10 font-inika">
        {gifts ? (
          gifts.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/4 h-[30rem] sm:h-[24rem] lg:h-[23rem] xl:h-[24rem] p-5">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-slate-500
                 duration-300 mb-8">
                <div className="w-full h-1/2 overflow-hidden">
                  <LazyLoadImage
                    src={item.attachmentId === null ? giftImg : getFile + item.attachmentId}
                    alt="Gift"
                    effect="blur"
                    className="hover:scale-110 w-full h-full lazyload"
                    width='100%'
                    height='100%'
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">{item.name}</div>
                  <p className="text-gray-700 text-base text-center">{item.rate} coin</p>
                </div>
                <div className="px-6 pt-4 text-center">
                  <button className="btm-info" onClick={() => {
                    openModal();
                    setItemToShow(item);
                  }}>Gift Info</button>
                </div>

                {isModalOpen && (
                  <div className={`${isModalOpen ? 'zoom-modal' : ''} fixed inset-0 flex items-center justify-center z-50`}>
                    <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-4 w-full sm:w-1/2">
                      <div className="font-bold tracking-wider text-[1.4rem] border-b pb-2 text-lg flex justify-between items-center">
                        <span>{toShow.name}</span>
                        <span className="hover:cursor-pointer hover:opacity-50 duration-200" onClick={closeModal}><i class="fa-solid fa-xmark"></i></span>
                      </div>
                      <div className="mt-5 flex justify-start items-start flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-[35%] h-52 md:h-64 lg:h-40 overflow-hidden rounded-xl">
                          <LazyLoadImage
                            src={getFile + toShow.attachmentId}
                            alt="Gift"
                            effect="blur"
                            className="hover:scale-110 w-full h-full lazyload"
                            width='100%'
                            height='100%'
                          />
                        </div>
                        <div className="text-start mt-5 mt-lg-0 ps-0 lg:ps-5 w-full lg:w-[65%]">
                          <p className="flex justify-between mb-3 w-full border-b pb-1.5">
                            <span className="font-semibold me-3">Description:
                            </span> {toShow.description}
                          </p>
                          <p className="flex justify-between mb-3 w-full border-b pb-1.5">
                            <span className="font-semibold me-3">Coin:
                            </span> {toShow.rate}
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex justify-end items-center mt-5">
                        <button
                          className="font-semibold bg-green-500 py-2 px-6 text-white rounded-lg active:scale-90 duration-300"
                          onClick={closeModal}
                        >
                          Ok
                        </button>
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="w-1/4 rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 mr-3 mb-8">
            <img className="w-full h-52 object-cover" src={giftImg} alt="Gift" />
            <p className="text-center my-3 font-semibold tracking-wider">Gift not found 😊</p>
          </div>
        )}
      </div>
      <div className='mt-7 mb-10 text-center'>
        <ReactPaginate className="navigation"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handelPageClick}
          pageRangeDisplayed={5}
          pageCount={page}
          previousLabel="<"
          renderOnZeroPageCount={null}
          nextClassName='nextBtn'
          previousClassName='prevBtn'
        />
      </div>
    </>
  );
};

export default GiftCard;
