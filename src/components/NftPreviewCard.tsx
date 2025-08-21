const NftPreviewCard = () => {
  return (
    <article className="card-width rounded-card bg-Blue-900 p-6 flex flex-wrap justify-center items-center gap-6">
      <div className="group relative w-[302px] h-[302px] rounded-lg bg-[url(image-equilibrium.jpg)] bg-cover">
        <div className="absolute w-[302px] h-[302px] rounded-lg  group-hover:bg-Cyan-400/50 group-hover:cursor-pointer">
          <img
            src="icon-view.svg"
            alt="equilibrium"
            className="invisible absolute group-hover:visible group-hover:top-32 group-hover:left-32"
          />
        </div>
      </div>

      <div className="">
        <h1 className="text-white text-preset-1 hover:text-Cyan-400 hover:cursor-pointer">
          Equilibrium #3429
        </h1>
        <p className="text-Blue-500 mt-4">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between items-center my-6">
          <div className="flex gap-2 items-center justify-start">
            <img src="icon-ethereum.svg" alt="ethereum icon" />
            <span className="text-Cyan-400 text-preset-3-semi">0.041 ETH</span>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <img src="icon-clock.svg" alt="clock icon" />
            <span className="text-Blue-500 text-preset-3-regular">
              {" "}
              3 days left
            </span>
          </div>
        </div>
        <div className="h-[1px] bg-Blue-800 mb-6"></div>
        <div className="flex justify-start items-center gap-4">
          <img
            src="image-avatar.png"
            alt="avatar"
            className="w-8 border border-white rounded-full"
          />
          <p className="text-Blue-500 text-preset-3-regular">
            Creation of{" "}
            <span className="text-white text-preset-3-regular hover:text-Cyan-400 hover:cursor-pointer">
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default NftPreviewCard;
