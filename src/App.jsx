export default function App() {
  return (
    <div className="bg-[#fafafa] min-h-screen w-screen relative overflow-y-scroll py-8">
      <div className="bg-gradient-to-t from-[#953bff] via-[#af3efe] to-[#c841ff] h-3/5 w-1/2 rounded-br-full absolute top-0 left-0 md:w-1/4 md:h-[92%]"></div>
      <div className="bg-gradient-to-t from-[#f9f4fa] to-[#f7f5fa] h-1/2 w-1/2 rounded-tl-full absolute bottom-0 right-0 md:w-1/5 md:h-5/6"></div>
      <div className="relative">
        <div className="h-[99.666667%] w-[99.666667%] flex flex-col gap-10 justify-center items-center md:flex-row">
          <div className="md:w-2/5 md:justify-items-end">
          <div className="h-[555px] w-[260px] bg-white rounded-3xl shadow-2xl flex justify-center items-center">
            <div className="h-[96%] w-[94%] bg-[#f5f3f8] rounded-3xl space-y-2 space-x-2">
              <div className="bg-gradient-to-r from-[#973bfd] to-[#db42ff] h-[70px] rounded-t-3xl rounded-b-md flex justify-between pt-4 px-2 relative">
                <div className="absolute w-32 h-4 bg-white top-0 left-1/2 -translate-x-1/2 rounded-b-xl"></div>
                <div className="pt-[14px]">
                  <i className="fa-solid fa-angle-left text-white"></i>
                </div>
                <div className="flex items-center pl-2 mr-auto">
                  <img
                    src="\images\avatar.jpg"
                    alt="Avatar"
                    className="w-8 rounded-full border-white border-2 mr-2"
                  />
                  <div className="text-white">
                    <p className=" font-rubik text-sm">Samuel Green</p>
                    <p className=" text-xs opacity-50">Available to Walk</p>
                  </div>
                </div>
                <div className="text-white pt-[14px]">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
              <div className="space-y-2 pr-2">
                <p className="bg-[#ede4f4] font-rubik text-[10px] text-[#9b3bfe] w-2/3 rounded-xl p-2">
                  That sounds great. I'd be happy to discuss more.
                </p>
                <p className="bg-[#ede4f4] font-rubik text-[10px] text-[#9b3bfe] w-2/3 rounded-xl p-2">
                  Could you send over some pictures of your dog. please?
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-end space-x-1">
                    <img
                      src="\images\dog-image-1.jpg"
                      alt="dog"
                      className="w-12 rounded-lg"
                    />
                    <img
                      src="\images\dog-image-2.jpg"
                      alt="dog"
                      className="w-12 rounded-lg"
                    />
                    <img
                      src="\images\dog-image-3.jpg"
                      alt="dog"
                      className="w-12 rounded-lg"
                    />
                  </div>
                  <p className="bg-white font-rubik text-[10px] text-[#9b3bfe] w-2/3 rounded-xl p-2 ml-auto">
                    Here are a few pictures. She's a happy girl!
                  </p>
                  <p className="bg-white font-rubik text-[10px] text-[#9b3bfe] w-2/3 rounded-xl p-2 ml-auto">
                    Can you make it?
                  </p>
                </div>
                <p className="bg-[#ede4f4] font-rubik text-[10px] text-[#9b3bfe] w-2/3 rounded-xl p-2">
                  She looks so happy! The time we discussed works. How long
                  shall I take her out for?
                </p>
                <div className="bg-gradient-to-l from-[#973bfd] to-[#db42ff] h-8 w-3/4 rounded-bl-sm rounded-t-xl rounded-br-xl p-2 flex items-center justify-between">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="relative h-4 w-4 rounded-full border-2 border-white opacity-50"></div>
                    <p className="font-rubik text-[10px] text-white opacity-75">
                      30 minute walk
                    </p>
                  </div>
                  <p className="font-rubik text-lg text-white font-medium">
                    $29
                  </p>
                </div>
                <div className="bg-gradient-to-l from-[#973bfd] to-[#db42ff] h-8 w-3/4 rounded-bl-sm rounded-t-xl rounded-br-xl p-2 flex items-center justify-between">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="relative h-4 w-4 rounded-full border-2 border-white opacity-50"></div>
                    <p className="font-rubik text-[10px] text-white opacity-75">
                      1 hour walk
                    </p>
                  </div>
                  <p className="font-rubik text-lg text-white font-medium">
                    $49
                  </p>
                </div>
              </div>
              <div className="pr-2 py-1">
                <input
                  type="text"
                  className="w-full rounded-3xl h-9 font-rubik text-xs p-3"
                  placeholder="Type a message.."
                />
                <div className="relative bottom-[32px] left-[194px] w-7 h-7 bg-black rounded-full flex items-center justify-center">
                <i class="fa-solid fa-angle-right text-white"></i>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="flex items-center justify-center md:w-3/5 md:justify-items-center md:pr-8">
          <div className="flex flex-col items-center justify-center font-rubik p-2 w-10/12 gap-4 mr-1 md:items-start md:w-[394px]">
            <p className="text-3xl font-medium font-rubik">Simple Booking</p>
            <p className="font-rubik text-sm text-center opacity-50 md:text-left md:leading-6">
              Stay in touch with our dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again all through the chat.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}