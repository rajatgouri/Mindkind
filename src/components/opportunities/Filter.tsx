
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Filter() {
  return (
    <>
      <div >
        <div className="ms:text-left text-center">
          <span className="ms:d-block ">
            <button
              className={classNames(
                "border-t border-b border-l ms:border-r  text-black  lg:max-w-7xl  px-4 text-lg bg-gold  ms:mw-button ms:px-5 ms:pt-5 ms:pb-5 pb-2 pt-2  justify-center rounded-l-md ml:rounded-lg"
              )}
            >
              Active
            </button>
          </span>
          <span className="ms:d-block ms:mt-5">
            <button
              className={classNames(
                "border-t border-b border-r ms:border-l text-white   px-4 text-lg bg-black ms:mw-button  ms:px-5 ms:pt-5 ms:pb-5 pb-2 pt-2  justify-center rounded-r-md ml:rounded-lg"
              )}
            >
              Expired
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
