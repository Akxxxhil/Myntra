import React, { useState } from "react";

function Rewards() {
  const rewardData = [
    {
      id: 1,
      heading: "Register snitch coins",
      Description: "Register and get INR 25 snitch coins!",
      price:25
    },
    {
      id: 2,
      heading: "Snitch coins on numbers of referrals",
      Description: "When you reach 5 referrals you get INR 100 snitch coins.",
      price:100
    },
    {
      id: 3,
      heading: "Birthday snitch coins",
      Description:
        " Tell us your birth date and get INR 100 snitch coins during your birthday month.",
        price:25
    },
    {
      id: 4,
      heading: "Product review snitch coins",
      Description: "Write a product review and get INR 25 snitch coins.",
      price:100
    },
    {
      id: 5,
      heading: "Referral Program",
      Description:
        "Invite your friends and get INR 100 snitch coins when they sign up.",
        price:100
    },
  ];
  const [rewardtoggle, setRewardtoggle] = useState(false);

  function rewardspage() {
    setRewardtoggle(!rewardtoggle);
  }

  return (
    <div>
      {rewardtoggle ? (
        <div className="border border-black bg-white p-4">
          <div className="bg-black px-2 py-2 text-white text-left text-xl mb-4">Welcome to SNITCH</div>
          <div className="grid grid-cols-2 gap-4  overflow-auto">
            {rewardData.map((item) => {
              return (
                <div
                  className="flex flex-col justify-between p-4 h-[130px] w-[300px]"
                  
                  key={item.id}
                >
                  <div>
                    <p className="font-bold text-normal">{item.heading}</p>
                    <p className="text-sm">{item.Description}</p>
                  </div>
                  <button className="mt-2 bg-purple-700 text-white py-1 rounded">
                    Unlock INR  {item.price}
                    
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      <button
        onClick={rewardspage}
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        {rewardtoggle ? "Close" : "Rewards"}
      </button>
    </div>
  );
}

export default Rewards;